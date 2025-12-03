import { useNavigate } from "react-router-dom";
import { Button } from "@digital-wallet/ui";
import MobileStickyFooter from "../layout/MobileStickyFooter";
import MobilePageHeader from "../ui/MobilePageHeader";

export default function PurchaseCompleteScreen() {
  const navigate = useNavigate();

  const handleNavigateAssets = () => {
    navigate("/assets");
  };

  return (
    <div className="flex min-h-full w-full flex-col bg-white">
      <MobilePageHeader title="매입" onBack={() => navigate("/purchase")} />

      <main className="flex-1 px-5 pb-28 pt-8 space-y-8">
        {/* 완료 아이콘 + 메시지 */}
        <section className="flex flex-col items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a3fec]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#2A3FEC" />
              <path d="M7 12.5L10.2 15.5L17 8.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-[20px] font-bold leading-[28px] text-[#111111]">매입이 완료되었어요</p>
            <p className="mt-1 text-[14px] text-[#999ea4]">토큰은 익일 09:00에 발행돼요</p>
          </div>
        </section>

        {/* 거래 정보 */}
        <section className="space-y-6 rounded-[12px] border border-[#ebedf5] bg-white px-4 py-4 shadow-sm">
          <div className="space-y-2">
            <InfoRow label="거래 번호" value="SHA202511160001" />
            <InfoRow label="거래 일시" value="2025.11.16 14:20:33" />
            <InfoRow label="상품명" value="신한개인용MMF제2호" />
          </div>

          <div className="h-px bg-[#eeeeee]" />

          <div className="space-y-2">
            <InfoRow label="매입 금액" value="1,000,000,000 원" />
            <p className="text-[11px] text-[#999999]">* PoC 환전 수수료 없음</p>
          </div>
        </section>

        {/* 토큰 발행 안내 */}
        <section className="space-y-6 rounded-[12px] border border-[#ebedf5] bg-white px-4 py-4 shadow-sm">
          <h2 className="text-[14px] font-bold text-[#111111]">토큰 발행 안내</h2>
          <div className="space-y-2">
            <InfoRow label="발행 예정 토큰" value="1,000,000,000 sMMF" />
            <InfoRow label="발행 예정일" value="2025.11.17 (익일)" />
            <InfoRow label="발행 시간" value="오전 9:00 (예정)" />
            <p className="text-[11px] text-[#999999]">* NAV 업데이트와 동시 발행</p>
          </div>
        </section>
      </main>

      <MobileStickyFooter>
        <Button
          variant="primary"
          size="lg"
          customColor="#2a3fec"
          className="h-[52px] w-full rounded-[8px] text-[16px] font-medium"
          onClick={handleNavigateAssets}
        >
          보유 자산 확인
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


