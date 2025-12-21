# MMF Value Token - Share-Based Rebasable Token

BUIDL 스타일의 투자금 기준 방식 MMF(Money Market Fund) 토큰 스마트 컨트랙트

## 📋 목차

- [개요](#개요)
- [주요 특징](#주요-특징)
- [아키텍처](#아키텍처)
- [설치 및 배포](#설치-및-배포)
- [사용 방법](#사용-방법)
- [테스트](#테스트)
- [보안](#보안)
- [라이선스](#라이선스)

## 개요

MMF Value Token은 Share-Based 메커니즘을 활용한 Rebasable 토큰으로, NAV(Net Asset Value) 변동 시 자동으로 사용자 잔액이 조정됩니다.

### 핵심 개념

- **투자금 기준**: 투자한 원금(KRW) 기준으로 1:1 토큰 발행
- **Share-Based**: 각 사용자의 지분(Share)을 추적하여 효율적인 Rebase 구현
- **자동 Rebase**: NAV 변동 시 모든 사용자의 잔액이 자동으로 비례 조정
- **Gas 효율적**: O(1) 복잡도로 모든 사용자에게 동시 Rebase 적용

## 주요 특징

### 1. Share-Based 잔액 관리

```solidity
// 사용자 잔액 = (사용자 Share / 총 Share) × 총 발행량
function balanceOf(address account) public view returns (uint256) {
    return _shares[account]; // 1:1 투자금 기준
}
```

### 2. 자동 Rebase

NAV 변동 시 모든 보유자의 잔액이 자동으로 조정됩니다.

```
초기: 1,000,000 토큰 (NAV 1.0000)
NAV 상승: 1.0000 → 1.0005 (+0.05%)
결과: 1,000,500 토큰 (자동 증가)
```

### 3. 락업(Lockup) 기능

- 매입 시 자동으로 락업 기간 적용
- 락업 기간 중에는 환매 및 전송 불가
- 사용자별 개별 락업 설정 가능

### 4. T+1 정산

- 당일(T+0) 예상 NAV로 즉시 발행
- 익일(T+1) 확정 NAV로 정산
- Pending Purchase 기록 관리

### 5. 역할 기반 접근 제어

- `ASSET_MANAGER_ROLE`: 토큰 매입/환매 권한
- `NAV_UPDATER_ROLE`: NAV 업데이트 권한
- `PAUSER_ROLE`: 긴급 정지 권한
- `DEFAULT_ADMIN_ROLE`: 시스템 설정 권한

## 아키텍처

### 시스템 구성

```
┌─────────────────┐
│   고객 (Users)   │
└────────┬────────┘
         │
┌────────▼────────┐
│  증권사 (증권사)  │
│  - KYC 확인      │
│  - DT 발행       │
└────────┬────────┘
         │
┌────────▼────────┐
│ Pulse Blockchain│
│  ┌────────────┐ │
│  │ DT Token   │ │
│  │ (Wrapped   │ │
│  │  KRW)      │ │
│  └─────┬──────┘ │
│        │        │
│  ┌─────▼──────┐ │
│  │ MMF Value  │ │
│  │ Token      │ │
│  │ (Rebasable)│ │
│  └────────────┘ │
└────────┬────────┘
         │
┌────────▼────────┐
│  자산운용사      │
│  - NAV 계산     │
│  - Rebase 실행  │
└─────────────────┘
```

### 데이터 플로우

1. **매입 프로세스**
   ```
   고객 신청 → 증권사 KYC → DT 발행 → MMF Token 발행 (1:1)
   ```

2. **NAV 업데이트**
   ```
   펀드팀 계산 → NAV 확정 → 온체인 업데이트 → 자동 Rebase
   ```

3. **환매 프로세스**
   ```
   고객 신청 → MMF Token 소각 → DT 재발행 → 원화 지급
   ```

## 설치 및 배포

### 1. 사전 준비

```bash
# Node.js 및 npm 설치 확인
node --version  # v16 이상
npm --version   # v8 이상

# Hardhat 프로젝트 초기화
npm init -y
npm install --save-dev hardhat
npx hardhat
```

### 2. 의존성 설치

```bash
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install @openzeppelin/contracts
```

### 3. 컴파일

```bash
npx hardhat compile
```

### 4. 배포 스크립트

```javascript
// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying with account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // MMF Value Token 배포
  const MMFValueToken = await hre.ethers.getContractFactory("MMFValueToken");
  const mmfToken = await MMFValueToken.deploy(
    deployer.address,        // admin
    deployer.address,        // assetManager (실제 배포 시 별도 주소)
    deployer.address,        // navUpdater (실제 배포 시 별도 주소)
    10000,                   // initialNAV: 1.0000
    30 * 24 * 60 * 60       // lockupPeriod: 30일
  );

  await mmfToken.deployed();

  console.log("MMF Value Token deployed to:", mmfToken.address);
  console.log("Initial NAV:", await mmfToken.currentNAV());
  console.log("Lockup Period:", await mmfToken.defaultLockupPeriod(), "seconds");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

### 5. 배포 실행

```bash
# 로컬 네트워크에 배포
npx hardhat run scripts/deploy.js --network localhost

# 테스트넷에 배포 (예: Sepolia)
npx hardhat run scripts/deploy.js --network sepolia

# 메인넷에 배포
npx hardhat run scripts/deploy.js --network mainnet
```

## 사용 방법

### 1. 토큰 매입

```javascript
// 자산운용사가 고객에게 토큰 발행
await mmfToken.connect(assetManager).purchaseWithDT(
  customerAddress,
  ethers.utils.parseEther("1000000") // 100만원
);

// 잔액 확인
const balance = await mmfToken.balanceOf(customerAddress);
console.log("Balance:", ethers.utils.formatEther(balance));
```

### 2. NAV 업데이트 및 Rebase

```javascript
// NAV 업데이트 (1.0000 → 1.0005)
await mmfToken.connect(navUpdater).updateNAVAndRebase(10005);

// 새 NAV 확인
const newNAV = await mmfToken.currentNAV();
console.log("New NAV:", newNAV / 10000);

// 업데이트된 잔액 확인
const newBalance = await mmfToken.balanceOf(customerAddress);
console.log("New Balance:", ethers.utils.formatEther(newBalance));
```

### 3. 토큰 환매

```javascript
// 락업 기간 확인
const lockupRemaining = await mmfToken.getLockupTimeRemaining(customerAddress);
console.log("Lockup remaining:", lockupRemaining, "seconds");

// 환매 (락업 기간 후)
await mmfToken.connect(customer).redeemToDT(
  ethers.utils.parseEther("500000") // 50만원
);

// 또는 전체 환매
await mmfToken.connect(customer).redeemAll();
```

### 4. 토큰 전송

```javascript
// 다른 주소로 전송 (락업 기간 후)
await mmfToken.connect(customer).transfer(
  recipientAddress,
  ethers.utils.parseEther("100000")
);

// Approve & TransferFrom
await mmfToken.connect(owner).approve(
  spenderAddress,
  ethers.utils.parseEther("100000")
);

await mmfToken.connect(spender).transferFrom(
  ownerAddress,
  recipientAddress,
  ethers.utils.parseEther("50000")
);
```

### 5. 관리 기능

```javascript
// 락업 기간 설정
await mmfToken.connect(admin).setDefaultLockupPeriod(
  60 * 24 * 60 * 60 // 60일
);

// 특정 사용자 락업 설정
await mmfToken.connect(admin).setUserLockup(
  userAddress,
  Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60
);

// 긴급 정지
await mmfToken.connect(admin).pause();

// 정지 해제
await mmfToken.connect(admin).unpause();
```

## 테스트

### 테스트 실행

```bash
# 모든 테스트 실행
npx hardhat test

# 특정 테스트 파일 실행
npx hardhat test test/MMFValueToken.test.js

# Gas 리포트 포함
REPORT_GAS=true npx hardhat test

# 커버리지 확인
npx hardhat coverage
```

### 주요 테스트 시나리오

1. **기본 매입/환매**
   - 1:1 토큰 발행 확인
   - 락업 적용 확인
   - 환매 후 잔액 확인

2. **NAV 변동 및 Rebase**
   - Positive Rebase (NAV 상승)
   - Negative Rebase (NAV 하락)
   - 다중 사용자 비례 배분

3. **소량 거래**
   - 여러 번 나눠 환매
   - Rebase 후 환매
   - Share 정확성 검증

4. **전송 기능**
   - 기본 전송
   - Approve/TransferFrom
   - 락업 중 전송 시도

5. **권한 관리**
   - Role-based 접근 제어
   - 일시 정지 기능
   - 설정 변경 권한

6. **T+1 정산**
   - Pending Purchase 기록
   - T+1 후 처리
   - 중복 처리 방지

## 보안

### 보안 기능

1. **Role-Based Access Control**
   - OpenZeppelin AccessControl 사용
   - 각 기능별 권한 분리

2. **Reentrancy Guard**
   - 재진입 공격 방지
   - 모든 상태 변경 함수에 적용

3. **Pausable**
   - 긴급 상황 시 일시 정지
   - 관리자만 제어 가능

4. **Input Validation**
   - 모든 입력 검증
   - Zero address 체크
   - Amount 양수 확인

### 감사 권장사항

배포 전 다음 항목을 검토하세요:

- [ ] 전문 스마트 컨트랙트 감사 수행
- [ ] Slither, Mythril 등 정적 분석 도구 실행
- [ ] 테스트 커버리지 95% 이상 달성
- [ ] 메인넷 배포 전 테스트넷에서 충분한 검증
- [ ] 긴급 대응 프로세스 수립

## Gas 최적화

### Share-Based의 장점

```solidity
// 기존 방식: 모든 사용자 순회 필요 - O(n)
for (uint i = 0; i < users.length; i++) {
    balances[users[i]] = balances[users[i]] * newNAV / oldNAV;
}

// Share-Based: 총량만 변경 - O(1)
// totalSupply 계산 시 자동 반영
```

### 예상 Gas 비용

| 작업 | Gas 사용량 | 비고 |
|------|-----------|------|
| 배포 | ~3,000,000 | 초기 1회만 |
| purchaseWithDT | ~150,000 | 매입마다 |
| redeemToDT | ~100,000 | 환매마다 |
| updateNAVAndRebase | ~50,000 | 1일 1회 |
| transfer | ~65,000 | 전송마다 |

## 문제 해결

### 일반적인 오류

**"Tokens are locked"**
- 락업 기간이 아직 종료되지 않았습니다.
- `getLockupTimeRemaining()`으로 남은 시간 확인

**"Insufficient balance"**
- 보유 토큰보다 많은 금액을 환매하려고 합니다.
- `balanceOf()`로 현재 잔액 확인

**"Caller is not asset manager"**
- Asset Manager 권한이 없는 주소가 호출했습니다.
- 권한 확인 필요

**"NAV unchanged"**
- 현재 NAV와 동일한 값으로 업데이트하려고 합니다.
- 새로운 NAV 값 확인

## 업그레이드 가능성

현재 버전은 업그레이드 불가능한 컨트랙트입니다. 업그레이드 가능한 버전이 필요한 경우:

1. OpenZeppelin Upgradeable Contracts 사용
2. Proxy 패턴 적용 (UUPS 또는 Transparent Proxy)
3. 초기화 함수로 생성자 대체

## 라이선스

MIT License

Copyright (c) 2025 Blockchain Global Co., Ltd.

## 연락처

- 개발팀: dev@bcglobal.io
- 기술 지원: support@bcglobal.io
- 웹사이트: https://bcglobal.io

## 버전 이력

### v1.0.0 (2025-11-06)
- 초기 버전 릴리스
- Share-Based Rebasable 메커니즘 구현
- T+1 정산 기능 추가
- 락업 기능 구현
- 완전한 테스트 커버리지

---

**⚠️ 주의사항**: 이 스마트 컨트랙트는 프로덕션 환경에 배포하기 전에 반드시 전문가의 보안 감사를 받아야 합니다.
