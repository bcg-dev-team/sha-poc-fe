const { ethers } = require("hardhat");

/**
 * PF Token Mint 스크립트
 *
 * 사용법:
 * 1. 단일 Mint:
 *    PF_ADDRESS="0x..." RECIPIENT="0x..." AMOUNT="1000000" npm run mint_pf:pulse
 *
 * 2. Batch Mint:
 *    PF_ADDRESS="0x..." RECIPIENTS="0x...,0x..." AMOUNTS="1000,2000" npm run mint_pf:pulse
 *
 * 3. Inline ABI 사용 (컴파일 없이):
 *    USE_INLINE_ABI=true PF_ADDRESS="0x..." RECIPIENT="0x..." AMOUNT="1000" npm run mint_pf:pulse
 *
 * 예시:
 * PF_ADDRESS="0x813A2C29f419823048D270dF11E61007e0EB7fC0" \
 * RECIPIENT="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb" \
 * AMOUNT="1000000" \
 * npm run mint_pf:pulse
 */

// PFToken Inline ABI (컴파일 없이 사용 가능)
const PF_TOKEN_ABI = [
  "function mint(address to, uint256 amount) external",
  "function batchMint(address[] calldata recipients, uint256[] calldata amounts) external",
  "function balanceOf(address account) external view returns (uint256)",
  "function totalSupply() external view returns (uint256)",
  "function name() external view returns (string)",
  "function symbol() external view returns (string)",
  "function decimals() external view returns (uint8)",
  "function hasRole(bytes32 role, address account) external view returns (bool)",
  "event TokensMinted(address indexed to, uint256 amount, address indexed minter)"
];

async function main() {
  console.log("\n=".repeat(60));
  console.log("PF Token Mint 스크립트");
  console.log("=".repeat(60));

  // 환경변수 확인
  const PF_ADDRESS = process.env.PF_ADDRESS;
  if (!PF_ADDRESS) {
    console.error("\n❌ PF_ADDRESS 환경변수가 설정되지 않았습니다.");
    console.log("사용법: PF_ADDRESS=\"0x...\" RECIPIENT=\"0x...\" AMOUNT=\"1000\" npm run mint_pf:pulse");
    process.exit(1);
  }

  // Signer 가져오기
  const [signer] = await ethers.getSigners();
  console.log("\n📋 실행 정보:");
  console.log("  실행 계정:", signer.address);

  const balance = await ethers.provider.getBalance(signer.address);
  console.log("  계정 잔액:", ethers.formatEther(balance), "ETH");

  // 네트워크 정보
  const network = await ethers.provider.getNetwork();
  console.log("  네트워크:", network.name);
  console.log("  Chain ID:", network.chainId);

  // PFToken 컨트랙트 연결
  let pfToken;
  const useInlineABI = process.env.USE_INLINE_ABI === "true";

  if (useInlineABI) {
    console.log("  ABI 모드: Inline ABI 사용");
    pfToken = new ethers.Contract(PF_ADDRESS, PF_TOKEN_ABI, signer);
  } else {
    console.log("  ABI 모드: Compiled ABI 사용");
    const PFToken = await ethers.getContractFactory("PFToken");
    pfToken = PFToken.attach(PF_ADDRESS);
  }

  // 컨트랙트 정보 확인
  console.log("\n📊 컨트랙트 정보:");
  console.log("  주소:", PF_ADDRESS);
  console.log("  이름:", await pfToken.name());
  console.log("  심볼:", await pfToken.symbol());

  // MINTER 권한 확인
  const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));
  const hasMinterRole = await pfToken.hasRole(MINTER_ROLE, signer.address);
  console.log("  MINTER 권한:", hasMinterRole ? "✓" : "✗");

  if (!hasMinterRole) {
    console.error("\n❌ 현재 계정에 MINTER 권한이 없습니다.");
    process.exit(1);
  }

  // Batch Mint vs Single Mint 판단
  const recipients = process.env.RECIPIENTS?.split(",").map(addr => addr.trim());
  const amounts = process.env.AMOUNTS?.split(",").map(amt => amt.trim());

  if (recipients && amounts) {
    // Batch Mint
    await batchMint(pfToken, recipients, amounts);
  } else {
    // Single Mint
    const recipient = process.env.RECIPIENT;
    const amount = process.env.AMOUNT;

    if (!recipient || !amount) {
      console.error("\n❌ RECIPIENT 또는 AMOUNT 환경변수가 설정되지 않았습니다.");
      console.log("단일 Mint: RECIPIENT=\"0x...\" AMOUNT=\"1000\"");
      console.log("Batch Mint: RECIPIENTS=\"0x...,0x...\" AMOUNTS=\"1000,2000\"");
      process.exit(1);
    }

    await singleMint(pfToken, recipient, amount);
  }

  console.log("\n" + "=".repeat(60));
  console.log("Mint 완료!");
  console.log("=".repeat(60) + "\n");
}

/**
 * 단일 Mint
 */
async function singleMint(pfToken, recipient, amount) {
  console.log("\n🪙 단일 Mint 실행:");
  console.log("  수신자:", recipient);
  console.log("  수량:", amount, "토큰");

  // 발행 전 잔액
  const balanceBefore = await pfToken.balanceOf(recipient);
  console.log("  발행 전 잔액:", ethers.formatEther(balanceBefore), "토큰");

  // Mint 실행
  console.log("\n🚀 Mint 트랜잭션 전송 중...");
  const amountWei = ethers.parseEther(amount);
  const tx = await pfToken.mint(recipient, amountWei);

  console.log("  트랜잭션 해시:", tx.hash);
  console.log("  블록 확인 대기 중...");

  const receipt = await tx.wait();
  console.log("  블록 번호:", receipt.blockNumber);
  console.log("  가스 사용량:", receipt.gasUsed.toString());

  // 발행 후 잔액
  const balanceAfter = await pfToken.balanceOf(recipient);
  console.log("\n✅ Mint 성공!");
  console.log("  발행 후 잔액:", ethers.formatEther(balanceAfter), "토큰");
  console.log("  발행된 수량:", ethers.formatEther(balanceAfter - balanceBefore), "토큰");

  // 총 발행량
  const totalSupply = await pfToken.totalSupply();
  console.log("  전체 발행량:", ethers.formatEther(totalSupply), "토큰");
}

/**
 * Batch Mint
 */
async function batchMint(pfToken, recipients, amounts) {
  console.log("\n🪙 Batch Mint 실행:");

  if (recipients.length !== amounts.length) {
    console.error("❌ RECIPIENTS와 AMOUNTS의 개수가 일치하지 않습니다.");
    process.exit(1);
  }

  console.log("  수신자 수:", recipients.length);

  // 발행 정보 출력
  const amountsWei = [];
  for (let i = 0; i < recipients.length; i++) {
    console.log(`  [${i + 1}] ${recipients[i]}: ${amounts[i]} 토큰`);
    amountsWei.push(ethers.parseEther(amounts[i]));
  }

  // 총 발행량 계산
  const totalAmount = amounts.reduce((sum, amt) => sum + parseFloat(amt), 0);
  console.log("\n  총 발행량:", totalAmount, "토큰");

  // Batch Mint 실행
  console.log("\n🚀 Batch Mint 트랜잭션 전송 중...");
  const tx = await pfToken.batchMint(recipients, amountsWei);

  console.log("  트랜잭션 해시:", tx.hash);
  console.log("  블록 확인 대기 중...");

  const receipt = await tx.wait();
  console.log("  블록 번호:", receipt.blockNumber);
  console.log("  가스 사용량:", receipt.gasUsed.toString());

  console.log("\n✅ Batch Mint 성공!");

  // 각 수신자의 잔액 확인
  console.log("\n📊 수신자별 잔액:");
  for (let i = 0; i < recipients.length; i++) {
    const balance = await pfToken.balanceOf(recipients[i]);
    console.log(`  [${i + 1}] ${recipients[i]}: ${ethers.formatEther(balance)} 토큰`);
  }

  // 총 발행량
  const totalSupply = await pfToken.totalSupply();
  console.log("\n  전체 발행량:", ethers.formatEther(totalSupply), "토큰");
}

// 에러 처리
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ Mint 실패:");
    console.error(error.message);

    if (error.message.includes("Caller is not minter")) {
      console.error("\n💡 현재 계정에 MINTER 권한이 없습니다.");
      console.error("   다음 명령어로 권한을 부여하세요:");
      console.error("   pfToken.grantRole(MINTER_ROLE, \"<YOUR_ADDRESS>\")");
    }

    process.exit(1);
  });
