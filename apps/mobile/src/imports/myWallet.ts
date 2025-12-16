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
  "0xC290e84BE1886a08760b3468D4C3083A36C17a21"; // sMMF 주소
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
  "function decimals() view returns (uint8)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function currentNAV() view returns (uint256)",
  "function hasRole(bytes32 role, address account) view returns (bool)",
  "function paused() view returns (bool)",
  "function purchaseWithDT(address buyer, uint256 dtAmount) returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
  "function lockupUntil(address) view returns (uint256)",
  "function getPendingPurchaseCount(address user) view returns (uint256)",

  // ========== Share-Based 함수 ==========
  "function sharesOf(address account) view returns (uint256)",
  "function getSharesByTokenAmount(uint256 tokenAmount) view returns (uint256)",
  "function getTokenAmountByShares(uint256 shareAmount) view returns (uint256)",

  "function getActualValue(address account) view returns (uint256)",
  "function calculateRedemptionAmount(uint256 tokenAmount) view returns (uint256)",
  "function principalOf(address account) view returns (uint256)",
  "function profitOf(address account) view returns (uint256)",
  "function profitRateOf(address account) view returns (int256)",
  "function sharesOf(address account) view returns (uint256)",
  "function updateNAVWithDecimals(uint256 value, uint256 decimalPlaces) external returns (bool)",
  "function profitRateOf(address account) view returns (int256)",
];

export const SOL_ADDRESS = "0x8DFeB78ecEe391149b1c2739cEd0f6992D0a5663";
const PRIVATE_KEY =
  "0x47c496fe62e38aebcf4c5298cdae6889efed27b308fb473311d4a209e512f20e";
const USR1_AMOUNT = "1000000000";

export const USR1_ADDRESS = "0x0158e26744ce0D3Cd07067FED6513463d87e7C34";
export const USR1_KEY =
  "0cfb5d9627d075e69d5fc32e14f35e439c03be2690b441150175ad9330a4b5e7";
const USR2_AMOUNT = "5000000000";

export const USR2_ADDRESS = "0xd5309cc4e90A8D09d8E1206D62a09cE2f7ed36f1";
export const USR2_KEY =
  "4ff82f336926b30750e445a66bc41e604c1f7f7f59a03cd9fcc182564955c80f";
const USR3_AMOUNT = "500000000";

export const BROKER_ADDRESS = "0xf17f52151EbEF6C7334FAD080c5704D77216b732"; // 증권사 주소

const PULSE_PRIVATE_KEY =
  "0xcd2336d7c471a0f2f1da77e91bcaf71e96e40481415bdb062152b4d045e1702c";

export class MyWallet {
  wallet: Wallet; //기본유저
  wallet2: Wallet; // 개인유저1
  wallet3: Wallet; // 기업유저
  private provider: JsonRpcProvider;

  private walletAdmin: Wallet;
  private providerAdmin: JsonRpcProvider;

  balance: number = 0;

  // 기본유저
  smmf_balance: number = 0; //원금
  smmf_shares: number = 0; // 펀드가치

  profit1: string = "0";
  profitRate1: string = "0";

  smmf_decimals: number = 0;
  skrw_balance: number = 0;
  skrw_decimals: number = 0;

  // 유저1 (개인)
  smmf_balance2: number = 0;
  smmf_decimals2: number = 0;
  skrw_balance2: number = 0;
  skrw_decimals2: number = 0;

  // 유저2 (기업)
  smmf_balance3: number = 0;
  smmf_decimals3: number = 0;
  skrw_balance3: number = 0;
  skrw_decimals3: number = 0;

  purchaseHash: string = "";
  txHash2: string = "";

  /**
   * @param privateKey 지갑을 생성하기 위한 개인키
   */
  constructor() {
    this.provider = new ethers.JsonRpcProvider(PULSE_RPC_URL);
    this.wallet = new ethers.Wallet(PRIVATE_KEY, this.provider);
    this.wallet2 = new ethers.Wallet(USR1_KEY, this.provider);
    this.wallet3 = new ethers.Wallet(USR2_KEY, this.provider);

    this.walletAdmin = new ethers.Wallet(PULSE_PRIVATE_KEY, this.provider);
    this.providerAdmin = new ethers.JsonRpcProvider(PULSE_RPC_URL);
  }

  async initAccount(): Promise<void> {
    await this.resync();

    let tx = await this.updateNAVWithDecimals(1, 0);
    if (tx) {
      await tx.wait(1); // 1 confirmations
    }

    await this.initByAccount(this.wallet, USR1_AMOUNT, "0");
    await this.initByAccount(this.wallet2, USR2_AMOUNT, "0");
    await this.initByAccount(this.wallet3, USR3_AMOUNT, "0");
  }

  async initPurchase(): Promise<void> {
    let tx = await this.purchase(USR2_AMOUNT, this.wallet2);
    if (tx) {
      await tx.wait(1); // 1 confirmations
    }
    tx = await this.purchase(USR3_AMOUNT, this.wallet3);
    if (tx) {
      await tx.wait(1); // 1 confirmations
    }
  }

  async initByAccount(
    wallet: Wallet,
    sKrwAmt: string,
    sMmfAmt: string
  ): Promise<void> {
    const address = wallet.address;

    let tx = await this.burnSKrw(wallet);
    if (tx) {
      await tx.wait(1); // 1 confirmations
    }
    tx = await this.mintSKrw(wallet.address, sKrwAmt);
    if (tx) {
      await tx.wait(1); // 1 confirmations
    }
    tx = await this.burnMMF(wallet);
    if (tx) {
      await tx.wait(1); // 1 confirmations
    }
    tx = await this.mintMMF(wallet, sMmfAmt);
    if (tx) {
      await tx.wait(1); // 1 confirmations
    }

    await this.resync();
  }

  async burnMMF(wallet: Wallet): Promise<TransactionResponse | null> {
    const contract = new ethers.Contract(
      SMMF_CONTRACT_ADDRESS,
      MMF_ABI,
      wallet
    );
    const address = wallet.address;
    const decimals = await contract.decimals();
    const mmfBalance: bigint = await contract.balanceOf(address);

    if (mmfBalance > 0n) {
      const burnAddress = "0x000000000000000000000000000000000000dEaD";
      const amountToSend = mmfBalance;
      const tx = await contract.transfer(burnAddress, amountToSend, {
        gasLimit: 100000,
        gasPrice: 0,
      });
      await tx.wait();
      console.log(
        `[burnMMF] ${address} - Burned ${ethers.formatUnits(mmfBalance, decimals)} MMF`
      );
      return tx;
    } else {
      console.log(`[burnMMF] ${address} - No MMF to burn`);
      return null;
    }
  }

  async mintMMF(
    wallet: Wallet,
    amount: string
  ): Promise<TransactionResponse | null> {
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
    const hasAssetManagerRole = await contract.hasRole(
      ASSET_MANAGER_ROLE,
      this.walletAdmin.address
    );
    if (!hasAssetManagerRole) {
      throw new Error("지갑에 ASSET_MANAGER_ROLE 권한이 없습니다.");
    }

    // Paused 상태 체크
    const isPaused = await contract.paused();
    if (isPaused) {
      throw new Error("컨트랙트가 일시 정지 상태입니다.");
    }

    if (Number(amount) == 0) {
      return null;
    }
    // amount를 Ether 단위로 변환
    const amountToSend = ethers.parseEther(amount);

    // purchaseWithDT 실행
    const tx = await contract.purchaseWithDT(wallet.address, amountToSend, {
      gasLimit: 200000,
      gasPrice: 0,
    });
    return tx;
  }

  async burnSKrw(wallet: Wallet): Promise<TransactionResponse | null> {
    const skrwContract = new ethers.Contract(
      SKRW_CONTRACT_ADDRESS,
      ERC20_ABI,
      wallet
    );
    const address = wallet.address;
    const decimals = await skrwContract.decimals();
    const skrwBalance: bigint = await skrwContract.balanceOf(address);

    if (skrwBalance > 0n) {
      const burnAddress = "0x000000000000000000000000000000000000dEaD";
      // 소각할 수량을 decimals에 맞게 변환
      const amountToSend = skrwBalance;
      const tx = await skrwContract.transfer(burnAddress, amountToSend, {
        gasLimit: 100000,
        gasPrice: 0,
      });
      await tx.wait();
      console.log(
        `[burnSKrw] ${address} - Burned ${ethers.formatUnits(skrwBalance, decimals)} SKRW`
      );
      return tx;
    } else {
      console.log(`[burnSKrw] ${address} - No SKRW to burn`);
      return null;
    }
  }

  async mintSKrw(
    toAddress: string,
    amount: string
  ): Promise<TransactionResponse | null> {
    // SKRWToken 컨트랙트 ABI (mint 함수 포함)
    const SKRW_ABI = [
      "function mint(address to, uint256 amount) public returns (bool)",
      "function decimals() view returns (uint8)",
    ];
    // Admin 권한이 있는 지갑 사용
    const contract = new ethers.Contract(
      SKRW_CONTRACT_ADDRESS,
      SKRW_ABI,
      this.walletAdmin
    );
    const decimals = await contract.decimals();
    const amountToMint = ethers.parseUnits(amount, decimals);

    if (Number(amountToMint) == 0) return null;

    // 민트 트랜잭션 실행
    const tx = await contract.mint(toAddress, amountToMint, {
      gasLimit: 100000,
      gasPrice: 0,
    });

    console.log(`[mintSKrw] Minted ${amount} SKRW to ${toAddress}`);
    // console.log(`[mintSKrw] Transaction hash: ${tx.hash}`);

    return tx;
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

  async purchase(
    amount: string,
    wallet: Wallet
  ): Promise<TransactionResponse | null> {
    const contract = new ethers.Contract(
      SKRW_CONTRACT_ADDRESS,
      ERC20_ABI,
      wallet
    );
    const amountString = Number(amount).toLocaleString("fullwide", {
      useGrouping: false,
    });
    const amountToSend = ethers.parseUnits(amountString, this.skrw_decimals);

    const tx = await contract.transfer(BROKER_ADDRESS, amountToSend);
    this.purchaseHash = tx.hash;
    return tx;
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

    await this.resync();
  }

  async profitRateOf(wallet: Wallet): Promise<string> {
    const contract = new ethers.Contract(
      SMMF_CONTRACT_ADDRESS,
      MMF_ABI,
      wallet
    );
    const profitRate = await contract.profitRateOf(wallet.address);
    return (Number(profitRate) / 100).toFixed(2);
  }
  async profitOf(wallet: Wallet): Promise<string> {
    const contract = new ethers.Contract(
      SMMF_CONTRACT_ADDRESS,
      MMF_ABI,
      wallet
    );

    const profit = await contract.profitOf(wallet.address);

    return ethers.formatEther(profit).padEnd(12);
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
    const tx = await contract.updateNAVWithDecimals(value, decimalPlaces);
    return tx;
  }
  // async updateNAVWithDecimals(
  //   value: number,
  //   decimalPlaces: number
  // ): Promise<TransactionResponse | null> {
  //   console.log(`Nav =: ${value}, decimalPlaces = ${decimalPlaces}`);

  //   const contract = new ethers.Contract(
  //     SMMF_CONTRACT_ADDRESS,
  //     MMF_ABI,
  //     this.walletAdmin
  //   );

  //   const currentNAV = await contract.currentNAV();
  //   console.log(`currentNAV = : ${currentNAV}`);

  //   if (currentNAV == 100000000) {
  //     console.log(`Nav already initialized..`);
  //     return null;
  //   }

  //   const tx = await contract.updateNAVWithDecimals(
  //     ethers.parseUnits(value.toString(), decimalPlaces),
  //     decimalPlaces
  //   );
  //   return tx;
  // }

  async resync(): Promise<void> {
    this.smmf_balance = Number(await this.getMMFPrincipal(this.wallet));
    this.smmf_shares = Number(await this.getMMFShare(this.wallet));
    console.log(
      `원금 = : ${this.smmf_balance}, 펀드가치 = : ${this.smmf_shares}`
    );

    this.profit1 = await this.profitOf(this.wallet);
    this.profitRate1 = await this.profitRateOf(this.wallet);

    this.skrw_balance = Number(
      await this.getERC20Balance(
        SKRW_CONTRACT_ADDRESS,
        this.provider,
        this.wallet
      )
    );

    this.smmf_balance2 = Number(
      await this.getERC20Balance(
        SMMF_CONTRACT_ADDRESS,
        this.provider,
        this.wallet2
      )
    );
    this.skrw_balance2 = Number(
      await this.getERC20Balance(
        SKRW_CONTRACT_ADDRESS,
        this.provider,
        this.wallet2
      )
    );

    this.smmf_balance3 = Number(
      await this.getERC20Balance(
        SMMF_CONTRACT_ADDRESS,
        this.provider,
        this.wallet3
      )
    );
    this.skrw_balance3 = Number(
      await this.getERC20Balance(
        SKRW_CONTRACT_ADDRESS,
        this.provider,
        this.wallet3
      )
    );
  }

  async getMMFPrincipal(wallet: Wallet): Promise<string> {
    try {
      const contract = new ethers.Contract(
        SMMF_CONTRACT_ADDRESS,
        MMF_ABI,
        this.provider
      );
      const [rawBalance, decimals]: [bigint, number] = await Promise.all([
        contract.principalOf(wallet.address),
        contract.decimals(),
      ]);
      // 사람이 읽을 수 있는 형식으로 변환합니다.

      const balance = ethers.formatUnits(rawBalance, decimals);
      console.log(
        `[myWallet] getMMFPrincipal for ${SMMF_CONTRACT_ADDRESS}: ${balance} : ${wallet.address}`
      );

      return ethers.formatUnits(rawBalance, decimals);
    } catch (error) {
      console.error(
        `[myWallet] Failed to get ERC20 balance for ${SMMF_CONTRACT_ADDRESS}:`,
        error
      );
      return "0.0"; // 오류 발생 시 잔액을 0으로 반환
    }
  }

  async getMMFBalance(wallet: Wallet): Promise<string> {
    try {
      const contract = new ethers.Contract(
        SMMF_CONTRACT_ADDRESS,
        MMF_ABI,
        this.provider
      );
      const [rawBalance, decimals]: [bigint, number] = await Promise.all([
        contract.balanceOf(wallet.address),
        contract.decimals(),
      ]);

      console.log(`rawBalance = : ${rawBalance}, decimals = : ${decimals}`);

      const balance = ethers.formatEther(rawBalance);

      // 사람이 읽을 수 있는 형식으로 변환합니다.
      return ethers.formatUnits(rawBalance, decimals);
    } catch (error) {
      console.error(
        `[myWallet] Failed to get ERC20 balance for ${SMMF_CONTRACT_ADDRESS}:`,
        error
      );
      return "0.0"; // 오류 발생 시 잔액을 0으로 반환
    }
  }

  async getMMFShare(wallet: Wallet): Promise<string> {
    try {
      const contract = new ethers.Contract(
        SMMF_CONTRACT_ADDRESS,
        MMF_ABI,
        this.provider
      );
      const [rawBalance, decimals]: [bigint, number] = await Promise.all([
        contract.balanceOf(wallet.address),
        contract.decimals(),
      ]);

      console.log(`rawBalance = : ${rawBalance}, decimals = : ${decimals}`);

      const balance = ethers.formatEther(rawBalance);

      // 사람이 읽을 수 있는 형식으로 변환합니다.
      return ethers.formatUnits(rawBalance, decimals);
    } catch (error) {
      console.error(
        `[myWallet] Failed to get ERC20 balance for ${SMMF_CONTRACT_ADDRESS}:`,
        error
      );
      return "0.0"; // 오류 발생 시 잔액을 0으로 반환
    }
  }
  /**
   * 특정 ERC20 토큰의 잔액을 조회합니다.
   * @param tokenAddress 조회할 ERC20 토큰의 컨트랙트 주소
   * @returns 토큰 잔액 (string)
   */
  async getERC20Balance(
    tokenAddress: string,
    provider: JsonRpcProvider,
    wallet: Wallet
  ): Promise<string> {
    try {
      const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
      const [rawBalance, decimals]: [bigint, number] = await Promise.all([
        contract.balanceOf(wallet.address),
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
}

export const myWallet = new MyWallet();
