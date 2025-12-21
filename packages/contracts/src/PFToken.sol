// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title PFToken
 * @dev S-PF ERC-20 Token (PF bond token)
 * @notice Standard ERC-20 token with mint, burn, and pause capabilities
 */
contract PFToken is ERC20, ERC20Burnable, ERC20Pausable, AccessControl {
    // ========== ROLES ==========
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    // ========== STATE VARIABLES ==========
    uint256 public last_interest_amount;      // 마지막 이자 지급 금액
    uint256 public last_interest_timestamp;   // 마지막 이자 지급 시간

    // ========== EVENTS ==========
    event TokensMinted(address indexed to, uint256 amount, address indexed minter);
    event TokensBurned(address indexed from, uint256 amount);
    event InterestPaid(uint256 amount, uint256 timestamp, address indexed payer);

    // ========== CONSTRUCTOR ==========
    /**
     * @dev Constructor to initialize the PF token
     * @param admin Address that will have the default admin role
     * @param minter Address that will have the minter role
     * @param name_ Token name (e.g., "PF Token")
     * @param symbol_ Token symbol (e.g., "S-PF")
     */
    constructor(
        address admin,
        address minter,
        string memory name_,
        string memory symbol_
    ) ERC20(name_, symbol_) {
        require(admin != address(0), "Invalid admin address");
        require(minter != address(0), "Invalid minter address");
        require(bytes(name_).length > 0, "Name cannot be empty");
        require(bytes(symbol_).length > 0, "Symbol cannot be empty");

        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(MINTER_ROLE, minter);
        _grantRole(PAUSER_ROLE, admin);
    }

    // ========== MINTING FUNCTIONS ==========

    /**
     * @dev Mint new tokens
     * @param to Address to receive the minted tokens
     * @param amount Amount of tokens to mint
     */
    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) whenNotPaused {
        require(to != address(0), "Cannot mint to zero address");
        require(amount > 0, "Amount must be positive");

        _mint(to, amount);
        emit TokensMinted(to, amount, msg.sender);
    }

    /**
     * @dev Batch mint tokens to multiple addresses
     * @param recipients Array of addresses to receive tokens
     * @param amounts Array of amounts to mint
     */
    function batchMint(
        address[] calldata recipients,
        uint256[] calldata amounts
    ) external onlyRole(MINTER_ROLE) whenNotPaused {
        require(recipients.length == amounts.length, "Arrays length mismatch");
        require(recipients.length > 0, "Empty arrays");

        for (uint256 i = 0; i < recipients.length; i++) {
            require(recipients[i] != address(0), "Cannot mint to zero address");
            require(amounts[i] > 0, "Amount must be positive");

            _mint(recipients[i], amounts[i]);
            emit TokensMinted(recipients[i], amounts[i], msg.sender);
        }
    }

    // ========== BURNING FUNCTIONS ==========

    /**
     * @dev Burns tokens from caller's balance
     * @param amount Amount of tokens to burn
     */
    function burn(uint256 amount) public override whenNotPaused {
        super.burn(amount);
        emit TokensBurned(msg.sender, amount);
    }

    /**
     * @dev Burns tokens from specified account (requires allowance)
     * @param account Address to burn tokens from
     * @param amount Amount of tokens to burn
     */
    function burnFrom(address account, uint256 amount) public override whenNotPaused {
        super.burnFrom(account, amount);
        emit TokensBurned(account, amount);
    }

    // ========== PAUSE FUNCTIONS ==========

    /**
     * @dev Pause all token transfers
     */
    function pause() external onlyRole(PAUSER_ROLE) {
        _pause();
    }

    /**
     * @dev Unpause all token transfers
     */
    function unpause() external onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    // ========== OVERRIDES ==========

    /**
     * @dev Hook that is called before any transfer of tokens
     */
    function _update(
        address from,
        address to,
        uint256 value
    ) internal override(ERC20, ERC20Pausable) {
        super._update(from, to, value);
    }

    // ========== INTEREST PAYMENT FUNCTIONS ==========

    /**
     * @dev Record interest payment
     * @param amount Interest amount to record
     * @notice Only admin can call this function
     */
    function recordInterestPayment(uint256 amount)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        require(amount > 0, "Amount must be positive");

        last_interest_amount = amount;
        last_interest_timestamp = block.timestamp;

        emit InterestPaid(amount, block.timestamp, msg.sender);
    }

    /**
     * @dev Get last interest payment info
     * @return amount Last interest payment amount
     * @return timestamp Last interest payment timestamp
     */
    function getLastInterestPayment()
        external
        view
        returns (uint256 amount, uint256 timestamp)
    {
        return (last_interest_amount, last_interest_timestamp);
    }

    // ========== VIEW FUNCTIONS ==========

    /**
     * @dev Returns the number of decimals used by the token
     */
    function decimals() public pure override returns (uint8) {
        return 0;
    }

    /**
     * @dev Check if an address has minter role
     */
    function isMinter(address account) external view returns (bool) {
        return hasRole(MINTER_ROLE, account);
    }

    /**
     * @dev Check if an address has pauser role
     */
    function isPauser(address account) external view returns (bool) {
        return hasRole(PAUSER_ROLE, account);
    }
}
