import { useNavigate } from "react-router-dom";
import { Button } from "@digital-wallet/ui";
import MobileStickyFooter from "../layout/MobileStickyFooter";
import MobilePageHeader from "../ui/MobilePageHeader";

export default function AssetsScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-full w-full flex-col bg-white">
      <MobilePageHeader title="내 자산" onBack={() => navigate("/purchase/complete")} />

      <main className="flex-1 px-5 pb-24 pt-6 space-y-6">
        {/* 총 자산 요약 */}
        <section className="space-y-3 rounded-[12px] bg-white px-4 py-4 shadow-[0_4px_18px_rgba(17,17,17,0.04)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="flex items-center gap-1 text-[14px] font-bold text-[#111111]">
                총 자산
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#2a3fec] text-[10px] text-white">
                  ?
                </span>
              </p>
              <div className="mt-1 flex items-center gap-2">
                <p className="text-[26px] font-bold tracking-[-0.13px] text-[#111111]">
                  1,002,252,813
                </p>
                <button
                  type="button"
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f4f6f9]"
                  aria-label="총 자산 새로고침"
                >
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10a6 6 0 0 1 9.5-4.5M14 4v3.5H10.5"
                      stroke="#999EA4"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 10a6 6 0 0 1-9.5 4.5M6 16v-3.5H9.5"
                      stroke="#999EA4"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[14px] text-[#fa2d42]">
            <TriangleUpIcon />
            <span>2,252,813원 (+0.23%)</span>
          </div>
          <p className="text-[12px] text-[#999ea4]">2025.11.16 15:30 기준</p>
        </section>

        {/* MMF 보유 정보 */}
        <section className="space-y-4 rounded-[12px] border border-[#ebedf5] bg-white px-4 py-4 shadow-sm">
          <h2 className="text-[18px] font-bold text-[#111111]">신한개인용MMF제2호</h2>

          <div className="space-y-3">
            <InfoRow label="보유 수량" value="1,002,252,813 sMMF" valueClassName="text-[#3e4ff9]" />
            <InfoRow label="평가 금액" value="1,002,252,813 원" />
            <InfoRow label="매입 원금" value="1,000,000,000 원" />
            <div className="h-px bg-[#eeeeee]" />
            <InfoRow label="평가 손익" value="+2,252,813 원" valueClassName="text-[#ff3b30]" />
            <InfoRow label="수익률" value="+0.23%" valueClassName="text-[#ff3b30]" />
            <InfoRow label="보유 기간" value="7일 (2025.11.10부터)" />
          </div>
        </section>

        {/* 최근 7일 수익 내역 */}
        <section className="space-y-3 rounded-[12px] border border-[#ebedf5] bg-white px-4 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-bold text-[#111111]">최근 7일 수익 내역</h2>
            <button type="button" className="flex items-center gap-1 text-[14px] text-[#777e8c]">
              전체보기
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M10 7L15 12L10 17" stroke="#777E8C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="space-y-2 text-[13px]">
            <HistoryRow date="2025.11.16" value="+501,251 원 (+0.05%)" />
            <HistoryRow date="2025.11.15" value="+501,001 원 (+0.05%)" />
            <HistoryRow date="2025.11.14" value="+500,750 원 (+0.05%)" />
            <HistoryRow date="2025.11.13" value="+500,500 원 (+0.05%)" />
          </div>

          <button
            type="button"
            className="pt-1 w-full text-center text-[12px] text-[#777e8c] underline"
          >
            더 보기
          </button>
        </section>
      </main>

      <MobileStickyFooter>
        <div className="flex gap-3">
          <Button
            variant="secondary"
            size="lg"
            className="h-[52px] flex-1 rounded-[8px] bg-[#f4f6f9] text-[16px] font-medium text-[#333950]"
            onClick={() => navigate("/")}
          >
            추가 매입
          </Button>
          <Button
            variant="primary"
            size="lg"
            customColor="#2a3fec"
            className="h-[52px] flex-1 rounded-[8px] text-[16px] font-medium"
            onClick={() => navigate("/redeem")}
          >
            환매
          </Button>
        </div>
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

interface HistoryRowProps {
  date: string;
  value: string;
}

function HistoryRow({ date, value }: HistoryRowProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[#777e8c]">{date}</span>
      <span className="text-[#ff3b30]">{value}</span>
    </div>
  );
}

function TriangleUpIcon() {
  return (
    <svg className="h-2.5 w-2.5" viewBox="0 0 10 10" fill="none">
      <path d="M5 2L9 8H1L5 2Z" fill="#FA2D42" />
    </svg>
  );
}
