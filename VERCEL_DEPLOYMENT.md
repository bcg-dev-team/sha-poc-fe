# Vercel 배포 가이드

이 모노레포의 각 앱(mobile, bo, fm)을 Vercel에 개별적으로 배포하는 방법입니다.

## 사전 준비

1. GitHub 저장소가 public이거나 Vercel에 접근 권한이 있어야 합니다.
2. Vercel 계정이 필요합니다: https://vercel.com

## 배포 방법

### 방법 1: Vercel 대시보드 사용 (권장)

각 앱을 개별 프로젝트로 배포합니다.

#### 1. Mobile 앱 배포

1. Vercel 대시보드에서 "Add New Project" 클릭
2. GitHub 저장소 `bcg-ygpark/sha-poc` 선택
3. 프로젝트 설정:
   - **Project Name**: `sha-poc-mobile` (또는 원하는 이름)
   - **Root Directory**: `apps/mobile`
   - **Framework Preset**: `Vite`
   - **Build Command**: `pnpm --filter @template/mobile build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`
4. "Deploy" 클릭

#### 2. BO 앱 배포

1. Vercel 대시보드에서 "Add New Project" 클릭
2. GitHub 저장소 `bcg-ygpark/sha-poc` 선택
3. 프로젝트 설정:
   - **Project Name**: `sha-poc-bo` (또는 원하는 이름)
   - **Root Directory**: `apps/bo`
   - **Framework Preset**: `Vite`
   - **Build Command**: `pnpm --filter @template/bo build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`
4. "Deploy" 클릭

#### 3. FM 앱 배포

1. Vercel 대시보드에서 "Add New Project" 클릭
2. GitHub 저장소 `bcg-ygpark/sha-poc` 선택
3. 프로젝트 설정:
   - **Project Name**: `sha-poc-fm` (또는 원하는 이름)
   - **Root Directory**: `apps/fm`
   - **Framework Preset**: `Vite`
   - **Build Command**: `pnpm --filter @template/fm build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`
4. "Deploy" 클릭

### 방법 2: Vercel CLI 사용

```bash
# Vercel CLI 설치 (처음 한 번만)
npm i -g vercel

# 각 앱 디렉토리에서 배포
cd apps/bo
vercel --prod

cd ../fm
vercel --prod

cd ../mobile
vercel --prod
```

## 환경 변수 설정

필요한 경우 Vercel 대시보드에서 각 프로젝트의 Settings > Environment Variables에서 환경 변수를 설정할 수 있습니다.

## 자동 배포

Git 저장소와 연결하면:
- `main` 브랜치에 push 시 자동으로 Production 배포
- Pull Request 생성 시 Preview 배포

## 배포 URL

배포 완료 후 각 앱의 URL은 다음과 같이 생성됩니다:
- Mobile: `https://sha-poc-mobile.vercel.app`
- BO: `https://sha-poc-bo.vercel.app`
- FM: `https://sha-poc-fm.vercel.app`

(프로젝트 이름에 따라 URL이 달라질 수 있습니다)

## 문제 해결

### 빌드 실패 시

1. **의존성 문제**: `pnpm install`이 루트에서 실행되는지 확인
2. **경로 문제**: Root Directory가 정확히 `apps/mobile`, `apps/bo`, `apps/fm`인지 확인
3. **빌드 명령어**: `--filter` 옵션이 올바른지 확인

### 저장소를 찾을 수 없는 경우

1. Vercel 대시보드에서 GitHub 연동 확인
2. 저장소가 private인 경우 Vercel에 권한 부여 필요
3. 저장소 이름이 정확한지 확인: `bcg-ygpark/sha-poc`

