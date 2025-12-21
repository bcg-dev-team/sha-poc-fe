const { ethers } = require("hardhat");

// npx hardhat run scripts/checkNAVPrecision.js

async function main() {
  const SMMF_CONTRACT_ADDRESS = "0x813A2C29f419823048D270dF11E61007e0EB7fC0";
  const PULSE_RPC_URL = "https://secuchain.testnet.stopulse.co.kr/";

  console.log("\n========== 배포된 컨트랙트 확인 ==========\n");
  console.log(`컨트랙트 주소: ${SMMF_CONTRACT_ADDRESS}`);
  console.log(`RPC URL: ${PULSE_RPC_URL}\n`);

  try {
    // Provider 생성
    const provider = new ethers.JsonRpcProvider(PULSE_RPC_URL);

    // 컨트랙트 인스턴스 생성
    const MMFValueToken = await ethers.getContractFactory("MMFValueToken");
    const contract = MMFValueToken.attach(SMMF_CONTRACT_ADDRESS).connect(provider);

    // getNAVPrecision 호출
    console.log("📊 getNAVPrecision() 호출 중...");
    const precision = await contract.getNAVPrecision();
    console.log(`✅ NAV_PRECISION: ${precision.toString()}`);

    // 버전 확인
    if (precision.toString() === "100000000") {
      console.log("✅ 최신 버전 컨트랙트 (10^8 precision)");
    } else if (precision.toString() === "10000") {
      console.log("⚠️  구버전 컨트랙트 (10^4 precision) - 재배포 필요!");
    } else {
      console.log(`⚠️  알 수 없는 precision 값: ${precision.toString()}`);
    }

    // 추가 정보 조회
    console.log("\n📊 추가 정보:");

    const currentNAV = await contract.currentNAV();
    console.log(`  currentNAV (내부): ${currentNAV.toString()}`);
    console.log(`  currentNAV (실제): ${Number(currentNAV) / Number(precision)}`);

    const [integerPart, decimalPart] = await contract.getNAVDecimal();
    console.log(`  NAV Decimal: ${integerPart}.${decimalPart}`);

    const totalSupply = await contract.totalSupply();
    console.log(`  totalSupply: ${ethers.formatEther(totalSupply)} 토큰`);

    const name = await contract.name();
    const symbol = await contract.symbol();
    console.log(`  Token: ${name} (${symbol})`);

    console.log("\n========== 확인 완료 ==========\n");

  } catch (error) {
    console.error("\n❌ 오류 발생:");

    if (error.message.includes("contract runner does not support calling")) {
      console.error("컨트랙트에 getNAVPrecision 함수가 없습니다.");
      console.error("→ 구버전 컨트랙트이거나 함수가 배포되지 않았습니다.");
      console.error("→ 컨트랙트를 재배포해야 합니다.");
    } else if (error.message.includes("could not detect network")) {
      console.error("네트워크 연결 실패");
      console.error(`RPC URL을 확인하세요: ${PULSE_RPC_URL}`);
    } else {
      console.error(error.message);
    }

    console.error("\n");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
