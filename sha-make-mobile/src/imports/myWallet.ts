import {
  ethers,
  Wallet,
  JsonRpcProvider,
  Contract,
  TransactionResponse,
} from "ethers";

// Pulse테스트넷 정보
// const PULSE_RPC_URL = "https://secuchain.testnet.stopulse.co.kr/";
const PULSE_RPC_URL = "http://localhost:8545";
export const SMMF_CONTRACT_ADDRESS =
  "0x9B8397f1B0FEcD3a1a40CdD5E8221Fa461898517"; // sMMF 주소

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

export const SOL_ADDRESS = "0x8DFeB78ecEe391149b1c2739cEd0f6992D0a5663";
const PRIVATE_KEY =
  "0x47c496fe62e38aebcf4c5298cdae6889efed27b308fb473311d4a209e512f20e";
const PULSE_PRIVATE_KEY =
  "0xcd2336d7c471a0f2f1da77e91bcaf71e96e40481415bdb062152b4d045e1702c";

export class MyWallet {
  private wallet: Wallet;
  private provider: JsonRpcProvider;
  balance: number = 0;

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
    this.balance = Number(
      await this.getERC20Balance(SMMF_CONTRACT_ADDRESS, this.provider)
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
