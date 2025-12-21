const hre = require("hardhat");
const { ethers } = require("hardhat");

/**
 * MMF Value Token 배포 스크립트
 * 
 * 사용법:
 * npx hardhat run scripts/deploy.js --network <네트워크명>
 * 
 * 예시:
 * npx hardhat run scripts/deploy.js --network localhost
 * npx hardhat run scripts/deploy.js --network pulse
 * npx hardhat run scripts/deploy.js --network sepolia
 */

async function main() {
  console.log("\n=".repeat(60));
  console.log("MMF Value Token 배포 스크립트");
  console.log("=".repeat(60));

  // 배포자 계정 정보
  const [deployer] = await ethers.getSigners();
  console.log("\n📋 배포 정보:");
  console.log("  배포 계정:", deployer.address);
  
  const balance = await deployer.getBalance();
  console.log("  계정 잔액:", ethers.utils.formatEther(balance), "ETH");

  // 네트워크 정보
  const network = await ethers.provider.getNetwork();
  console.log("  네트워크:", network.name);
  console.log("  Chain ID:", network.chainId);

  // 배포 파라미터 설정
  const deployParams = {
    admin: process.env.ADMIN_ADDRESS || deployer.address,
    assetManager: process.env.ASSET_MANAGER_ADDRESS || deployer.address,
    navUpdater: process.env.NAV_UPDATER_ADDRESS || deployer.address,
    initialNAV: parseInt(process.env.INITIAL_NAV) || 10000, // 1.0000
    lockupPeriod: parseInt(process.env.LOCKUP_PERIOD) || 30 * 24 * 60 * 60, // 30일
  };

  console.log("\n⚙️  배포 파라미터:");
  console.log("  Admin:", deployParams.admin);
  console.log("  Asset Manager:", deployParams.assetManager);
  console.log("  NAV Updater:", deployParams.navUpdater);
  console.log("  Initial NAV:", deployParams.initialNAV / 10000);
  console.log("  Lockup Period:", deployParams.lockupPeriod / (24 * 60 * 60), "일");

  // 배포 확인
  console.log("\n⚠️  배포를 진행하시겠습니까?");
  console.log("  (계속하려면 Ctrl+C로 중단하지 마세요)");
  await new Promise(resolve => setTimeout(resolve, 5000));

  // MMF Value Token 컨트랙트 배포
  console.log("\n🚀 MMF Value Token 컨트랙트 배포 중...");
  
  const MMFValueToken = await ethers.getContractFactory("MMFValueToken");
  const mmfToken = await MMFValueToken.deploy(
    deployParams.admin,
    deployParams.assetManager,
    deployParams.navUpdater,
    deployParams.initialNAV,
    deployParams.lockupPeriod
  );

  console.log("  트랜잭션 해시:", mmfToken.deployTransaction.hash);
  console.log("  블록 확인 대기 중...");

  await mmfToken.deployed();

  console.log("\n✅ 배포 완료!");
  console.log("=".repeat(60));
  console.log("\n📝 배포 결과:");
  console.log("  컨트랙트 주소:", mmfToken.address);
  console.log("  블록 번호:", mmfToken.deployTransaction.blockNumber);

  // 배포된 컨트랙트 정보 확인
  console.log("\n📊 컨트랙트 정보:");
  console.log("  이름:", await mmfToken.name());
  console.log("  심볼:", await mmfToken.symbol());
  console.log("  Decimals:", await mmfToken.decimals());
  console.log("  현재 NAV:", (await mmfToken.currentNAV()) / 10000);
  console.log("  기본 락업 기간:", (await mmfToken.defaultLockupPeriod()) / (24 * 60 * 60), "일");
  console.log("  총 발행량:", ethers.utils.formatEther(await mmfToken.totalSupply()));

  // 역할 확인
  console.log("\n🔑 역할 설정 확인:");
  const ASSET_MANAGER_ROLE = ethers.utils.keccak256(
    ethers.utils.toUtf8Bytes("ASSET_MANAGER_ROLE")
  );
  const NAV_UPDATER_ROLE = ethers.utils.keccak256(
    ethers.utils.toUtf8Bytes("NAV_UPDATER_ROLE")
  );
  const PAUSER_ROLE = ethers.utils.keccak256(
    ethers.utils.toUtf8Bytes("PAUSER_ROLE")
  );

  const hasAssetManagerRole = await mmfToken.hasRole(
    ASSET_MANAGER_ROLE,
    deployParams.assetManager
  );
  const hasNAVUpdaterRole = await mmfToken.hasRole(
    NAV_UPDATER_ROLE,
    deployParams.navUpdater
  );
  const hasPauserRole = await mmfToken.hasRole(
    PAUSER_ROLE,
    deployParams.admin
  );

  console.log("  Asset Manager 역할:", hasAssetManagerRole ? "✓" : "✗");
  console.log("  NAV Updater 역할:", hasNAVUpdaterRole ? "✓" : "✗");
  console.log("  Pauser 역할:", hasPauserRole ? "✓" : "✗");

  // 배포 정보 저장
  const deploymentInfo = {
    network: network.name,
    chainId: network.chainId,
    contractAddress: mmfToken.address,
    deployerAddress: deployer.address,
    transactionHash: mmfToken.deployTransaction.hash,
    blockNumber: mmfToken.deployTransaction.blockNumber,
    timestamp: new Date().toISOString(),
    parameters: deployParams,
  };

  const fs = require("fs");
  const deploymentPath = `./deployments/${network.name}_${Date.now()}.json`;
  
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
  npx hardhat verify --network ${network.name} ${mmfToken.address} \\
    "${deployParams.admin}" \\
    "${deployParams.assetManager}" \\
    "${deployParams.navUpdater}" \\
    ${deployParams.initialNAV} \\
    ${deployParams.lockupPeriod}
    `);
  }

  // 다음 단계 안내
  console.log("\n📌 다음 단계:");
  console.log("  1. DT Token 주소 설정:");
  console.log(`     mmfToken.setDTTokenAddress("<DT_TOKEN_ADDRESS>")`);
  console.log("\n  2. 추가 권한 부여 (필요 시):");
  console.log(`     mmfToken.grantRole(ASSET_MANAGER_ROLE, "<ADDRESS>")`);
  console.log("\n  3. 테스트 매입:");
  console.log(`     mmfToken.purchaseWithDT("<USER_ADDRESS>", ethers.utils.parseEther("1000000"))`);
  console.log("\n  4. NAV 업데이트:");
  console.log(`     mmfToken.updateNAVAndRebase(10005) // 1.0000 → 1.0005`);

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
