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
];

export const SOL_ADDRESS = "0x8DFeB78ecEe391149b1c2739cEd0f6992D0a5663";
export const USR_NAME = "개인사용자";
export const USR_TYPE = "개인";
const PRIVATE_KEY =
  "0x47c496fe62e38aebcf4c5298cdae6889efed27b308fb473311d4a209e512f20e";

export const USR1_ADDRESS = "0x0158e26744ce0D3Cd07067FED6513463d87e7C34";
export const USR1_NAME = "기관1";
export const USR1_TYPE = "법인";
export const USR1_KEY =
  "0cfb5d9627d075e69d5fc32e14f35e439c03be2690b441150175ad9330a4b5e7";

export const USR2_ADDRESS = "0xd5309cc4e90A8D09d8E1206D62a09cE2f7ed36f1";
export const USR2_NAME = "기관2";
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
}

export const myWallet = new MyWallet();
