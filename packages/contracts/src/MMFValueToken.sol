// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title MMFValueToken
 * @dev Share-Based Rebasable MMF Token (투자금 기준 방식)
 * @notice BUIDL 스타일의 MMF 토큰 - NAV 변동 시 자동 Rebase
 */
contract MMFValueToken is AccessControl, Pausable, ReentrancyGuard {
    // ========== ROLES ==========
    bytes32 public constant ASSET_MANAGER_ROLE = keccak256("ASSET_MANAGER_ROLE");
    bytes32 public constant NAV_UPDATER_ROLE = keccak256("NAV_UPDATER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    // ========== STATE VARIABLES ==========
    string public name = "MMF Value Token";
    string public symbol = "S-MMF";
    uint8 public constant decimals = 18;

    // Share-Based 핵심 변수
    uint256 private _totalShares;
    mapping(address => uint256) private _shares;

    // 투자 원금 추적
    uint256 private _totalPrincipal; // 전체 투자 원금
    mapping(address => uint256) private _principals; // 사용자별 투자 원금

    // NAV 관련
    uint256 public currentNAV; // 100000000 = 1.00000000 (8 decimals precision)
    uint256 public constant NAV_PRECISION = 100000000; // 10^8
    uint256 public lastNAVUpdateTime;
    
    // Rebase 관련
    uint256 public totalRebaseAmount; // 누적 Rebase 금액
    uint256 public lastRebaseTime;
    
    // 락업 관련
    mapping(address => uint256) public lockupUntil;
    uint256 public defaultLockupPeriod; // seconds
    
    // DT Token 주소 (Wrapped KRW)
    address public dtTokenAddress;
    
    // Pending Purchase (T+1 정산용)
    struct PendingPurchase {
        uint256 dtAmount;
        uint256 timestamp;
        uint256 navAtPurchase;
        bool processed;
    }
    
    mapping(address => PendingPurchase[]) public pendingPurchases;

    // ========== EVENTS ==========
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    
    event TokensPurchased(
        address indexed buyer,
        uint256 dtAmount,
        uint256 tokenAmount,
        uint256 nav,
        uint256 timestamp
    );
    
    event TokensRedeemed(
        address indexed redeemer,
        uint256 tokenAmount,
        uint256 dtAmount,
        uint256 nav,
        uint256 timestamp
    );
    
    event NAVUpdated(
        uint256 oldNAV,
        uint256 newNAV,
        uint256 timestamp,
        address updater
    );
    
    event Rebased(
        uint256 oldTotalSupply,
        uint256 newTotalSupply,
        int256 rebaseAmount,
        uint256 nav,
        uint256 timestamp
    );
    
    event LockupUpdated(
        address indexed user,
        uint256 lockupUntil
    );
    
    event PurchasePending(
        address indexed buyer,
        uint256 dtAmount,
        uint256 nav,
        uint256 timestamp
    );
    
    event PurchaseProcessed(
        address indexed buyer,
        uint256 index,
        uint256 timestamp
    );

    // ========== CONSTRUCTOR ==========
    constructor(
        address admin,
        address assetManager,
        address navUpdater,
        uint256 initialNAV,
        uint256 lockupPeriod
    ) {
        require(admin != address(0), "Invalid admin address");
        require(assetManager != address(0), "Invalid asset manager");
        require(navUpdater != address(0), "Invalid NAV updater");
        require(initialNAV > 0, "NAV must be positive");

        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(ASSET_MANAGER_ROLE, assetManager);
        _grantRole(NAV_UPDATER_ROLE, navUpdater);
        _grantRole(PAUSER_ROLE, admin);

        currentNAV = initialNAV;
        defaultLockupPeriod = lockupPeriod;
        lastNAVUpdateTime = block.timestamp;
        lastRebaseTime = block.timestamp;
    }

    // ========== MODIFIERS ==========
    modifier onlyAssetManager() {
        require(hasRole(ASSET_MANAGER_ROLE, msg.sender), "Caller is not asset manager");
        _;
    }

    modifier onlyNAVUpdater() {
        require(hasRole(NAV_UPDATER_ROLE, msg.sender), "Caller is not NAV updater");
        _;
    }

    // ========== SHARE-BASED BALANCE FUNCTIONS ==========

    /**
     * @dev 총 발행량 계산 (Share-Based, NAV 반영)
     * @notice balance = shares * currentNAV / NAV_PRECISION
     */
    function totalSupply() public view returns (uint256) {
        if (_totalShares == 0) return 0;
        return (_totalShares * currentNAV) / NAV_PRECISION;
    }

    /**
     * @dev 사용자 잔액 조회 (Share-Based, NAV 반영)
     * @notice balance = shares * currentNAV / NAV_PRECISION
     */
    function balanceOf(address account) public view returns (uint256) {
        if (_totalShares == 0) return 0;
        return (_shares[account] * currentNAV) / NAV_PRECISION;
    }

    /**
     * @dev 사용자 Share 조회
     */
    function sharesOf(address account) public view returns (uint256) {
        return _shares[account];
    }

    /**
     * @dev Token Amount로 Share 계산 (NAV 반영)
     * @notice shares = tokenAmount * NAV_PRECISION / currentNAV
     */
    function getSharesByTokenAmount(uint256 tokenAmount) public view returns (uint256) {
        if (_totalShares == 0) return (tokenAmount * NAV_PRECISION) / currentNAV;
        return (tokenAmount * NAV_PRECISION) / currentNAV;
    }

    /**
     * @dev Share로 Token Amount 계산 (NAV 반영)
     * @notice tokenAmount = shares * currentNAV / NAV_PRECISION
     */
    function getTokenAmountByShares(uint256 shareAmount) public view returns (uint256) {
        if (_totalShares == 0) return 0;
        return (shareAmount * currentNAV) / NAV_PRECISION;
    }

    // ========== PURCHASE FUNCTIONS ==========
    
    /**
     * @dev DT로 MMF Token 구매 (NAV 기준)
     * @param buyer 구매자 주소
     * @param dtAmount DT 금액
     * @notice shares = dtAmount * NAV_PRECISION / currentNAV
     *         balance = shares * currentNAV / NAV_PRECISION = dtAmount
     */
    function purchaseWithDT(
        address buyer,
        uint256 dtAmount
    )
        external
        onlyAssetManager
        whenNotPaused
        nonReentrant
        returns (uint256)
    {
        require(buyer != address(0), "Invalid buyer address");
        require(dtAmount > 0, "Amount must be positive");

        // NAV 기준으로 Share 계산
        // 예: 100 DT, NAV=100100000 → shares = 100 * 100000000 / 100100000 = 99.9
        uint256 sharesToMint = (dtAmount * NAV_PRECISION) / currentNAV;
        uint256 tokenAmount = dtAmount;

        // Share 발행
        _shares[buyer] += sharesToMint;
        _totalShares += sharesToMint;

        // 투자 원금 추적
        _principals[buyer] += dtAmount;
        _totalPrincipal += dtAmount;

        // 락업 적용
        if (defaultLockupPeriod > 0) {
            lockupUntil[buyer] = block.timestamp + defaultLockupPeriod;
            emit LockupUpdated(buyer, lockupUntil[buyer]);
        }

        // Pending Purchase 기록 (T+1 정산용)
        pendingPurchases[buyer].push(PendingPurchase({
            dtAmount: dtAmount,
            timestamp: block.timestamp,
            navAtPurchase: currentNAV,
            processed: false
        }));

        emit Transfer(address(0), buyer, tokenAmount);
        emit TokensPurchased(buyer, dtAmount, tokenAmount, currentNAV, block.timestamp);
        emit PurchasePending(buyer, dtAmount, currentNAV, block.timestamp);

        return tokenAmount;
    }

    /**
     * @dev Pending Purchase 처리 (T+1 정산)
     */
    function processPendingPurchase(
        address buyer,
        uint256 index
    ) 
        external 
        onlyAssetManager 
        returns (bool) 
    {
        require(index < pendingPurchases[buyer].length, "Invalid index");
        
        PendingPurchase storage pending = pendingPurchases[buyer][index];
        require(!pending.processed, "Already processed");
        require(
            block.timestamp >= pending.timestamp + 1 days,
            "T+1 not reached"
        );

        // 투자금 기준이므로 실제로는 조정 없음
        // (정책에 따라 NAV 차액 정산 로직 추가 가능)
        
        pending.processed = true;

        emit PurchaseProcessed(buyer, index, block.timestamp);
        return true;
    }

    // ========== REDEMPTION FUNCTIONS ==========
    
    /**
     * @dev MMF Token 환매 → DT 발행
     * @param tokenAmount 환매할 토큰 수량
     */
    function redeemToDT(uint256 tokenAmount) 
        external 
        whenNotPaused 
        nonReentrant 
        returns (uint256) 
    {
        require(tokenAmount > 0, "Amount must be positive");
        require(balanceOf(msg.sender) >= tokenAmount, "Insufficient balance");
        require(
            block.timestamp >= lockupUntil[msg.sender],
            "Tokens are locked"
        );

        // Share 소각
        uint256 sharesToBurn = getSharesByTokenAmount(tokenAmount);
        uint256 userTotalShares = _shares[msg.sender];

        _shares[msg.sender] -= sharesToBurn;
        _totalShares -= sharesToBurn;

        // 원금 차감 (비례적으로)
        uint256 principalToReduce = (_principals[msg.sender] * sharesToBurn) / userTotalShares;
        _principals[msg.sender] -= principalToReduce;
        _totalPrincipal -= principalToReduce;

        // 1:1 DT 금액
        uint256 dtAmount = tokenAmount;

        emit Transfer(msg.sender, address(0), tokenAmount);
        emit TokensRedeemed(msg.sender, tokenAmount, dtAmount, currentNAV, block.timestamp);

        return dtAmount;
    }

    /**
     * @dev 전체 잔액 환매
     */
    function redeemAll() external whenNotPaused nonReentrant returns (uint256) {
        uint256 userBalance = balanceOf(msg.sender);
        require(userBalance > 0, "No balance to redeem");
        require(
            block.timestamp >= lockupUntil[msg.sender],
            "Tokens are locked"
        );

        // 전체 Share 소각
        uint256 userShares = _shares[msg.sender];
        _shares[msg.sender] = 0;
        _totalShares -= userShares;

        // 전체 원금 차감
        uint256 userPrincipal = _principals[msg.sender];
        _principals[msg.sender] = 0;
        _totalPrincipal -= userPrincipal;

        uint256 dtAmount = userBalance;

        emit Transfer(msg.sender, address(0), userBalance);
        emit TokensRedeemed(msg.sender, userBalance, dtAmount, currentNAV, block.timestamp);

        return dtAmount;
    }

    // ========== NAV & REBASE FUNCTIONS ==========
    
    /**
     * @dev NAV 업데이트 및 자동 Rebase
     * @param newNAV 새로운 NAV (100000000 = 1.00000000)
     */
    function updateNAVAndRebase(uint256 newNAV)
        public
        onlyNAVUpdater
        whenNotPaused
        returns (bool)
    {
        require(newNAV > 0, "NAV must be positive");
        require(newNAV != currentNAV, "NAV unchanged");

        uint256 oldNAV = currentNAV;
        uint256 oldTotalSupply = totalSupply();

        // NAV 업데이트
        currentNAV = newNAV;
        lastNAVUpdateTime = block.timestamp;

        emit NAVUpdated(oldNAV, newNAV, block.timestamp, msg.sender);

        // 자동 Rebase 실행
        _executeRebase(oldNAV, newNAV, oldTotalSupply);

        return true;
    }

    /**
     * @dev NAV 업데이트 (소수점 입력 지원 - 정수/소수 분리)
     * @param integerPart 정수 부분 (예: 1)
     * @param decimalPart 소수점 부분 (예: 2365 = 0.00002365)
     * @notice 1.00002365 입력 시 → updateNAVAndRebaseDecimal(1, 2365)
     * @notice decimalPart는 NAV_PRECISION(100000000)보다 작아야 함
     */
    function updateNAVAndRebaseDecimal(
        uint256 integerPart,
        uint256 decimalPart
    )
        external
        onlyNAVUpdater
        whenNotPaused
        returns (bool)
    {
        require(decimalPart < NAV_PRECISION, "Decimal part must be less than NAV_PRECISION");
        uint256 newNAV = integerPart * NAV_PRECISION + decimalPart;
        return updateNAVAndRebase(newNAV);
    }

    /**
     * @dev NAV 업데이트 (소수점 자릿수 지정)
     * @param value 값 (예: 10002365)
     * @param decimalPlaces 소수점 자릿수 (예: 7)
     * @notice 1.0002365 입력 시 → updateNAVWithDecimals(10002365, 7)
     * @notice decimalPlaces는 최대 10까지 지원
     */
    function updateNAVWithDecimals(
        uint256 value,
        uint256 decimalPlaces
    )
        external
        onlyNAVUpdater
        whenNotPaused
        returns (bool)
    {
        require(decimalPlaces <= 10, "Too many decimal places");
        require(value > 0, "Value must be positive");

        uint256 divisor = 10 ** decimalPlaces;
        uint256 newNAV = (value * NAV_PRECISION) / divisor;

        return updateNAVAndRebase(newNAV);
    }

    /**
     * @dev Rebase 내부 로직
     */
    function _executeRebase(
        uint256 oldNAV,
        uint256 newNAV,
        uint256 oldTotalSupply
    ) private {
        if (_totalShares == 0) return;

        // 투자금 기준: Share는 고정, NAV 변동만 반영
        // 실제로는 totalSupply 계산 시 NAV 적용
        // 여기서는 단순화를 위해 Share 기반 유지
        
        int256 rebaseAmount = 0;
        
        // NAV 비율로 Rebase 계산 (예시)
        // 실제 구현 시 정책에 따라 조정
        if (newNAV > oldNAV) {
            // Positive Rebase
            uint256 increase = (oldTotalSupply * (newNAV - oldNAV)) / oldNAV;
            rebaseAmount = int256(increase);
            totalRebaseAmount += increase;
        } else {
            // Negative Rebase
            uint256 decrease = (oldTotalSupply * (oldNAV - newNAV)) / oldNAV;
            rebaseAmount = -int256(decrease);
            if (totalRebaseAmount >= decrease) {
                totalRebaseAmount -= decrease;
            } else {
                totalRebaseAmount = 0;
            }
        }

        lastRebaseTime = block.timestamp;

        uint256 newTotalSupply = totalSupply();
        
        emit Rebased(
            oldTotalSupply,
            newTotalSupply,
            rebaseAmount,
            newNAV,
            block.timestamp
        );
    }

    // ========== ERC20 TRANSFER FUNCTIONS ==========
    
    /**
     * @dev 토큰 전송
     */
    function transfer(address to, uint256 amount)
        external
        whenNotPaused
        returns (bool)
    {
        require(to != address(0), "Invalid recipient");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        require(
            block.timestamp >= lockupUntil[msg.sender],
            "Tokens are locked"
        );

        uint256 sharesToTransfer = getSharesByTokenAmount(amount);
        uint256 senderTotalShares = _shares[msg.sender];

        // Share 전송
        _shares[msg.sender] -= sharesToTransfer;
        _shares[to] += sharesToTransfer;

        // 원금 전송 (비례적으로)
        if (senderTotalShares > 0) {
            uint256 principalToTransfer = (_principals[msg.sender] * sharesToTransfer) / senderTotalShares;
            _principals[msg.sender] -= principalToTransfer;
            _principals[to] += principalToTransfer;
        }

        emit Transfer(msg.sender, to, amount);
        return true;
    }

    /**
     * @dev Allowance 조회
     */
    mapping(address => mapping(address => uint256)) private _allowances;

    function allowance(address owner, address spender) 
        public 
        view 
        returns (uint256) 
    {
        return _allowances[owner][spender];
    }

    /**
     * @dev Approve
     */
    function approve(address spender, uint256 amount) 
        external 
        returns (bool) 
    {
        require(spender != address(0), "Invalid spender");
        
        _allowances[msg.sender][spender] = amount;
        
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    /**
     * @dev TransferFrom
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    )
        external
        whenNotPaused
        returns (bool)
    {
        require(to != address(0), "Invalid recipient");
        require(balanceOf(from) >= amount, "Insufficient balance");
        require(
            block.timestamp >= lockupUntil[from],
            "Tokens are locked"
        );
        require(
            _allowances[from][msg.sender] >= amount,
            "Insufficient allowance"
        );

        uint256 sharesToTransfer = getSharesByTokenAmount(amount);
        uint256 fromTotalShares = _shares[from];

        // Share 전송
        _shares[from] -= sharesToTransfer;
        _shares[to] += sharesToTransfer;
        _allowances[from][msg.sender] -= amount;

        // 원금 전송 (비례적으로)
        if (fromTotalShares > 0) {
            uint256 principalToTransfer = (_principals[from] * sharesToTransfer) / fromTotalShares;
            _principals[from] -= principalToTransfer;
            _principals[to] += principalToTransfer;
        }

        emit Transfer(from, to, amount);
        return true;
    }

    // ========== ADMIN FUNCTIONS ==========
    
    /**
     * @dev DT Token 주소 설정
     */
    function setDTTokenAddress(address _dtTokenAddress) 
        external 
        onlyRole(DEFAULT_ADMIN_ROLE) 
    {
        require(_dtTokenAddress != address(0), "Invalid address");
        dtTokenAddress = _dtTokenAddress;
    }

    /**
     * @dev 기본 락업 기간 설정
     */
    function setDefaultLockupPeriod(uint256 period) 
        external 
        onlyRole(DEFAULT_ADMIN_ROLE) 
    {
        defaultLockupPeriod = period;
    }

    /**
     * @dev 특정 사용자 락업 설정
     */
    function setUserLockup(address user, uint256 until) 
        external 
        onlyRole(DEFAULT_ADMIN_ROLE) 
    {
        require(user != address(0), "Invalid user");
        lockupUntil[user] = until;
        emit LockupUpdated(user, until);
    }

    /**
     * @dev 일시 정지
     */
    function pause() external onlyRole(PAUSER_ROLE) {
        _pause();
    }

    /**
     * @dev 일시 정지 해제
     */
    function unpause() external onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    // ========== VIEW FUNCTIONS ==========
    
    /**
     * @dev 사용자의 Pending Purchase 개수
     */
    function getPendingPurchaseCount(address user) 
        external 
        view 
        returns (uint256) 
    {
        return pendingPurchases[user].length;
    }

    /**
     * @dev Pending Purchase 상세 조회
     */
    function getPendingPurchase(address user, uint256 index) 
        external 
        view 
        returns (
            uint256 dtAmount,
            uint256 timestamp,
            uint256 navAtPurchase,
            bool processed
        ) 
    {
        require(index < pendingPurchases[user].length, "Invalid index");
        PendingPurchase memory pending = pendingPurchases[user][index];
        return (
            pending.dtAmount,
            pending.timestamp,
            pending.navAtPurchase,
            pending.processed
        );
    }

    /**
     * @dev NAV를 소수점 형태로 반환 (1.00000000 형식)
     */
    function getNAVDecimal() external view returns (uint256, uint256) {
        return (currentNAV / NAV_PRECISION, currentNAV % NAV_PRECISION);
    }

    /**
     * @dev NAV_PRECISION 값 반환
     * @return NAV의 정밀도 (100000000 = 10^8)
     */
    function getNAVPrecision() external pure returns (uint256) {
        return NAV_PRECISION;
    }

    /**
     * @dev 사용자 락업 만료까지 남은 시간
     */
    function getLockupTimeRemaining(address user)
        external
        view
        returns (uint256)
    {
        if (block.timestamp >= lockupUntil[user]) {
            return 0;
        }
        return lockupUntil[user] - block.timestamp;
    }

    // ========== PRINCIPAL TRACKING FUNCTIONS ==========

    /**
     * @dev 사용자의 투자 원금 조회
     * @param account 조회할 주소
     * @return 투자 원금 (DT 기준)
     */
    function principalOf(address account) public view returns (uint256) {
        return _principals[account];
    }

    /**
     * @dev 전체 투자 원금 조회
     * @return 전체 투자 원금 (DT 기준)
     */
    function totalPrincipal() public view returns (uint256) {
        return _totalPrincipal;
    }

    /**
     * @dev 사용자의 수익 조회 (현재 잔액 - 원금)
     * @param account 조회할 주소
     * @return 수익 (양수면 이익, 음수면 손실)
     */
    function profitOf(address account) public view returns (int256) {
        uint256 balance = balanceOf(account);
        uint256 principal = _principals[account];
        return int256(balance) - int256(principal);
    }

    /**
     * @dev 사용자의 수익률 조회 (백분율, 100 = 1%)
     * @param account 조회할 주소
     * @return 수익률 (예: 500 = 5%)
     */
    function profitRateOf(address account) public view returns (int256) {
        uint256 principal = _principals[account];
        if (principal == 0) return 0;

        uint256 balance = balanceOf(account);
        int256 profit = int256(balance) - int256(principal);

        // 수익률 = (수익 / 원금) * 10000
        return (profit * 10000) / int256(principal);
    }

    /**
     * @dev 전체 수익 조회
     * @return 전체 수익
     */
    function totalProfit() public view returns (int256) {
        uint256 totalBalance = totalSupply();
        return int256(totalBalance) - int256(_totalPrincipal);
    }

}
