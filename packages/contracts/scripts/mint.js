const hre = require("hardhat");
const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

/**
 * Token Mint 스크립트
 *
 * 사용법:
 * npx hardhat run scripts/mint.js --network <네트워크명>
 *
 * 예시:
 * # S-KRW 토큰 민트
 * TOKEN=skrw TO_ADDRESS=0x123... AMOUNT=1000000 npx hardhat run scripts/mint.js --network localhost
 *
 * # PF 토큰 민트
 * TOKEN=pf TO_ADDRESS=0x123... AMOUNT=1000000 npx hardhat run scripts/mint.js --network localhost
 *
 * 
 * # MMF 토큰 민트 (purchaseWithDT - ContractFactory 방식)
 * TOKEN=mmf TO_ADDRESS=0x123... AMOUNT=1000000 npx hardhat run scripts/mint.js --network localhost
 *
 * # MMF 토큰 민트 (purchaseWithDT - Inline ABI 방식)
 * TOKEN=mmf2 TO_ADDRESS=0x123... AMOUNT=1000000 npx hardhat run scripts/mint.js --network localhost
 *
 * # 배포된 컨트랙트 주소 직접 지정
 * TOKEN=skrw CONTRACT_ADDRESS=0x... TO_ADDRESS=0x123... AMOUNT=1000000 npx hardhat run scripts/mint.js --network localhost
 */

/**
 * 최신 배포 파일 찾기
 */
function findLatestDeployment(network, tokenType) {
  const deploymentsDir = "./deployments";

  if (!fs.existsSync(deploymentsDir)) {
    return null;
  }

  const files = fs.readdirSync(deploymentsDir);
  let pattern;

  if (tokenType === "skrw") {
    pattern = new RegExp(`^skrw_${network}_\\d+\\.json$`);
  } else if (tokenType === "mmf") {
    pattern = new RegExp(`^${network}_\\d+\\.json$`);
  } else if(tokenType === "pf") {
    pattern = new RegExp(`^pf_${network}_\\d+\\.json$`);
  }

  const matchingFiles = files
    .filter(file => pattern.test(file))
    .map(file => ({
      file,
      timestamp: parseInt(file.match(/(\d+)\.json$/)[1])
    }))
    .sort((a, b) => b.timestamp - a.timestamp);

  if (matchingFiles.length === 0) {
    return null;
  }

  const deploymentPath = path.join(deploymentsDir, matchingFiles[0].file);
  const deployment = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));

  return deployment.contractAddress;
}

/**
 * S-KRW 토큰 민트
 */
async function mintSKRW(contractAddress, toAddress, amountStr) {
  console.log("\n🪙 S-KRW 토큰 민트");
  console.log("=".repeat(60));

  const SKRWToken = await ethers.getContractFactory("SKRWToken");
  const skrwToken = SKRWToken.attach(contractAddress);

  // 컨트랙트 정보 확인
  const name = await skrwToken.name();
  const symbol = await skrwToken.symbol();
  const decimals = await skrwToken.decimals();
  const totalSupplyBefore = await skrwToken.totalSupply();

  // decimals에 맞게 amount 파싱
  const amount = ethers.parseUnits(amountStr, decimals);

  console.log("\n📊 토큰 정보:");
  console.log("  이름:", name);
  console.log("  심볼:", symbol);
  console.log("  Decimals:", decimals);
  console.log("  컨트랙트 주소:", contractAddress);
  console.log("  민트 전 총 발행량:", ethers.formatUnits(totalSupplyBefore, decimals));

  // Minter 권한 확인
  const [signer] = await ethers.getSigners();
  const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));
  const hasMinterRole = await skrwToken.hasRole(MINTER_ROLE, signer.address);

  console.log("\n🔑 권한 확인:");
  console.log("  서명자:", signer.address);
  console.log("  Minter 권한:", hasMinterRole ? "✓" : "✗");

  if (!hasMinterRole) {
    throw new Error("서명자에게 MINTER_ROLE 권한이 없습니다.");
  }

  // 토큰 민트
  console.log("\n🚀 토큰 민트 실행:");
  console.log("  수신자:", toAddress);
  console.log("  수량:", ethers.formatUnits(amount, decimals));

  const tx = await skrwToken.mint(toAddress, amount);
  console.log("  트랜잭션 해시:", tx.hash);
  console.log("  블록 확인 대기 중...");

  const receipt = await tx.wait();
  console.log("  블록 번호:", Number(receipt.blockNumber));

  // 결과 확인
  const balanceAfter = await skrwToken.balanceOf(toAddress);
  const totalSupplyAfter = await skrwToken.totalSupply();

  console.log("\n✅ 민트 완료:");
  console.log("  수신자 잔액:", ethers.formatUnits(balanceAfter, decimals));
  console.log("  민트 후 총 발행량:", ethers.formatUnits(totalSupplyAfter, decimals));
  console.log("  증가량:", ethers.formatUnits(totalSupplyAfter - totalSupplyBefore, decimals));
}


/**
 * PF 토큰 민트
 */
async function mintPFToken(contractAddress, toAddress, amountStr) {
  console.log("\n🪙 PF 토큰 민트");
  console.log("=".repeat(60));

  const PFToken = await ethers.getContractFactory("PFToken");
  const pfToken = PFToken.attach(contractAddress);

  // 컨트랙트 정보 확인
  const name = await pfToken.name();
  const symbol = await pfToken.symbol();
  const decimals = await pfToken.decimals();
  const totalSupplyBefore = await pfToken.totalSupply();

  // decimals에 맞게 amount 파싱
  const amount = ethers.parseUnits(amountStr, decimals);

  console.log("\n📊 토큰 정보:");
  console.log("  이름:", name);
  console.log("  심볼:", symbol);
  console.log("  Decimals:", decimals);
  console.log("  컨트랙트 주소:", contractAddress);
  console.log("  민트 전 총 발행량:", ethers.formatUnits(totalSupplyBefore, decimals));

  // Minter 권한 확인
  const [signer] = await ethers.getSigners();
  const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));
  const hasMinterRole = await pfToken.hasRole(MINTER_ROLE, signer.address);

  console.log("\n🔑 권한 확인:");
  console.log("  서명자:", signer.address);
  console.log("  Minter 권한:", hasMinterRole ? "✓" : "✗");

  if (!hasMinterRole) {
    throw new Error("서명자에게 MINTER_ROLE 권한이 없습니다.");
  }

  // 토큰 민트
  console.log("\n🚀 토큰 민트 실행:");
  console.log("  수신자:", toAddress);
  console.log("  수량:", ethers.formatUnits(amount, decimals));

  const tx = await pfToken.mint(toAddress, amount);
  console.log("  트랜잭션 해시:", tx.hash);
  console.log("  블록 확인 대기 중...");

  const receipt = await tx.wait();
  console.log("  블록 번호:", Number(receipt.blockNumber));

  // 결과 확인
  const balanceAfter = await pfToken.balanceOf(toAddress);
  const totalSupplyAfter = await pfToken.totalSupply();

  console.log("\n✅ 민트 완료:");
  console.log("  수신자 잔액:", ethers.formatUnits(balanceAfter, decimals));
  console.log("  민트 후 총 발행량:", ethers.formatUnits(totalSupplyAfter, decimals));
  console.log("  증가량:", ethers.formatUnits(totalSupplyAfter - totalSupplyBefore, decimals));
}


/**
 * MMF Value Token 민트 (purchaseWithDT)
 */
async function mintMMF(contractAddress, toAddress, amount) {
  console.log("\n🪙 MMF Value Token 민트 (Purchase)");
  console.log("=".repeat(60));

  const MMFValueToken = await ethers.getContractFactory("MMFValueToken");
  const mmfToken = MMFValueToken.attach(contractAddress);

  // 컨트랙트 정보 확인
  const name = await mmfToken.name();
  const symbol = await mmfToken.symbol();
  const totalSupplyBefore = await mmfToken.totalSupply();
  const currentNAV = await mmfToken.currentNAV();

  console.log("\n📊 토큰 정보:");
  console.log("  이름:", name);
  console.log("  심볼:", symbol);
  console.log("  컨트랙트 주소:", contractAddress);
  console.log("  민트 전 총 발행량:", ethers.formatEther(totalSupplyBefore));
  console.log("  현재 NAV:", Number(currentNAV) / 10000);

  // Asset Manager 권한 확인
  const [signer] = await ethers.getSigners();
  const ASSET_MANAGER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("ASSET_MANAGER_ROLE"));
  const hasAssetManagerRole = await mmfToken.hasRole(ASSET_MANAGER_ROLE, signer.address);

  console.log("\n🔑 권한 확인:");
  console.log("  서명자:", signer.address);
  console.log("  Asset Manager 권한:", hasAssetManagerRole ? "✓" : "✗");

  if (!hasAssetManagerRole) {
    throw new Error("서명자에게 ASSET_MANAGER_ROLE 권한이 없습니다.");
  }

  // Paused 상태 확인
  const isPaused = await mmfToken.paused();
  if (isPaused) {
    throw new Error("컨트랙트가 일시 정지 상태입니다.");
  }

  // 토큰 민트 (purchaseWithDT)
  console.log("\n🚀 토큰 Purchase 실행:");
  console.log("  구매자:", toAddress);
  console.log("  DT 수량:", ethers.formatEther(amount));

  const tx = await mmfToken.purchaseWithDT(toAddress, amount);
  console.log("  트랜잭션 해시:", tx.hash);
  console.log("  블록 확인 대기 중...");

  const receipt = await tx.wait();
  console.log("  블록 번호:", Number(receipt.blockNumber));

  // 결과 확인
  const balanceAfter = await mmfToken.balanceOf(toAddress);
  const totalSupplyAfter = await mmfToken.totalSupply();
  const lockupUntil = await mmfToken.lockupUntil(toAddress);

  console.log("\n✅ Purchase 완료:");
  console.log("  구매자 잔액:", ethers.formatEther(balanceAfter));
  console.log("  민트 후 총 발행량:", ethers.formatEther(totalSupplyAfter));
  console.log("  증가량:", ethers.formatEther(totalSupplyAfter - totalSupplyBefore));
  console.log("  락업 만료:", new Date(Number(lockupUntil) * 1000).toISOString());

  // Pending Purchase 정보
  const pendingCount = await mmfToken.getPendingPurchaseCount(toAddress);
  console.log("  Pending Purchase 개수:", Number(pendingCount));
}

/**
 * MMF Value Token 민트 (Inline ABI 버전)
 */
async function mintMMF2(contractAddress, toAddress, amount) {
  console.log("\n🪙 MMF Value Token 민트 (Purchase - Inline ABI)");
  console.log("=".repeat(60));

  // Inline ABI 정의
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
    "function getPendingPurchaseCount(address user) view returns (uint256)"
  ];

  const [signer] = await ethers.getSigners();
  const mmfToken = new ethers.Contract(contractAddress, MMF_ABI, signer);

  // 컨트랙트 정보 확인
  const name = await mmfToken.name();
  const symbol = await mmfToken.symbol();
  const totalSupplyBefore = await mmfToken.totalSupply();
  const currentNAV = await mmfToken.currentNAV();

  console.log("\n📊 토큰 정보:");
  console.log("  이름:", name);
  console.log("  심볼:", symbol);
  console.log("  컨트랙트 주소:", contractAddress);
  console.log("  민트 전 총 발행량:", ethers.formatEther(totalSupplyBefore));
  console.log("  현재 NAV:", Number(currentNAV) / 10000);

  // Asset Manager 권한 확인
  const ASSET_MANAGER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("ASSET_MANAGER_ROLE"));
  const hasAssetManagerRole = await mmfToken.hasRole(ASSET_MANAGER_ROLE, signer.address);

  console.log("\n🔑 권한 확인:");
  console.log("  서명자:", signer.address);
  console.log("  Asset Manager 권한:", hasAssetManagerRole ? "✓" : "✗");

  if (!hasAssetManagerRole) {
    throw new Error("서명자에게 ASSET_MANAGER_ROLE 권한이 없습니다.");
  }

  // Paused 상태 확인
  const isPaused = await mmfToken.paused();
  if (isPaused) {
    throw new Error("컨트랙트가 일시 정지 상태입니다.");
  }

  // 토큰 민트 (purchaseWithDT)
  console.log("\n🚀 토큰 Purchase 실행:");
  console.log("  구매자:", toAddress);
  console.log("  DT 수량:", ethers.formatEther(amount));

  const tx = await mmfToken.purchaseWithDT(toAddress, amount);
  console.log("  트랜잭션 해시:", tx.hash);
  console.log("  블록 확인 대기 중...");

  const receipt = await tx.wait();
  console.log("  블록 번호:", Number(receipt.blockNumber));

  // 결과 확인
  const balanceAfter = await mmfToken.balanceOf(toAddress);
  const totalSupplyAfter = await mmfToken.totalSupply();
  const lockupUntil = await mmfToken.lockupUntil(toAddress);

  console.log("\n✅ Purchase 완료:");
  console.log("  구매자 잔액:", ethers.formatEther(balanceAfter));
  console.log("  민트 후 총 발행량:", ethers.formatEther(totalSupplyAfter));
  console.log("  증가량:", ethers.formatEther(totalSupplyAfter - totalSupplyBefore));
  console.log("  락업 만료:", new Date(Number(lockupUntil) * 1000).toISOString());

  // Pending Purchase 정보
  const pendingCount = await mmfToken.getPendingPurchaseCount(toAddress);
  console.log("  Pending Purchase 개수:", Number(pendingCount));
}

/**
 * 일괄 민트 (S-KRW만 지원)
 */
async function batchMintSKRW(contractAddress, addresses, amountStrs) {
  console.log("\n🪙 S-KRW 토큰 일괄 민트");
  console.log("=".repeat(60));

  const SKRWToken = await ethers.getContractFactory("SKRWToken");
  const skrwToken = SKRWToken.attach(contractAddress);

  const decimals = await skrwToken.decimals();

  // decimals에 맞게 amounts 파싱
  const amounts = amountStrs.map(amt => ethers.parseUnits(amt, decimals));

  console.log("\n📊 일괄 민트 정보:");
  console.log("  수신자 수:", addresses.length);
  console.log("  총 수량:", ethers.formatUnits(
    amounts.reduce((a, b) => a + b, 0n),
    decimals
  ));

  // 일괄 민트 실행
  const tx = await skrwToken.batchMint(addresses, amounts);
  console.log("\n  트랜잭션 해시:", tx.hash);
  console.log("  블록 확인 대기 중...");

  const receipt = await tx.wait();
  console.log("  블록 번호:", Number(receipt.blockNumber));

  // 각 주소별 결과 확인
  console.log("\n✅ 일괄 민트 완료:");
  for (let i = 0; i < addresses.length; i++) {
    const balance = await skrwToken.balanceOf(addresses[i]);
    console.log(`  ${addresses[i]}: ${ethers.formatUnits(balance, decimals)}`);
  }
}

/**
 * 메인 함수
 */
async function main() {
  console.log("\n=".repeat(60));
  console.log("Token Mint 스크립트");
  console.log("=".repeat(60));

  // 환경 변수에서 파라미터 읽기
  const tokenType = process.env.TOKEN?.toLowerCase();
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const toAddress = process.env.TO_ADDRESS;
  const amountStr = process.env.AMOUNT;

  // 일괄 민트용 (쉼표로 구분)
  const toAddresses = process.env.TO_ADDRESSES?.split(",");
  const amounts = process.env.AMOUNTS?.split(",");

  // 네트워크 정보
  const network = await ethers.provider.getNetwork();
  const [signer] = await ethers.getSigners();

  console.log("\n📋 실행 정보:");
  console.log("  네트워크:", network.name);
  console.log("  Chain ID:", network.chainId);
  console.log("  서명자:", signer.address);

  // 파라미터 검증
  if (!tokenType || (tokenType !== "skrw" && tokenType !== "mmf" && tokenType !== "mmf2" && tokenType !== "pf")) {
    throw new Error("TOKEN 환경 변수를 'skrw', 'mmf', 'pf' , 또는 'mmf2'로 설정해주세요.");
  }

  console.log("  토큰 타입:", tokenType.toUpperCase());

  // 컨트랙트 주소 결정
  let targetAddress = contractAddress;
  if (!targetAddress) {
    console.log("\n🔍 배포 정보 검색 중...");
    // mmf2는 mmf와 같은 컨트랙트 사용
    const searchTokenType = tokenType === "mmf2" ? "mmf" : tokenType;
    targetAddress = findLatestDeployment(network.name, searchTokenType);

    
    if (!targetAddress) {
      console.log("?????????????????????????");
      throw new Error(
        `${network.name} 네트워크에서 ${tokenType.toUpperCase()} 토큰의 배포 정보를 찾을 수 없습니다.\n` +
        "CONTRACT_ADDRESS 환경 변수로 컨트랙트 주소를 직접 지정해주세요."
      );
    }
    console.log("  자동 검색된 컨트랙트 주소:", targetAddress);
  }

  

  // 일괄 민트 vs 단일 민트
  if (toAddresses && amounts && tokenType === "skrw") {
    // 일괄 민트 (S-KRW만 지원)
    if (toAddresses.length !== amounts.length) {
      throw new Error("TO_ADDRESSES와 AMOUNTS의 개수가 일치하지 않습니다.");
    }

    const parsedAddresses = toAddresses.map(addr => addr.trim());
    const parsedAmounts = amounts.map(amt => amt.trim());

    await batchMintSKRW(targetAddress, parsedAddresses, parsedAmounts);
  } else {
    // 단일 민트
    if (!toAddress) {
      throw new Error("TO_ADDRESS 환경 변수를 설정해주세요.");
    }
    if (!amountStr) {
      throw new Error("AMOUNT 환경 변수를 설정해주세요.");
    }

    if (tokenType === "skrw") {
      await mintSKRW(targetAddress, toAddress, amountStr);
    } else if (tokenType === "mmf") {
      // MMF는 DT token이 18 decimals이므로 parseEther 사용
      const amount = ethers.parseEther(amountStr);
      await mintMMF(targetAddress, toAddress, amount);
    } else if (tokenType === "mmf2") {
      // MMF2 (Inline ABI 버전)
      const amount = ethers.parseEther(amountStr);
      await mintMMF2(targetAddress, toAddress, amount);
    } else if (tokenType === "pf") {
      // PF Token
      await mintPFToken(targetAddress, toAddress, amountStr);
    }
    
  }

  console.log("\n" + "=".repeat(60));
  console.log("민트 완료!");
  console.log("=".repeat(60) + "\n");
}

// 에러 처리
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ 민트 실패:");
    console.error(error.message);
    console.error("\n사용법:");
    console.error("  TOKEN=skrw TO_ADDRESS=0x... AMOUNT=1000000 npx hardhat run scripts/mint.js --network localhost");
    console.error("  TOKEN=pf TO_ADDRESS=0x... AMOUNT=1000000 npx hardhat run scripts/mint.js --network localhost");
    console.error("  TOKEN=mmf TO_ADDRESS=0x... AMOUNT=1000000 npx hardhat run scripts/mint.js --network localhost");
    console.error("  TOKEN=mmf2 TO_ADDRESS=0x... AMOUNT=1000000 npx hardhat run scripts/mint.js --network localhost");
    console.error("\n일괄 민트 (S-KRW만):");
    console.error("  TOKEN=skrw TO_ADDRESSES=0x...,0x... AMOUNTS=1000,2000 npx hardhat run scripts/mint.js --network localhost");
    process.exit(1);
  });
