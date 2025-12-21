# MMF Value Token - PoC Monorepo

Share-Based Rebasable MMF Token for Pulse Blockchain - Proof of Concept

## 프로젝트 개요

BUIDL 스타일의 투자금 기준 방식 MMF(Money Market Fund) 토큰 스마트 컨트랙트와 관리 시스템을 위한 모노레포 프로젝트입니다. NAV(Net Asset Value) 변동 시 자동으로 사용자 잔액이 조정되는 Share-Based Rebasable 토큰을 구현하며, 백오피스, FM(Fund Management), 모바일 앱을 포함합니다.

### 핵심 개념

- **투자금 기준**: 투자한 원금(KRW) 기준으로 1:1 토큰 발행
- **Share-Based**: 각 사용자의 지분(Share)을 추적하여 효율적인 Rebase 구현
- **자동 Rebase**: NAV 변동 시 모든 사용자의 잔액이 자동으로 비례 조정
- **Gas 효율적**: O(1) 복잡도로 모든 사용자에게 동시 Rebase 적용
- **Pulse Blockchain**: 저렴한 Gas 비용과 빠른 트랜잭션

## 프로젝트 구조

```
.
├── apps/
│   ├── mobile/          # 모바일 사용자 앱 (@template/mobile)
│   ├── bo/              # 백오피스 관리 앱 (@template/bo)
│   │                    # - 청약(Subscription), 환매(Redemption), 모니터링
│   └── fm/              # Fund Management 앱 (@template/fm)
│                        # - NAV 업데이트, 토큰 발행 관리
├── packages/
│   ├── contracts/       # Hardhat 스마트 컨트랙트 (@digital-wallet/contracts)
│   │                    # - MMF Value Token (Share-Based Rebasable Token)
│   │                    # - T+1 정산, 락업 기능, Role-based 접근 제어
│   └── ui/              # 공유 UI 컴포넌트 라이브러리 (@digital-wallet/ui)
└── shared/              # 공유 유틸리티 및 설정
```

## MMF 토큰 주요 특징

### 1. Share-Based 잔액 관리

사용자 잔액 = (사용자 Share / 총 Share) × 총 발행량

- 1:1 투자금 기준으로 Share 발행
- NAV 변동 시 자동으로 잔액 조정

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

## 시스템 아키텍처

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

## 기술 스택

### Frontend

- **Framework**: React 18.3
- **Language**: TypeScript 5.7
- **Build Tool**: Vite 6.3
- **Styling**: TailwindCSS 3.4
- **UI Components**: Radix UI, shadcn/ui
- **Forms**: React Hook Form
- **Routing**: React Router DOM

### Blockchain

- **Network**: Pulse Blockchain
- **Library**: ethers.js 6.x
- **Smart Contracts**: Hardhat 2.x
- **Contract Library**: OpenZeppelin Contracts 5.x
- **Security**: ReentrancyGuard, AccessControl, Pausable

### Development Tools

- **Package Manager**: pnpm 8+
- **Linting**: ESLint 9 + TypeScript ESLint
- **Formatting**: Prettier
- **Testing**: Vitest 3.x (Frontend), Hardhat Test (Contracts)

## 시작하기

### 필수 요구사항

- Node.js >= 20.0.0
- pnpm >= 8.0.0

### 설치

```bash
# pnpm 설치 (없는 경우)
npm install -g pnpm

# 의존성 설치
pnpm install
```

### 개발 서버 실행

```bash
# 모바일 앱 (기본)
pnpm dev

# 특정 앱 실행
pnpm dev:mobile    # 모바일 사용자 앱
pnpm dev:bo        # 백오피스 (청약/환매/모니터링)
pnpm dev:fm        # Fund Management (NAV 업데이트)
```

개발 서버는 기본적으로 다음 포트에서 실행됩니다:

- Mobile: http://localhost:5173
- BO: http://localhost:5174
- FM: http://localhost:5175

### 빌드

```bash
# 모바일 앱 빌드 (기본)
pnpm build

# 특정 앱 빌드
pnpm build:mobile
pnpm build:bo
pnpm build:fm
```

## 스마트 컨트랙트 개발

### 컨트랙트 컴파일

```bash
pnpm --filter @digital-wallet/contracts compile
```

### 테스트 실행

```bash
# 기본 테스트 (30+ 테스트 케이스)
pnpm --filter @digital-wallet/contracts test

# 커버리지 포함
pnpm --filter @digital-wallet/contracts test:coverage

# 가스 리포트 포함
pnpm --filter @digital-wallet/contracts test:gas
```

### 네트워크 배포

```bash
# 로컬 네트워크
pnpm --filter @digital-wallet/contracts deploy:localhost

# Sepolia 테스트넷
pnpm --filter @digital-wallet/contracts deploy:sepolia

# Pulse 메인넷
pnpm --filter @digital-wallet/contracts deploy:pulse
```

### 주요 컨트랙트 함수

#### Asset Manager

```javascript
// 토큰 매입 (1:1 발행)
await mmfToken.purchaseWithDT(customerAddress, dtAmount);

// T+1 정산 처리
await mmfToken.processPendingPurchase(purchaseId);
```

#### NAV Updater

```javascript
// NAV 업데이트 및 자동 Rebase
await mmfToken.updateNAVAndRebase(10005); // 1.0005
```

#### 사용자

```javascript
// 잔액 조회
const balance = await mmfToken.balanceOf(userAddress);

// 환매
await mmfToken.redeemToDT(amount);
await mmfToken.redeemAll();

// 락업 확인
const remaining = await mmfToken.getLockupTimeRemaining(userAddress);
```

## 개발 가이드

### 코드 품질

```bash
# Lint 검사 및 자동 수정
pnpm lint

# Lint 검사만
pnpm lint:check

# 코드 포매팅
pnpm format

# 포매팅 검사만
pnpm format:check
```

### 패키지 의존성 관리

```bash
# 특정 워크스페이스에 패키지 추가
pnpm --filter @template/mobile add <package>
pnpm --filter @digital-wallet/contracts add <package>

# 루트에 공통 dev dependency 추가
pnpm add -Dw <package>
```

### 클린업

```bash
# 모든 워크스페이스의 빌드 결과 삭제
pnpm clean

# node_modules 포함 완전 클린업
pnpm clean:all
```

## 워크스페이스 패키지

### @template/mobile

모바일 사용자 앱. MMF 토큰 조회, 매입, 환매 등 사용자 기능을 제공합니다.

**주요 기능**:

- MMF 토큰 잔액 조회
- 투자 현황 및 수익률 확인
- 매입/환매 신청
- 거래 내역 조회

**주요 의존성**:

- Radix UI 컴포넌트
- ethers.js (블록체인 통합)
- Recharts (차트)

### @template/bo

백오피스 관리 앱. 증권사 및 운용사 관리자를 위한 시스템입니다.

**주요 기능**:

- **청약(Subscription)**: 고객 MMF 매입 신청 관리
- **환매(Redemption)**: 고객 환매 신청 처리
- **모니터링**: 시스템 상태, 거래 현황, NAV 이력

### @template/fm

Fund Management 앱. 자산운용사를 위한 NAV 관리 시스템입니다.

**주요 기능**:

- NAV 계산 및 업데이트
- 토큰 발행 관리
- T+1 정산 처리
- Rebase 실행 및 모니터링

### @digital-wallet/contracts

Hardhat 기반 MMF Value Token 스마트 컨트랙트 패키지.

**포함 내용**:

- **MMFValueToken.sol**: Share-Based Rebasable Token 메인 컨트랙트
- **테스트**: 30+ 테스트 케이스, 95%+ 커버리지
- **배포 스크립트**: Pulse, Sepolia, Mainnet 지원
- **문서**: README, QUICKSTART, PROJECT_STRUCTURE, SUMMARY

**핵심 보안 기능**:

- OpenZeppelin AccessControl
- ReentrancyGuard (재진입 공격 방지)
- Pausable (긴급 정지)
- 완전한 입력 검증

### @digital-wallet/ui

모든 앱에서 공유하는 UI 컴포넌트 라이브러리.

**특징**:

- TailwindCSS 기반 스타일링
- TypeScript 타입 지원
- 재사용 가능한 컴포넌트
- Radix UI 기반

## 환경 변수

### contracts 패키지 환경 변수

```env
# packages/contracts/.env
PRIVATE_KEY=your_private_key_here
ETHERSCAN_API_KEY=your_etherscan_api_key
PULSE_RPC_URL=https://rpc.pulsechain.com
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# 배포 파라미터
INITIAL_NAV=10000
LOCKUP_PERIOD=2592000
```

`.env.example` 파일을 `.env`로 복사하여 사용하세요.

## Gas 비용 예상

| 작업         | Gas 사용량 | Pulse (저렴) | Ethereum (30 gwei) |
| ------------ | ---------- | ------------ | ------------------ |
| 배포         | ~3,000,000 | < $1         | ~$180              |
| 매입         | ~150,000   | < $0.01      | ~$9                |
| 환매         | ~100,000   | < $0.01      | ~$6                |
| NAV 업데이트 | ~50,000    | < $0.01      | ~$3                |
| 전송         | ~65,000    | < $0.01      | ~$3.9              |

_Pulse 블록체인은 Ethereum 대비 매우 저렴한 Gas 비용_

## 보안

### 구현된 보안 기능

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

### 배포 전 체크리스트

- [ ] 전문 스마트 컨트랙트 감사 수행
- [ ] Slither, Mythril 등 정적 분석 도구 실행
- [ ] 테스트 커버리지 95% 이상 달성
- [ ] 테스트넷에서 최소 1주일 검증
- [ ] 긴급 대응 프로세스 수립
- [ ] 백업 및 복구 계획 수립

## 프로젝트 문서

상세한 문서는 다음 파일을 참고하세요:

- `packages/contracts/README.md` - 스마트 컨트랙트 상세 가이드
- `packages/contracts/QUICKSTART.md` - 빠른 시작 가이드
- `packages/contracts/PROJECT_STRUCTURE.md` - 프로젝트 구조
- `packages/contracts/SUMMARY.md` - 프로젝트 완성 요약

## 라이센스

MIT License
Copyright (c) 2025 Blockchain Global Co., Ltd.

## 주의사항

⚠️ **이 프로젝트는 PoC(Proof of Concept)용입니다.**

프로덕션 환경에 배포하기 전에:

1. 전문가의 보안 감사를 반드시 받으세요
2. 충분한 테스트넷 검증을 수행하세요
3. 법적/규제 검토를 완료하세요
4. 운영 매뉴얼 및 긴급 대응 프로세스를 준비하세요

---

**Share-Based Rebasable MMF Token** - Built with ❤️ by Blockchain Global
