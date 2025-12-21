const { ethers } = require("hardhat");

/**
 * PF Token Burn 스크립트
 *
 * 사용법:
 * 1. 자신의 토큰 소각:
 *    PF_ADDRESS="0x..." AMOUNT="1000" npm run burn_pf:pulse
 *
 * 2. 다른 계정의 토큰 소각 (Allowance 필요):
 *    PF_ADDRESS="0x..." FROM="0x..." AMOUNT="1000" npm run burn_pf:pulse
 *
 * 3. Inline ABI 사용 (컴파일 없이):
 *    USE_INLINE_ABI=true PF_ADDRESS="0x..." AMOUNT="1000" npm run burn_pf:pulse
 *
 * 예시:
 * PF_ADDRESS="0x813A2C29f419823048D270dF11E61007e0EB7fC0" \
 * AMOUNT="1000" \
 * npm run burn_pf:pulse
 */

// PFToken Inline ABI (컴파일 없이 사용 가능)
const PF_TOKEN_ABI = [
  "function burn(uint256 amount) external",
  "function burnFrom(address account, uint256 amount) external",
  "function balanceOf(address account) external view returns (uint256)",
  "function totalSupply() external view returns (uint256)",
  "function allowance(address owner, address spender) external view returns (uint256)",
  "function name() external view returns (string)",
  "function symbol() external view returns (string)",
  "function decimals() external view returns (uint8)",
  "event TokensBurned(address indexed from, uint256 amount)"
];

async function main() {
  console.log("\n=".repeat(60));
  console.log("PF Token Burn 스크립트");
  console.log("=".repeat(60));

  // 환경변수 확인
  const PF_ADDRESS = process.env.PF_ADDRESS;
  const AMOUNT = process.env.AMOUNT;

  if (!PF_ADDRESS || !AMOUNT) {
    console.error("\n❌ 필수 환경변수가 설정되지 않았습니다.");
    console.log("사용법: PF_ADDRESS=\"0x...\" AMOUNT=\"1000\" npm run burn_pf:pulse");
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

  // burnFrom vs burn 판단
  const fromAddress = process.env.FROM;

  if (fromAddress) {
    // burnFrom (다른 계정의 토큰 소각)
    await burnFrom(pfToken, signer.address, fromAddress, AMOUNT);
  } else {
    // burn (자신의 토큰 소각)
    await burn(pfToken, signer.address, AMOUNT);
  }

  console.log("\n" + "=".repeat(60));
  console.log("Burn 완료!");
  console.log("=".repeat(60) + "\n");
}

/**
 * 자신의 토큰 소각
 */
async function burn(pfToken, burner, amount) {
  console.log("\n🔥 자신의 토큰 소각:");
  console.log("  소각자:", burner);
  console.log("  수량:", amount, "토큰");

  // 소각 전 잔액
  const balanceBefore = await pfToken.balanceOf(burner);
  console.log("  소각 전 잔액:", ethers.formatEther(balanceBefore), "토큰");

  const amountWei = ethers.parseEther(amount);

  // 잔액 확인
  if (balanceBefore < amountWei) {
    console.error("\n❌ 잔액이 부족합니다.");
    console.error(`  필요: ${amount} 토큰`);
    console.error(`  보유: ${ethers.formatEther(balanceBefore)} 토큰`);
    process.exit(1);
  }

  // 총 발행량 (소각 전)
  const totalSupplyBefore = await pfToken.totalSupply();
  console.log("  전체 발행량 (소각 전):", ethers.formatEther(totalSupplyBefore), "토큰");

  // Burn 실행
  console.log("\n🚀 Burn 트랜잭션 전송 중...");
  const tx = await pfToken.burn(amountWei);

  console.log("  트랜잭션 해시:", tx.hash);
  console.log("  블록 확인 대기 중...");

  const receipt = await tx.wait();
  console.log("  블록 번호:", receipt.blockNumber);
  console.log("  가스 사용량:", receipt.gasUsed.toString());

  // 소각 후 잔액
  const balanceAfter = await pfToken.balanceOf(burner);
  const totalSupplyAfter = await pfToken.totalSupply();

  console.log("\n✅ Burn 성공!");
  console.log("  소각 후 잔액:", ethers.formatEther(balanceAfter), "토큰");
  console.log("  소각된 수량:", ethers.formatEther(balanceBefore - balanceAfter), "토큰");
  console.log("  전체 발행량 (소각 후):", ethers.formatEther(totalSupplyAfter), "토큰");
  console.log("  감소량:", ethers.formatEther(totalSupplyBefore - totalSupplyAfter), "토큰");
}

/**
 * 다른 계정의 토큰 소각 (Allowance 필요)
 */
async function burnFrom(pfToken, burner, from, amount) {
  console.log("\n🔥 다른 계정의 토큰 소각 (burnFrom):");
  console.log("  소각자:", burner);
  console.log("  소각 대상:", from);
  console.log("  수량:", amount, "토큰");

  // 소각 전 잔액
  const balanceBefore = await pfToken.balanceOf(from);
  console.log("  대상 계정 잔액 (소각 전):", ethers.formatEther(balanceBefore), "토큰");

  const amountWei = ethers.parseEther(amount);

  // 잔액 확인
  if (balanceBefore < amountWei) {
    console.error("\n❌ 대상 계정의 잔액이 부족합니다.");
    console.error(`  필요: ${amount} 토큰`);
    console.error(`  보유: ${ethers.formatEther(balanceBefore)} 토큰`);
    process.exit(1);
  }

  // Allowance 확인
  const allowance = await pfToken.allowance(from, burner);
  console.log("  승인된 수량 (Allowance):", ethers.formatEther(allowance), "토큰");

  if (allowance < amountWei) {
    console.error("\n❌ Allowance가 부족합니다.");
    console.error(`  필요: ${amount} 토큰`);
    console.error(`  승인: ${ethers.formatEther(allowance)} 토큰`);
    console.error("\n💡 다음 명령어로 Allowance를 증가시키세요:");
    console.error(`   pfToken.approve("${burner}", ethers.parseEther("${amount}"))`);
    process.exit(1);
  }

  // 총 발행량 (소각 전)
  const totalSupplyBefore = await pfToken.totalSupply();
  console.log("  전체 발행량 (소각 전):", ethers.formatEther(totalSupplyBefore), "토큰");

  // BurnFrom 실행
  console.log("\n🚀 BurnFrom 트랜잭션 전송 중...");
  const tx = await pfToken.burnFrom(from, amountWei);

  console.log("  트랜잭션 해시:", tx.hash);
  console.log("  블록 확인 대기 중...");

  const receipt = await tx.wait();
  console.log("  블록 번호:", receipt.blockNumber);
  console.log("  가스 사용량:", receipt.gasUsed.toString());

  // 소각 후 잔액
  const balanceAfter = await pfToken.balanceOf(from);
  const allowanceAfter = await pfToken.allowance(from, burner);
  const totalSupplyAfter = await pfToken.totalSupply();

  console.log("\n✅ BurnFrom 성공!");
  console.log("  대상 계정 잔액 (소각 후):", ethers.formatEther(balanceAfter), "토큰");
  console.log("  소각된 수량:", ethers.formatEther(balanceBefore - balanceAfter), "토큰");
  console.log("  남은 Allowance:", ethers.formatEther(allowanceAfter), "토큰");
  console.log("  전체 발행량 (소각 후):", ethers.formatEther(totalSupplyAfter), "토큰");
  console.log("  감소량:", ethers.formatEther(totalSupplyBefore - totalSupplyAfter), "토큰");
}

// 에러 처리
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ Burn 실패:");
    console.error(error.message);

    if (error.message.includes("EnforcedPause")) {
      console.error("\n💡 컨트랙트가 일시 정지 상태입니다.");
      console.error("   unpause() 함수를 호출하여 정지를 해제하세요.");
    } else if (error.message.includes("ERC20InsufficientBalance")) {
      console.error("\n💡 잔액이 부족합니다.");
    } else if (error.message.includes("ERC20InsufficientAllowance")) {
      console.error("\n💡 Allowance가 부족합니다.");
      console.error("   approve() 함수로 승인량을 증가시키세요.");
    }

    process.exit(1);
  });
