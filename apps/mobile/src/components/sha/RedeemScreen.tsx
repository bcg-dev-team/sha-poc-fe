import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@digital-wallet/ui";
import MobileStickyFooter from "../layout/MobileStickyFooter";
import MobilePageHeader from "../ui/MobilePageHeader";

export default function RedeemScreen() {
  const navigate = useNavigate();
  const HOLDING_AMOUNT = 1_002_252_813;
  const PRINCIPAL_TOTAL = 1_000_000_000;
  const TAX_RATE = 0.154;

  const [amount, setAmount] = useState("1002252813");
  const [mode, setMode] = useState<"direct" | "max">("direct");

  const numericAmountRaw = Number(amount || "0") || 0;
  const numericAmount =
    HOLDING_AMOUNT > 0 ? Math.min(Math.max(numericAmountRaw, 0), HOLDING_AMOUNT) : 0;
  const formattedAmount = numericAmount.toLocaleString("ko-KR");

  const ratio = HOLDING_AMOUNT > 0 ? numericAmount / HOLDING_AMOUNT : 0;
  const redeemAmount = numericAmount;
  const redeemPrincipal = Math.round(PRINCIPAL_TOTAL * ratio);
  const profit = Math.max(redeemAmount - redeemPrincipal, 0);
  const tax = Math.floor(profit * TAX_RATE);
  const netAmount = redeemAmount - tax;

  const handleRedeemComplete = () => {
    navigate("/redeem/complete");
  };

  const handleQuickAmount = (value: string) => {
    setAmount(value);
    setMode("direct");
  };

  return (
    <div className="flex min-h-full w-full flex-col bg-white">
      <MobilePageHeader title="sMMF 환매" onBack={() => navigate("/assets")} />

      <main className="flex-1 px-5 pb-24 pt-6 space-y-6">
        {/* 보유 sMMF 요약 */}
        <section className="space-y-3 rounded-[12px] bg-white px-4 py-4 shadow-[0_4px_18px_rgba(17,17,17,0.04)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="flex items-center gap-1 text-[14px] font-bold text-[#111111]">
                보유 sMMF
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#2a3fec] text-[10px] text-white">
                  ?
                </span>
              </p>
              <p className="mt-1 text-[24px] font-bold tracking-[-0.12px] text-[#111111]">
                1,002,252,813 <span className="text-[16px]">sMMF</span>
              </p>
            </div>
            <p className="text-right text-[13px] text-[#777e8c]">
              평가 금액 1,002,252,813 원
              <br />
              <span className="text-[#ff3b30]">(+2,252,813 원)</span>
            </p>
          </div>
        </section>

        {/* 환매 수량 */}
        <section className="space-y-4 rounded-[12px] border border-[#ebedf5] bg-white px-4 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-bold text-[#111111]">환매 수량 (sMMF)</h2>
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
                className="border-none px-0 text-left text-[16px] font-bold text-[#111111] shadow-none focus-visible:ring-0"
              />
              <div className="ml-3 flex items-center gap-3">
                <span className="text-[14px] text-[#111111]">sMMF</span>
                <ClearButton onClick={() => setAmount("")} />
              </div>
            </div>
            <p className="text-[12px] text-[#aaaeb3]">보유 sMMF: 1,002,252,813</p>
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

        {/* 세금 및 환매 정보 */}
        <section className="space-y-6 rounded-[12px] border border-[#ebedf5] bg-white px-4 py-4 shadow-sm">
          <div className="space-y-2">
            <InfoRow label="환매 금액" value={`${redeemAmount.toLocaleString("ko-KR")} 원`} />
            <InfoRow label="매입 원금" value={`${redeemPrincipal.toLocaleString("ko-KR")} 원`} />
            <InfoRow label="과세 대상 수익" value={`${profit.toLocaleString("ko-KR")} 원`} />
            <div className="h-px bg-[#eeeeee]" />
            <div className="flex items-start justify-between text-[13px]">
              <div className="space-y-0.5 text-[#777e8c]">
                <p>원천징수세(15.4%)</p>
                <p className="text-[12px]">(소득세 14% + 주민세 1.4%)</p>
              </div>
              <span className="text-[14px] text-[#333950]">
                -{tax.toLocaleString("ko-KR")} 원
              </span>
            </div>
            <InfoRow
              label="실수령 예상액(세후)"
              value={`${netAmount.toLocaleString("ko-KR")} 원`}
              valueClassName="text-[#2a3fec]"
            />
            <p className="text-[11px] text-[#999999]">* PoC 환전 수수료 없음</p>
          </div>
        </section>
      </main>

      <MobileStickyFooter>
        <Button
          variant="primary"
          size="lg"
          customColor="#2a3fec"
          className="h-[52px] w-full rounded-[8px] text-[16px] font-medium"
          onClick={handleRedeemComplete}
        >
          환매 신청
        </Button>
      </MobileStickyFooter>
    </div>
  );
}

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
