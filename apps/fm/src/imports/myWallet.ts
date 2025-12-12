import {
  ethers,
  Wallet,
  JsonRpcProvider,
  Contract,
  TransactionResponse,
} from "ethers";

export const SECUCHAIN_BRIDGE_URL = "https://explorer.testnet.stopulse.co.kr/";
// Pulse테스트넷 정보
const PULSE_RPC_URL = "https://secuchain.testnet.stopulse.co.kr/";

// Pulse
export const SMMF_CONTRACT_ADDRESS =
  "0x793FCF9C06e126c00BfD3dF4DF2D237C0cCe8c83"; // sMMF 주소
export const SKRW_CONTRACT_ADDRESS =
  "0xaBba758C39BE3f4751Cf13F562E2dD6955648670";

// 잔액조회, 소수점, 전송을 위한 표준 ERC20 ABI
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function transfer(address to, uint256 amount) returns (bool)",
];
const ERC1400_ABI = [
  "function balanceOfByPartition(bytes32 partition, address tokenHolder) view returns (uint256)",
  "function operatorTransferByPartition(bytes32 partition,address from, address to, uint256 value, bytes data, bytes operatorData) returns (bytes32)",
  "function decimals() view returns (uint8)",
];

const MMF_ABI = [
  // ========== ERC20 기본 함수 ==========
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)",

  // ========== Share-Based 함수 ==========
  "function sharesOf(address account) view returns (uint256)",
  "function getSharesByTokenAmount(uint256 tokenAmount) view returns (uint256)",
  "function getTokenAmountByShares(uint256 shareAmount) view returns (uint256)",

  // ========== Purchase 함수 ==========
  "function purchaseWithDT(address buyer, uint256 dtAmount) returns (uint256)",
  "function processPendingPurchase(address buyer, uint256 index) returns (bool)",

  // ========== Redemption 함수 ==========
  "function redeemToDT(uint256 tokenAmount) returns (uint256)",
  "function redeemAll() returns (uint256)",

  // ========== NAV & Rebase 함수 ==========
  "function currentNAV() view returns (uint256)",
  "function updateNAVAndRebase(uint256 newNAV) returns (bool)",
  "function lastNAVUpdateTime() view returns (uint256)",
  "function lastRebaseTime() view returns (uint256)",
  "function totalRebaseAmount() view returns (uint256)",
  "function getNAVDecimal() view returns (uint256, uint256)",

  // ========== Lockup 함수 ==========
  "function lockupUntil(address) view returns (uint256)",
  "function defaultLockupPeriod() view returns (uint256)",
  "function getLockupTimeRemaining(address user) view returns (uint256)",

  // ========== Pending Purchase 함수 ==========
  "function getPendingPurchaseCount(address user) view returns (uint256)",
  "function getPendingPurchase(address user, uint256 index) view returns (uint256 dtAmount, uint256 timestamp, uint256 navAtPurchase, bool processed)",

  // ========== Access Control 함수 ==========
  "function hasRole(bytes32 role, address account) view returns (bool)",
  "function paused() view returns (bool)",

  // ========== Admin 함수 ==========
  "function setDTTokenAddress(address _dtTokenAddress)",
  "function setDefaultLockupPeriod(uint256 period)",
  "function setUserLockup(address user, uint256 until)",
  "function pause()",
  "function unpause()",

  "function updateNAVWithDecimals(uint256 value, uint256 decimalPlaces) external returns (bool)",

  // ========== Events ==========
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event Approval(address indexed owner, address indexed spender, uint256 value)",
  "event TokensPurchased(address indexed buyer, uint256 dtAmount, uint256 tokenAmount, uint256 nav, uint256 timestamp)",
  "event TokensRedeemed(address indexed redeemer, uint256 tokenAmount, uint256 dtAmount, uint256 nav, uint256 timestamp)",
  "event NAVUpdated(uint256 oldNAV, uint256 newNAV, uint256 timestamp, address updater)",
  "event Rebased(uint256 oldTotalSupply, uint256 newTotalSupply, int256 rebaseAmount, uint256 nav, uint256 timestamp)",
  "event LockupUpdated(address indexed user, uint256 lockupUntil)",
  "event PurchasePending(address indexed buyer, uint256 dtAmount, uint256 nav, uint256 timestamp)",
  "event PurchaseProcessed(address indexed buyer, uint256 index, uint256 timestamp)",
];

export const SOL_ADDRESS = "0x8DFeB78ecEe391149b1c2739cEd0f6992D0a5663";
export const USR_NAME = "C-2025-001";
export const USR_TYPE = "개인";
const PRIVATE_KEY =
  "0x47c496fe62e38aebcf4c5298cdae6889efed27b308fb473311d4a209e512f20e";

export const USR1_ADDRESS = "0x0158e26744ce0D3Cd07067FED6513463d87e7C34";
export const USR1_NAME = "C-2025-002";
export const USR1_TYPE = "법인";
export const USR1_KEY =
  "0cfb5d9627d075e69d5fc32e14f35e439c03be2690b441150175ad9330a4b5e7";

export const USR2_ADDRESS = "0xd5309cc4e90A8D09d8E1206D62a09cE2f7ed36f1";
export const USR2_NAME = "C-2025-003";
export const USR2_TYPE = "법인";
export const USR2_KEY =
  "4ff82f336926b30750e445a66bc41e604c1f7f7f59a03cd9fcc182564955c80f";

export const BROKER_ADDRESS = "0xf17f52151EbEF6C7334FAD080c5704D77216b732"; // 증권사 주소

const PULSE_PRIVATE_KEY =
  "0xcd2336d7c471a0f2f1da77e91bcaf71e96e40481415bdb062152b4d045e1702c";

export interface PurchaseTransaction {
  from: string;
  txid: string;
  amount: string;
  timestamp: number; // Unix timestamp (seconds)
  blockNumber: number;
}

export class MyWallet {
  private wallet: Wallet;
  wallet2: Wallet; // 개인유저1
  wallet3: Wallet; // 기업유저
  private walletAdmin: Wallet;
  private provider: JsonRpcProvider;
  balance: number = 0;

  smmf_balance: number = 0;
  smmf_decimals: number = 0;
  skrw_balance: number = 0;
  skrw_decimals: number = 0;

  purchaseHash: string = "";
  txHash2: string = "";

  recentPurchases: PurchaseTransaction[] = [];

  /**
   * @param privateKey 지갑을 생성하기 위한 개인키
   */
  constructor() {
    // Polygon Amoy 네트워크에 연결하기 위한 프로바이더를 생성합니다.
    this.provider = new ethers.JsonRpcProvider(PULSE_RPC_URL);
    // 개인키와 프로바이더를 사용하여 지갑 인스턴스를 생성합니다.
    this.wallet = new ethers.Wallet(PRIVATE_KEY, this.provider);
    this.wallet2 = new ethers.Wallet(USR1_KEY, this.provider);
    this.wallet3 = new ethers.Wallet(USR2_KEY, this.provider);

    this.walletAdmin = new ethers.Wallet(PULSE_PRIVATE_KEY, this.provider);
  }

  /**
   * 새로운 개인키를 생성하여 반환합니다.
   * @returns {string} 새로운 개인키
   */
  getNewPrivateKey(): string {
    const newWallet = ethers.Wallet.createRandom();
    this.wallet = new ethers.Wallet(newWallet.privateKey, this.provider);
    return newWallet.privateKey;
  }

  async purchase(amount: string): Promise<TransactionResponse> {
    const contract = new ethers.Contract(
      SKRW_CONTRACT_ADDRESS,
      ERC20_ABI,
      this.wallet
    );
    const amountString = Number(amount).toLocaleString("fullwide", {
      useGrouping: false,
    });
    const amountToSend = ethers.parseUnits(amountString, this.skrw_decimals);
    const tx = await contract.transfer(BROKER_ADDRESS, amountToSend);
    this.purchaseHash = tx.hash;
    return tx;
  }

  async updateNAVWithDecimals(
    value: number,
    decimalPlaces: number
  ): Promise<TransactionResponse> {
    console.log(`Nav =: ${value}, decimalPlaces = ${decimalPlaces}`);

    const contract = new ethers.Contract(
      SMMF_CONTRACT_ADDRESS,
      MMF_ABI,
      this.walletAdmin
    );
    const tx = await contract.updateNAVWithDecimals(
      ethers.parseUnits(value.toString(), decimalPlaces),
      decimalPlaces
    );
    return tx;
  }

  async updateNAVAndRebase(nav: number): Promise<TransactionResponse> {
    const navs = this.parseNAVString(nav);
    return this.updateNAVWithDecimals(navs[0], navs[1]);
  }

  parseNAVString(nav: string | number): [number, number] {
    const navStr = typeof nav === "number" ? nav.toFixed(10) : nav;
    // 끝 0 제거
    const trimmed = navStr.replace(/0+$/, "");
    const [intPart, decPart = ""] = trimmed.split(".");
    const decimalPlaces = 3;
    // 소수점 이하 3자리 확보
    const dec = (decPart + "000").slice(0, decimalPlaces);
    // value 추출 (정수부 + 소수점 이하 3자리)
    const value = Number(intPart + dec);
    return [value, decimalPlaces];
  }
  /**
   * 지갑 주소를 반환합니다.
   */
  getAddress(): string {
    return this.wallet.address;
  }

  async initialize(): Promise<void> {
    if (!this.provider) {
      throw new Error("MetaMask is not installed");
    }

    this.smmf_balance = Number(
      await this.getERC20Balance(SMMF_CONTRACT_ADDRESS, this.provider)
    );

    this.skrw_balance = Number(
      await this.getERC20Balance(SKRW_CONTRACT_ADDRESS, this.provider)
    );

    await this.fetchRecentPurchases();
  }

  async resync(): Promise<void> {
    this.smmf_balance = Number(
      await this.getERC20Balance(SMMF_CONTRACT_ADDRESS, this.provider)
    );

    this.skrw_balance = Number(
      await this.getERC20Balance(SKRW_CONTRACT_ADDRESS, this.provider)
    );
  }
  /**
   * 특정 ERC20 토큰의 잔액을 조회합니다.
   * @param tokenAddress 조회할 ERC20 토큰의 컨트랙트 주소
   * @returns 토큰 잔액 (string)
   */
  async getERC20Balance(
    tokenAddress: string,
    provider: JsonRpcProvider
  ): Promise<string> {
    try {
      const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
      const [rawBalance, decimals]: [bigint, number] = await Promise.all([
        contract.balanceOf(this.wallet.address),
        contract.decimals(),
      ]);

      if (tokenAddress == SMMF_CONTRACT_ADDRESS) {
        this.smmf_decimals = decimals;
      } else if (tokenAddress == SKRW_CONTRACT_ADDRESS) {
        this.skrw_decimals = decimals;
      }

      // 사람이 읽을 수 있는 형식으로 변환합니다.
      return ethers.formatUnits(rawBalance, decimals);
    } catch (error) {
      console.error(
        `[myWallet] Failed to get ERC20 balance for ${tokenAddress}:`,
        error
      );
      return "0.0"; // 오류 발생 시 잔액을 0으로 반환
    }
  }

  /**
   * ERC20 토큰을 다른 주소로 전송합니다.
   * @param tokenAddress 전송할 ERC20 토큰의 컨트랙트 주소
   * @param toAddress 토큰을 받을 주소
   * @param amount 전송할 토큰의 양 (문자열 형태)
   */
  async sendERC20Token(
    tokenAddress: string,
    toAddress: string,
    amount: string
  ): Promise<TransactionResponse> {
    const contract = new ethers.Contract(tokenAddress, ERC20_ABI, this.wallet);
    const decimals = await contract.decimals();
    const amountToSend = ethers.parseUnits(amount, decimals);
    const tx = await contract.transfer(toAddress, amountToSend);
    return tx;
  }

  /**
   * SKRW에서 BROKER_ADDRESS로 전송된 최근 5개의 트랜잭션을 검색합니다.
   */
  async fetchRecentPurchases(): Promise<void> {
    try {
      const contract = new ethers.Contract(
        SKRW_CONTRACT_ADDRESS,
        [
          "event Transfer(address indexed from, address indexed to, uint256 value)",
          "function decimals() view returns (uint8)",
        ],
        this.provider
      );

      // 최근 블록부터 검색 (최근 10000 블록 범위)
      const currentBlock = await this.provider.getBlockNumber();
      const fromBlock = Math.max(0, currentBlock - 200);

      // Transfer 이벤트 필터: to가 BROKER_ADDRESS인 것만
      const filter = contract.filters.Transfer(null, BROKER_ADDRESS);
      const events = await contract.queryFilter(
        filter,
        fromBlock,
        currentBlock
      );

      // 최근 5개만 가져오기 (역순으로 정렬)
      const recentEvents = events.slice(-5).reverse();

      // decimals 가져오기
      const decimals = await contract.decimals();

      // PurchaseTransaction 배열로 변환 (블록 정보와 함께)
      this.recentPurchases = await Promise.all(
        recentEvents.map(async (event) => {
          if (!("args" in event)) {
            throw new Error("Event does not have args");
          }
          const args = event.args;

          // 블록 정보 가져오기
          const block = await this.provider.getBlock(event.blockNumber);

          return {
            from: args[0] as string, // from address
            txid: event.transactionHash,
            amount: ethers.formatUnits(args[2], decimals), // value를 사람이 읽을 수 있는 형식으로
            timestamp: block?.timestamp || 0,
            blockNumber: event.blockNumber,
          };
        })
      );

      console.log("[myWallet] Recent purchases fetched:", this.recentPurchases);
    } catch (error) {
      console.error("[myWallet] Failed to fetch recent purchases:", error);
      this.recentPurchases = [];
    }
  }

  async mintMMF(
    address: string,
    amount: string
  ): Promise<TransactionResponse | null> {
    console.log("[mintMMF] Starting mint process...");
    console.log("[mintMMF] Address:", address);
    console.log("[mintMMF] Amount:", amount);
    console.log("[mintMMF] Admin wallet:", this.walletAdmin.address);

    // Admin 권한이 있는 지갑 사용
    const contract = new ethers.Contract(
      SMMF_CONTRACT_ADDRESS,
      MMF_ABI,
      this.walletAdmin
    );

    // Asset Manager Role 체크
    const ASSET_MANAGER_ROLE = ethers.keccak256(
      ethers.toUtf8Bytes("ASSET_MANAGER_ROLE")
    );
    console.log("[mintMMF] ASSET_MANAGER_ROLE:", ASSET_MANAGER_ROLE);

    const hasAssetManagerRole = await contract.hasRole(
      ASSET_MANAGER_ROLE,
      this.walletAdmin.address
    );
    console.log("[mintMMF] Has ASSET_MANAGER_ROLE:", hasAssetManagerRole);

    if (!hasAssetManagerRole) {
      throw new Error("지갑에 ASSET_MANAGER_ROLE 권한이 없습니다.");
    }

    // Paused 상태 체크
    const isPaused = await contract.paused();
    console.log("[mintMMF] Is paused:", isPaused);

    if (isPaused) {
      throw new Error("컨트랙트가 일시 정지 상태입니다.");
    }

    if (Number(amount) == 0) {
      console.log("[mintMMF] Amount is 0, returning null");
      return null;
    }

    // amount를 Ether 단위로 변환
    const amountToSend = ethers.parseEther(amount);
    console.log("[mintMMF] Amount to send (wei):", amountToSend.toString());

    // Gas 추정
    try {
      const estimatedGas = await contract.purchaseWithDT.estimateGas(
        address,
        amountToSend
      );
      console.log("[mintMMF] Estimated gas:", estimatedGas.toString());
    } catch (error) {
      console.error("[mintMMF] Gas estimation failed:", error);
      throw error;
    }

    // purchaseWithDT 실행
    console.log("[mintMMF] Calling purchaseWithDT...");
    const tx = await contract.purchaseWithDT(address, amountToSend, {
      gasLimit: 500000, // 가스 한도 증가
      gasPrice: 0,
    });
    console.log("[mintMMF] Transaction sent:", tx.hash);
    return tx;
  }
}

export const myWallet = new MyWallet();
