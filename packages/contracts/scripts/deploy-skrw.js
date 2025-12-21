const hre = require("hardhat");
const { ethers } = require("hardhat");

/**
 * S-KRW Token 배포 스크립트
 *
 * 사용법:
 * npx hardhat run scripts/deploy-skrw.js --network <네트워크명>
 *
 * 예시:
 * npx hardhat run scripts/deploy-skrw.js --network localhost
 * npx hardhat run scripts/deploy-skrw.js --network pulse
 * npx hardhat run scripts/deploy-skrw.js --network sepolia
 */

async function main() {
  console.log("\n=".repeat(60));
  console.log("S-KRW Token 배포 스크립트");
  console.log("=".repeat(60));

  // 배포자 계정 정보
  const [deployer] = await ethers.getSigners();
  console.log("\n📋 배포 정보:");
  console.log("  배포 계정:", deployer.address);

  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("  계정 잔액:", ethers.formatEther(balance), "ETH");

  // 네트워크 정보
  const network = await ethers.provider.getNetwork();
  console.log("  네트워크:", network.name);
  console.log("  Chain ID:", network.chainId);

  // 배포 파라미터 설정
  const deployParams = {
    admin: process.env.ADMIN_ADDRESS || deployer.address,
    minter: process.env.MINTER_ADDRESS || deployer.address,
  };

  console.log("\n⚙️  배포 파라미터:");
  console.log("  Admin:", deployParams.admin);
  console.log("  Minter:", deployParams.minter);

  // 배포 확인
  console.log("\n⚠️  배포를 진행하시겠습니까?");
  console.log("  (계속하려면 3초 대기...)");
  await new Promise(resolve => setTimeout(resolve, 3000));

  // S-KRW Token 컨트랙트 배포
  console.log("\n🚀 S-KRW Token 컨트랙트 배포 중...");

  const SKRWToken = await ethers.getContractFactory("SKRWToken");
  const skrwToken = await SKRWToken.deploy(
    deployParams.admin,
    deployParams.minter
  );

  const deployTx = skrwToken.deploymentTransaction();
  console.log("  트랜잭션 해시:", deployTx.hash);
  console.log("  블록 확인 대기 중...");

  await skrwToken.waitForDeployment();

  console.log("\n✅ 배포 완료!");
  console.log("=".repeat(60));
  console.log("\n📝 배포 결과:");
  console.log("  컨트랙트 주소:", await skrwToken.getAddress());

  const receipt = await deployTx.wait();
  console.log("  블록 번호:", receipt.blockNumber);

  // 배포된 컨트랙트 정보 확인
  console.log("\n📊 컨트랙트 정보:");
  console.log("  이름:", await skrwToken.name());
  console.log("  심볼:", await skrwToken.symbol());
  console.log("  Decimals:", await skrwToken.decimals());
  console.log("  총 발행량:", ethers.formatEther(await skrwToken.totalSupply()));

  // 역할 확인
  console.log("\n🔑 역할 설정 확인:");
  const MINTER_ROLE = ethers.keccak256(
    ethers.toUtf8Bytes("MINTER_ROLE")
  );
  const PAUSER_ROLE = ethers.keccak256(
    ethers.toUtf8Bytes("PAUSER_ROLE")
  );

  const hasMinterRole = await skrwToken.hasRole(
    MINTER_ROLE,
    deployParams.minter
  );
  const hasPauserRole = await skrwToken.hasRole(
    PAUSER_ROLE,
    deployParams.admin
  );

  console.log("  Minter 역할:", hasMinterRole ? "✓" : "✗");
  console.log("  Pauser 역할:", hasPauserRole ? "✓" : "✗");

  // 배포 정보 저장
  const contractAddress = await skrwToken.getAddress();
  const deploymentInfo = {
    network: network.name,
    chainId: Number(network.chainId),
    contractAddress: contractAddress,
    deployerAddress: deployer.address,
    transactionHash: deployTx.hash,
    blockNumber: Number(receipt.blockNumber),
    timestamp: new Date().toISOString(),
    parameters: deployParams,
  };

  const fs = require("fs");
  const deploymentPath = `./deployments/skrw_${network.name}_${Date.now()}.json`;

  if (!fs.existsSync("./deployments")) {
    fs.mkdirSync("./deployments");
  }

  fs.writeFileSync(
    deploymentPath,
    JSON.stringify(deploymentInfo, null, 2)
  );

  console.log("\n💾 배포 정보 저장:");
  console.log("  파일 경로:", deploymentPath);

  // 검증 명령어 출력
  if (network.name !== "hardhat" && network.name !== "localhost") {
    console.log("\n🔍 컨트랙트 검증 (Etherscan):");
    console.log(`
  npx hardhat verify --network ${network.name} ${contractAddress} \\
    "${deployParams.admin}" \\
    "${deployParams.minter}"
    `);
  }

  // 다음 단계 안내
  console.log("\n📌 다음 단계:");
  console.log("  1. 토큰 발행 (Mint):");
  console.log(`     skrwToken.mint("<ADDRESS>", ethers.parseEther("1000000"))`);
  console.log("\n  2. 추가 권한 부여 (필요 시):");
  console.log(`     skrwToken.grantRole(MINTER_ROLE, "<ADDRESS>")`);
  console.log("\n  3. 일괄 발행 (Batch Mint):");
  console.log(`     skrwToken.batchMint([addr1, addr2], [amount1, amount2])`);
  console.log("\n  4. 토큰 소각 (Burn):");
  console.log(`     skrwToken.burn(ethers.parseEther("1000"))`);

  console.log("\n" + "=".repeat(60));
  console.log("배포 완료!");
  console.log("=".repeat(60) + "\n");
}

// 에러 처리
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ 배포 실패:");
    console.error(error);
    process.exit(1);
  });
