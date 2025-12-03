import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@digital-wallet/ui";
import MobileStickyFooter from "../layout/MobileStickyFooter";
import MobilePageHeader from "../ui/MobilePageHeader";

export default function PurchaseScreen() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("1000000000");
  const [mode, setMode] = useState<"direct" | "max">("direct");

  const numericAmount = Number(amount || "0") || 0;
  const formattedAmount = numericAmount.toLocaleString("ko-KR");

  const handleComplete = () => {
    navigate("/purchase/complete", { state: { amount: numericAmount } });
  };

  const handleQuickAmount = (value: string) => {
    setAmount(value);
    setMode("direct");
  };

  return (
    <div className="flex min-h-full w-full flex-col bg-white">
      <MobilePageHeader title="매입" onBack={() => {}} />

      <main className="flex-1 px-5 pb-24 pt-4 space-y-6">
        {/* 상품 요약 */}
        <section className="space-y-3">
          <h1 className="text-[18px] font-bold leading-[26px] text-[#111111]">신한개인용MMF제2호</h1>
          <p className="text-[13px] text-[#777e8c]">기준가: 1,023.65원/좌 (2025.11.13)</p>

          <div className="mt-2 grid grid-cols-2 gap-3">
            <div className="rounded-[12px] bg-[#f4f6f9] px-4 py-3">
              <p className="text-[12px] text-[#77738c]">연 수익률</p>
              <p className="mt-1 text-[14px] font-bold text-[#333950]">2.60%</p>
            </div>
            <div className="rounded-[12px] bg-[#f4f6f9] px-4 py-3">
              <p className="text-[12px] text-[#77738c]">1개월 수익률</p>
              <p className="mt-1 text-[14px] font-bold text-[#333950]">0.19%</p>
            </div>
          </div>
        </section>

        {/* 결제 수단 */}
        <section className="space-y-3">
          <h2 className="text-[15px] font-bold text-[#111111]">결제 수단</h2>
          <button
            type="button"
            className="flex h-[42px] w-full items-center justify-between rounded-[6px] border border-[#eeeeee] bg-white px-3"
          >
            <span className="text-[14px] text-[#333950]">sKRW (신한 원화 스테이블코인)</span>
            <span className="inline-flex h-6 w-6 items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 10L12 15L17 10" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </section>

        {/* 매입 금액 */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-bold text-[#111111]">매입 금액</h2>
            <div className="relative flex h-[28px] w-[106px] items-center rounded-[6px] bg-[#e7eaef] text-[11px]">
              <button
                type="button"
                onClick={() => setMode("direct")}
                className={`z-10 flex-1 text-center ${mode === "direct" ? "text-[#333950]" : "text-[#999ea4]"}`}
              >
                직접입력
              </button>
              <button
                type="button"
                onClick={() => setMode("max")}
                className={`z-10 flex-1 text-center ${mode === "max" ? "text-[#333950]" : "text-[#999ea4]"}`}
              >
                최대한도
              </button>
              <div
                className="absolute top-[2px] h-[24px] w-[51px] rounded-[6px] bg-white shadow-sm transition-all"
                style={{ left: mode === "direct" ? 2 : 53 }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-md border-b border-[#f4f4f4] pb-1">
              <Input
                type="text"
                inputMode="numeric"
                value={amount ? formattedAmount : ""}
                onChange={(event) => {
                  const digitsOnly = event.target.value.replace(/[^0-9]/g, "");
                  setAmount(digitsOnly);
                }}
                className="border-none px-0 text-left text-[16px] font-medium text-[#111111] shadow-none focus-visible:ring-0"
              />
              <div className="ml-3 flex items-center gap-3">
                <span className="text-[14px] text-[#111111]">원</span>
                <ClearButton onClick={() => setAmount("")} />
              </div>
            </div>
            <p className="text-[12px] text-[#aaaeb3]">보유 sKRW: 1,250,000,000 원</p>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <button
              type="button"
              className="h-9 rounded-[6px] bg-[#f4f6f9] text-[12px] text-[#242424]"
              onClick={() => handleQuickAmount("100000000")}
            >
              1억
            </button>
            <button
              type="button"
              className="h-9 rounded-[6px] bg-[#f4f6f9] text-[12px] text-[#242424]"
              onClick={() => handleQuickAmount("500000000")}
            >
              5억
            </button>
            <button
              type="button"
              className="h-9 rounded-[6px] bg-[#f4f6f9] text-[12px] text-[#242424]"
              onClick={() => handleQuickAmount("1000000000")}
            >
              10억
            </button>
            <button
              type="button"
              className="h-9 rounded-[6px] bg-[#f4f6f9] text-[12px] text-[#242424]"
              onClick={() => {
                setMode("max");
              }}
            >
              최대
            </button>
          </div>
        </section>

        {/* 환전 / 발행 정보 */}
        <section className="space-y-6 rounded-[12px] bg-[#f9fafc] px-4 py-4">
          <div className="space-y-2">
            <h3 className="text-[15px] font-bold text-[#111111]">sKRW → KRW 환전 정보</h3>
            <div className="h-px bg-[#eeeeee]" />
            <InfoRow label="환전 금액" value={`${formattedAmount} 원`} />
            <InfoRow label="예상 처리 시간" value="약 3~5분" />
            <p className="mt-1 text-[11px] text-[#999999]">* PoC 환전 수수료 없음</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-[15px] font-bold text-[#111111]">토큰 발행 안내</h3>
            <div className="h-px bg-[#eeeeee]" />
            <InfoRow label="예상 발행 토큰" value={`${formattedAmount} sMMF`} />
            <InfoRow label="발행 예정일" value="2025.11.17 (익일)" />
          </div>
        </section>
      </main>

      <MobileStickyFooter>
        <Button
          variant="primary"
          size="lg"
          customColor="#2a3fec"
          className="h-[52px] w-full rounded-[8px] text-[16px] font-medium"
          onClick={handleComplete}
        >
          매입 신청
        </Button>
      </MobileStickyFooter>
    </div>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between text-[13px]">
      <span className="text-[#777e8c]">{label}</span>
      <span className="text-[14px] text-[#333950]">{value}</span>
    </div>
  );
}

function ClearButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="입력 값 지우기"
      className="flex h-5 w-5 items-center justify-center"
    >
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="8" fill="#CCCFD3" />
        <path
          d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}


