## SHA PoC 모바일 화면 마이그레이션 가이드

SHA PoC 같은 Figma 기반 모바일 화면을 `apps/mobile`에 옮길 때 일관되게 사용할 수 있는 패턴을 정리합니다.

### 1. 기본 구조 설계

- **레이아웃 공통 패턴**
  - `App.tsx`에서 모든 화면을 `MobileViewport` 안에 렌더링
  - 좌측에는 `ScreenSummaryPanel`(Quick Access), 우측에는 `MobileViewport` 사용
  - 각 화면 컴포넌트는 아래 구조를 기본으로 합니다:
    - `div.flex.min-h-full.w-full.flex-col.bg-white`
    - 상단: `MobilePageHeader` (sticky 헤더)
    - 본문: `main.flex-1 ...` (스크롤 영역)
    - 하단: `MobileStickyFooter` (CTA 영역)

```tsx
// 예시: 공통 화면 스캐폴딩
export default function ExampleScreen() {
  return (
    <div className="flex min-h-full w-full flex-col bg-white">
      <MobilePageHeader title="제목" onBack={() => { /* 뒤로가기 로직 */ }} />

      <main className="flex-1 px-5 pb-24 pt-6 space-y-6">
        {/* 섹션들 */}
      </main>

      <MobileStickyFooter>
        {/* CTA 버튼 */}
      </MobileStickyFooter>
    </div>
  );
}
```

- **헤더 (`MobilePageHeader`)**
  - 이미 sticky 처리가 되어 있으므로, 별도 포지셔닝은 필요 없습니다.
  - `onBack` 콜백만 적절히 연결하면 됩니다.

- **푸터 (`MobileStickyFooter`)**
  - 하단 CTA(파란 버튼 등)를 뷰포트 하단에 고정하고, 본문 끝에 placeholder로 동일 높이를 확보합니다.
  - Quick Access 플로우가 있는 경우, CTA는 보통 **다음 단계 라우트**로 `navigate` 시킵니다.

### 2. Figma/샘플 코드 활용 방식

#### 2-1. 원본 샘플 코드 위치

- Figma → React Export된 코드는 다음 경로에 있습니다.
  - `sha-make-mobile/src/imports/ShaPoC0X*.tsx`
- 현재 레포에서는 재사용/참고용으로 그대로 복사되어 있습니다.
  - `apps/mobile/src/imports/ShaPoC01매입신청.tsx`
  - `apps/mobile/src/imports/ShaPoC02매입완료.tsx`
  - `apps/mobile/src/imports/ShaPoC03보유자산.tsx`
  - `apps/mobile/src/imports/ShaPoC04환매신청개인.tsx`
  - `apps/mobile/src/imports/ShaPoC06환매완료개인.tsx`

> **원칙**: `imports/ShaPoC*` 파일은 _직접 렌더링하지 않고_, 레이아웃/텍스트/간격을 참고하는 **디자인 소스**로만 사용합니다.

#### 2-2. 신규 화면 컴포넌트 위치

- 실제 라우트에 사용되는 코드는 다음 위치에 작성합니다.
  - `apps/mobile/src/components/sha/PurchaseScreen.tsx`
  - `apps/mobile/src/components/sha/PurchaseCompleteScreen.tsx`
  - `apps/mobile/src/components/sha/AssetsScreen.tsx`
  - `apps/mobile/src/components/sha/RedeemScreen.tsx`
  - `apps/mobile/src/components/sha/RedeemCompleteScreen.tsx`

### 3. 마이그레이션 단계별 패턴

#### 3-1. 화면 분석

1. `imports/ShaPoC*.tsx` 원본 파일에서 **크게 3~5개의 섹션**으로 나눌 수 있는 구조를 찾습니다.
   - 예: 상단 요약 카드 / 상세 정보 / 리스트 / 주석/가이드 / 하단 CTA
2. 각 섹션에 들어가는 텍스트, 색상, 여백, 아이콘을 정리합니다.
3. 비즈니스 의미 단위로 이름을 붙입니다.
   - 예: `TotalAssetSummarySection`, `HoldingDetailSection`, `RecentProfitListSection` 등

#### 3-2. 구조 재구성

- 원본의 `Frame*`, `Text*` 함수들을 그대로 옮기지 말고, 의미 단위로 새 컴포넌트를 만듭니다.

```tsx
// 예시: 의미 단위 컴포넌트
interface InfoRowProps {
  label: string;
  value: string;
  valueClassName?: string;
}

function InfoRow({ label, value, valueClassName }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between text-[13px]">
      <span className="text-[#777e8c]">{label}</span>
      <span className={`text-[14px] ${valueClassName ?? "text-[#333950]"}`}>{value}</span>
    </div>
  );
}
```

- 섹션은 Tailwind 유틸리티를 사용해 구성합니다.
  - 카드: `rounded-[12px] bg-white px-4 py-4 shadow-sm`
  - 구분선: `h-px bg-[#eeeeee]`
  - 제목: `text-[15px] font-bold text-[#111111]`

#### 3-3. 동적 값 처리

- 금액, 토큰 수량 등은 **숫자 상태**와 **표시용 문자열**을 분리합니다.

```tsx
const [amount, setAmount] = useState("1000000000");
const numericAmount = Number(amount || "0") || 0;
const formattedAmount = numericAmount.toLocaleString("ko-KR");
```

- 화면 간 값 전달은 `react-router-dom`의 `navigate` state를 사용합니다.

```tsx
// A 화면
navigate("/purchase/complete", { state: { amount: numericAmount } });

// B 화면
const location = useLocation();
const state = location.state as { amount?: number } | null;
const amount = typeof state?.amount === "number" ? state.amount : 1_000_000_000;
```

#### 3-4. UI 컴포넌트 사용

- 가능한 한 **기본 HTML 대신 `@digital-wallet/ui` 컴포넌트**를 사용합니다.
  - 버튼: `Button`
  - 인풋: `Input`
  - 라벨/토글/모달 등: Radix 기반 컴포넌트 활용

```tsx
<Button
  variant="primary"
  size="lg"
  customColor="#2a3fec"
  className="h-[52px] w-full rounded-[8px] text-[16px] font-medium"
>
  매입 신청
</Button>
```

### 4. 화면별 체크 포인트

#### 4-1. 매입 신청 (PurchaseScreen)

- 헤더: `title="매입"`, 뒤로가기 동작은 PoC 특성에 맞게 결정 (`onBack={() => {}}` 혹은 `navigate(-1)`).
- 금액 입력:
  - 입력은 숫자만 허용 (`inputMode="numeric"`, `replace(/[^0-9]/g, "")`)
  - 좌측 정렬 + `1,000,000,000` 형태 콤마 포맷
  - 지우기 버튼은 X 아이콘 등으로 표시
- 하단 정보:
  - `환전 금액`, `예상 발행 토큰`은 입력값 기반으로 계산
  - 고정 텍스트 (예상 처리 시간, 발행 예정일 등)는 원본과 동일하게 유지

#### 4-2. 매입 완료 (PurchaseCompleteScreen)

- 이전 화면에서 넘겨준 `amount`로:
  - 매입 금액, 발행 예정 토큰을 표시
  - 기본값(직접 진입 시)은 1,000,000,000 사용
- 블록체인 정보:
  - 별도 섹션으로 분리, 긴 주소는 `break-all` 처리

#### 4-3. 보유 자산 요약 (AssetsScreen)

- 상단 총 자산 카드:
  - `총 자산` + `?` 배지, 총 자산 금액, 리프레시 아이콘(원본의 `Refresh` 아이콘과 유사한 회색 회전 화살표)
  - 총 자산 금액(`26px`, bold, `#111111`), 일일 증감(빨간색 `#FA2D42`), 기준 시점 텍스트(`12px`, `#999ea4`)
  - 일일 증감 텍스트 왼쪽에는 빨간 삼각형 아이콘(원본 `IcoTrPriceUp`)을 `10x10` 정도 크기로 배치
- 상품 상세 카드:
  - 보유 수량(`text-[#3e4ff9]`), 평가 금액, 매입 원금, 평가 손익, 수익률, 보유 기간
  - 원본과 동일한 순서/색상(수익/손실 색상 강조)
- 최근 7일 수익 내역:
  - 제목 + `전체보기` 텍스트 + 리스트 + `더 보기` 링크

#### 4-4. 환매 신청 (RedeemScreen)

- 상단 카드:
  - `보유 sMMF` + 수량 + 평가 금액/수익 텍스트
- 입력 영역:
  - `환매 수량 (sMMF)` + `직접입력 / 최대한도` 토글
  - 입력값 좌측 정렬, 콤마 포맷 (매입 신청 화면의 패턴과 동일)
  - 지우기 버튼은 원본 `IcoInputDel`과 유사한 원형 X 아이콘으로 처리
  - `1억/5억/10억/최대` 버튼
- 세금/환매 정보:
  - 환매 수량에 비례해 환매 금액/매입 원금/과세 대상 수익/세금/실수령 예상액(세후)이 동적으로 계산되도록 구현
  - 예: 보유 수량 전체 환매 시 원본 숫자(1,002,252,813, 1,000,000,000, 2,252,813, 15.4% 세율 등)와 일치하는 값을 기준으로 비율 계산

#### 4-5. 환매 완료 (RedeemCompleteScreen)

- 완료 메시지 + 거래 정보
- 환매/세금/실 수령액 정보
- 입금 정보 + 블록체인 정보(주소는 `break-all` 처리)

### 5. Quick Access & 라우트 플로우

- `ScreenSummaryPanel`의 순서와 라우터 플로우는 항상 맞춰야 합니다.
  - `/purchase` → `/purchase/complete` → `/assets` → `/redeem` → `/redeem/complete`
- Sticky Footer 파란 버튼은 **다음 단계로 이동**해야 합니다.

```tsx
// 예: 매입 신청 화면
const handleComplete = () => {
  navigate("/purchase/complete", { state: { amount: numericAmount } });
};

<MobileStickyFooter>
  <Button onClick={handleComplete}>매입 신청</Button>
</MobileStickyFooter>
```

### 6. 구현 순서 요약 (반복 패턴)

1. `imports/ShaPoC*.tsx`에서 레이아웃/텍스트/섹션 구조를 분석한다.
2. `components/sha/*Screen.tsx`에 공통 스캐폴딩(헤더/본문/푸터)을 만든다.
3. 섹션별로 의미 있는 소단위 컴포넌트(InfoRow, HistoryRow 등)를 정의한다.
4. 가능한 모든 버튼/인풋은 `@digital-wallet/ui` 컴포넌트로 치환한다.
5. 동적 값(금액/토큰 수량 등)은 `number + toLocaleString` 패턴으로 처리하고, 라우트 간에는 `navigate`의 state로 넘긴다.
6. Quick Access에 경로/레이블을 추가하고, Sticky Footer CTA와 동기화한다.
7. 빌드 (`pnpm --filter @template/mobile build`)로 검증한다.


