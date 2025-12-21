# MMF Value Token - 빠른 시작 가이드

## 🚀 5분 만에 시작하기

### 1. 프로젝트 설정 (2분)

```bash
# 1. 프로젝트 디렉토리 생성
mkdir mmf-value-token
cd mmf-value-token

# 2. npm 초기화 및 의존성 설치
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npm install @openzeppelin/contracts

# 3. Hardhat 초기화
npx hardhat
# "Create a JavaScript project" 선택

# 4. 파일 복사
# 제공된 파일들을 해당 위치에 복사:
# - MMFValueToken.sol → contracts/
# - MMFValueTokenDeployer.sol → contracts/
# - MMFValueToken.test.js → test/
# - deploy.js → scripts/
# - hardhat.config.js → 루트
# - package.json → 루트
# - .env.example → 루트 (.env로 복사)
```

### 2. 환경 설정 (1분)

```bash
# .env 파일 생성
cp .env.example .env

# .env 파일 편집 (Private Key 등)
nano .env
```

**.env 필수 항목:**
```env
PRIVATE_KEY=0x여기에_당신의_프라이빗_키
PULSE_RPC_URL=http://pulse-rpc-url
```

### 3. 컴파일 및 테스트 (1분)

```bash
# 컴파일
npx hardhat compile

# 테스트 실행
npx hardhat test

# 커버리지 확인 (선택)
npx hardhat coverage
```

### 4. 배포 (1분)

```bash
# 로컬 네트워크 실행 (새 터미널)
npx hardhat node

# 로컬 배포
npx hardhat run scripts/deploy.js --network localhost

# 테스트넷 배포 (Sepolia)
npx hardhat run scripts/deploy.js --network sepolia

# Pulse 블록체인 배포
npx hardhat run scripts/deploy.js --network pulse
```

## 💡 주요 사용 예시

### 예시 1: 토큰 매입

```javascript
const { ethers } = require("hardhat");

async function purchase() {
  const mmfToken = await ethers.getContractAt(
    "MMFValueToken",
    "0xYOUR_CONTRACT_ADDRESS"
  );

  // 100만원 매입
  const tx = await mmfToken.purchaseWithDT(
    "0xCUSTOMER_ADDRESS",
    ethers.utils.parseEther("1000000")
  );
  
  await tx.wait();
  console.log("매입 완료!");
}

purchase();
```

### 예시 2: NAV 업데이트

```javascript
async function updateNAV() {
  const mmfToken = await ethers.getContractAt(
    "MMFValueToken",
    "0xYOUR_CONTRACT_ADDRESS"
  );

  // NAV 1.0000 → 1.0005 (0.05% 상승)
  const tx = await mmfToken.updateNAVAndRebase(10005);
  await tx.wait();
  
  console.log("NAV 업데이트 및 Rebase 완료!");
}

updateNAV();
```

### 예시 3: 잔액 조회

```javascript
async function checkBalance() {
  const mmfToken = await ethers.getContractAt(
    "MMFValueToken",
    "0xYOUR_CONTRACT_ADDRESS"
  );

  const balance = await mmfToken.balanceOf("0xUSER_ADDRESS");
  console.log("잔액:", ethers.utils.formatEther(balance), "토큰");

  const shares = await mmfToken.sharesOf("0xUSER_ADDRESS");
  console.log("Share:", ethers.utils.formatEther(shares));

  const nav = await mmfToken.currentNAV();
  console.log("현재 NAV:", nav / 10000);
}

checkBalance();
```

### 예시 4: 환매

```javascript
async function redeem() {
  const mmfToken = await ethers.getContractAt(
    "MMFValueToken",
    "0xYOUR_CONTRACT_ADDRESS"
  );

  // 50만원 환매
  const tx = await mmfToken.redeemToDT(
    ethers.utils.parseEther("500000")
  );
  
  await tx.wait();
  console.log("환매 완료!");
}

redeem();
```

## 📊 주요 함수 한눈에 보기

### Asset Manager 전용

| 함수 | 설명 | 예시 |
|------|------|------|
| `purchaseWithDT(buyer, amount)` | 토큰 매입 (1:1) | `purchaseWithDT(user, 1000000e18)` |
| `processPendingPurchase(buyer, index)` | T+1 정산 처리 | `processPendingPurchase(user, 0)` |

### NAV Updater 전용

| 함수 | 설명 | 예시 |
|------|------|------|
| `updateNAVAndRebase(newNAV)` | NAV 업데이트 및 Rebase | `updateNAVAndRebase(10005)` |

### 사용자 함수

| 함수 | 설명 | 예시 |
|------|------|------|
| `balanceOf(account)` | 잔액 조회 | `balanceOf(userAddress)` |
| `redeemToDT(amount)` | 환매 | `redeemToDT(500000e18)` |
| `redeemAll()` | 전체 환매 | `redeemAll()` |
| `transfer(to, amount)` | 전송 | `transfer(recipient, 100000e18)` |
| `approve(spender, amount)` | 승인 | `approve(spender, 100000e18)` |

### 조회 함수 (무료)

| 함수 | 설명 | 반환값 |
|------|------|--------|
| `balanceOf(account)` | 토큰 잔액 | uint256 |
| `sharesOf(account)` | Share 조회 | uint256 |
| `totalSupply()` | 총 발행량 | uint256 |
| `currentNAV()` | 현재 NAV | uint256 |
| `lockupUntil(account)` | 락업 만료 시간 | uint256 |
| `getLockupTimeRemaining(user)` | 락업 남은 시간 | uint256 (초) |
| `getPendingPurchaseCount(user)` | Pending 개수 | uint256 |

## 🔧 문제 해결

### 컴파일 오류
```bash
# 캐시 삭제 후 재컴파일
npx hardhat clean
npx hardhat compile
```

### 테스트 실패
```bash
# 특정 테스트만 실행
npx hardhat test --grep "Purchase"

# 상세 로그
npx hardhat test --verbose
```

### 배포 오류
```bash
# 계정 잔액 확인
npx hardhat run scripts/check-balance.js --network localhost

# Gas Limit 증가
# hardhat.config.js에서 gas 설정 조정
```

### 권한 오류
```javascript
// 역할 부여
const ASSET_MANAGER_ROLE = ethers.utils.keccak256(
  ethers.utils.toUtf8Bytes("ASSET_MANAGER_ROLE")
);

await mmfToken.grantRole(ASSET_MANAGER_ROLE, newManagerAddress);
```

## 📱 프론트엔드 통합

### React + ethers.js 예시

```javascript
import { ethers } from 'ethers';
import MMFValueTokenABI from './artifacts/contracts/MMFValueToken.sol/MMFValueToken.json';

// 1. Provider 및 Contract 초기화
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const mmfToken = new ethers.Contract(
  'CONTRACT_ADDRESS',
  MMFValueTokenABI.abi,
  signer
);

// 2. 잔액 조회
async function getBalance() {
  const balance = await mmfToken.balanceOf(await signer.getAddress());
  return ethers.utils.formatEther(balance);
}

// 3. 환매
async function redeem(amount) {
  const tx = await mmfToken.redeemToDT(
    ethers.utils.parseEther(amount)
  );
  await tx.wait();
  return tx.hash;
}

// 4. 이벤트 리스닝
mmfToken.on("Rebased", (oldSupply, newSupply, rebaseAmount, nav) => {
  console.log("Rebase 발생!", {
    oldSupply: ethers.utils.formatEther(oldSupply),
    newSupply: ethers.utils.formatEther(newSupply),
    nav: nav / 10000
  });
});
```

## 🔐 보안 체크리스트

배포 전 확인사항:

- [ ] Private Key는 .env 파일에만 저장
- [ ] .env 파일은 .gitignore에 추가됨
- [ ] 프로덕션 배포 전 테스트넷에서 충분히 테스트
- [ ] Admin, AssetManager, NAVUpdater 주소 확인
- [ ] 컨트랙트 검증 (Etherscan)
- [ ] 감사 완료 (권장)
- [ ] 긴급 대응 계획 수립
- [ ] 백업 Private Key 안전 보관

## 📚 추가 리소스

- [전체 README](./README.md)
- [프로젝트 구조](./PROJECT_STRUCTURE.md)
- [테스트 시나리오](./MMFValueTokenTest.sol)
- [OpenZeppelin 문서](https://docs.openzeppelin.com/)
- [Hardhat 문서](https://hardhat.org/docs)

## 🆘 지원

문제가 발생하면:

1. [README.md](./README.md) 참고
2. `npx hardhat test` 실행하여 정상 작동 확인
3. Issue 등록 또는 개발팀 연락

---

**행운을 빕니다! 🚀**
