# MMF Value Token 프로젝트 구조

```
mmf-value-token/
│
├── contracts/                          # 스마트 컨트랙트
│   ├── MMFValueToken.sol              # 메인 MMF 토큰 컨트랙트
│   └── MMFValueTokenDeployer.sol      # 배포 헬퍼 컨트랙트
│
├── test/                               # 테스트 파일
│   └── MMFValueToken.test.js          # 통합 테스트
│
├── scripts/                            # 배포 및 유틸리티 스크립트
│   └── deploy.js                      # 배포 스크립트
│
├── deployments/                        # 배포 정보 (자동 생성)
│   ├── localhost_<timestamp>.json
│   ├── sepolia_<timestamp>.json
│   └── pulse_<timestamp>.json
│
├── artifacts/                          # 컴파일 결과물 (자동 생성)
│   └── contracts/
│       └── MMFValueToken.sol/
│           ├── MMFValueToken.json
│           └── MMFValueToken.dbg.json
│
├── cache/                              # Hardhat 캐시 (자동 생성)
│
├── coverage/                           # 테스트 커버리지 (자동 생성)
│
├── node_modules/                       # npm 의존성
│
├── .env                                # 환경 변수 (보안 - .gitignore에 추가)
├── .env.example                        # 환경 변수 예시
├── .gitignore                          # Git 제외 파일
├── hardhat.config.js                   # Hardhat 설정
├── package.json                        # npm 패키지 설정
├── package-lock.json                   # npm 의존성 잠금
└── README.md                           # 프로젝트 문서
```

## 파일 설명

### 스마트 컨트랙트 (`contracts/`)

#### `MMFValueToken.sol`
- **역할**: 메인 MMF Value Token 컨트랙트
- **특징**:
  - Share-Based 잔액 관리
  - 자동 Rebase 기능
  - 락업 기능
  - T+1 정산
  - Role-based 접근 제어
- **크기**: ~800 라인

#### `MMFValueTokenDeployer.sol`
- **역할**: 배포 헬퍼 컨트랙트
- **특징**:
  - 간편한 배포 인터페이스
  - 기본 설정 제공
- **크기**: ~50 라인

### 테스트 (`test/`)

#### `MMFValueToken.test.js`
- **역할**: 통합 테스트
- **커버리지**:
  - 배포 및 초기화
  - 매입/환매
  - NAV 업데이트 및 Rebase
  - 토큰 전송
  - 권한 관리
  - 락업 기능
  - T+1 정산
  - 에러 케이스
- **테스트 개수**: 30+ 테스트

### 스크립트 (`scripts/`)

#### `deploy.js`
- **역할**: 프로덕션 배포 스크립트
- **기능**:
  - 네트워크 정보 확인
  - 배포 파라미터 검증
  - 컨트랙트 배포
  - 역할 설정 확인
  - 배포 정보 저장
  - 검증 명령어 출력

### 설정 파일

#### `hardhat.config.js`
- Solidity 버전: 0.8.20
- 최적화 활성화
- 네트워크 설정:
  - localhost
  - sepolia
  - goerli
  - mainnet
  - pulse (커스텀)
- Gas 리포터 설정
- Etherscan 검증 설정

#### `package.json`
- 프로젝트 메타데이터
- 의존성:
  - hardhat
  - @openzeppelin/contracts
  - ethers
  - chai
- npm 스크립트

#### `.env.example`
- 환경 변수 템플릿
- 설정 항목:
  - RPC URLs
  - Private Key
  - API Keys
  - 배포 파라미터

## 디렉토리별 용도

### `contracts/`
- Solidity 스마트 컨트랙트 소스 코드
- 버전 관리 필수

### `test/`
- JavaScript/TypeScript 테스트 파일
- 모든 기능 커버리지 목표
- 버전 관리 필수

### `scripts/`
- 배포 및 관리 스크립트
- 버전 관리 필수

### `deployments/`
- 배포 이력 및 정보
- 자동 생성
- 버전 관리 권장

### `artifacts/`
- 컴파일된 컨트랙트 ABI 및 바이트코드
- 자동 생성
- 버전 관리 불필요 (.gitignore)

### `cache/`
- Hardhat 빌드 캐시
- 자동 생성
- 버전 관리 불필요 (.gitignore)

### `coverage/`
- 테스트 커버리지 리포트
- 자동 생성
- 버전 관리 불필요 (.gitignore)

## 빌드 아티팩트

### 컴파일 후 생성되는 파일

```
artifacts/contracts/MMFValueToken.sol/
├── MMFValueToken.json              # ABI 및 바이트코드
└── MMFValueToken.dbg.json          # 디버그 정보
```

### ABI 구조
```json
{
  "contractName": "MMFValueToken",
  "abi": [...],                      // 함수 및 이벤트 정의
  "bytecode": "0x...",               // 배포용 바이트코드
  "deployedBytecode": "0x...",       # 배포 후 바이트코드
  "linkReferences": {},
  "deployedLinkReferences": {}
}
```

## 워크플로우

### 1. 개발 워크플로우
```bash
# 의존성 설치
npm install

# 컴파일
npm run compile

# 테스트
npm test

# 커버리지
npm run test:coverage

# Gas 리포트
npm run test:gas
```

### 2. 배포 워크플로우
```bash
# 로컬 노드 실행
npm run node

# 로컬 배포
npm run deploy:localhost

# 테스트넷 배포
npm run deploy:sepolia

# 프로덕션 배포
npm run deploy:pulse
```

### 3. 검증 워크플로우
```bash
# Etherscan 검증
npx hardhat verify --network sepolia <CONTRACT_ADDRESS> \
  "<ADMIN>" "<ASSET_MANAGER>" "<NAV_UPDATER>" 10000 2592000
```

## 버전 관리 (.gitignore)

```gitignore
# 의존성
node_modules/

# 환경 변수
.env

# 빌드 아티팩트
artifacts/
cache/
coverage/

# 로그
*.log

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

## 보안 주의사항

### 절대 커밋하지 말 것
- `.env` 파일 (Private Key 포함)
- `deployments/` 중 프로덕션 정보 (선택적)
- 테스트 계정 Private Key

### 반드시 보관할 것
- 배포된 컨트랙트 주소
- 배포 트랜잭션 해시
- Admin/Manager 계정 정보
- 백업 Private Key (안전한 곳에)

## 크기 최적화

### 컨트랙트 크기
```bash
# 컨트랙트 크기 확인
npm run size

# 최대 크기: 24KB (EIP-170)
# MMFValueToken: ~20KB (여유 있음)
```

### Gas 최적화
- Optimizer 활성화 (runs: 200)
- Share-Based로 O(1) Rebase
- 불필요한 storage 최소화
- 이벤트로 데이터 기록

## 문서 업데이트

프로젝트 변경 시 업데이트 필요:
- `README.md`: 주요 기능 변경
- `package.json`: 버전 업데이트
- `CHANGELOG.md`: 변경 이력 (권장)
- 테스트: 새 기능 커버리지

## 라이선스

MIT License - 상업적 사용 가능
