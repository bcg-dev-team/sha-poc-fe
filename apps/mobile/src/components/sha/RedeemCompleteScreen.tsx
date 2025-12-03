import { useNavigate } from "react-router-dom";
import { Button } from "@digital-wallet/ui";
import MobileStickyFooter from "../layout/MobileStickyFooter";
import MobilePageHeader from "../ui/MobilePageHeader";

export default function RedeemCompleteScreen() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/purchase");
  };

  return (
    <div className="flex min-h-full w-full flex-col bg-white">
      <MobilePageHeader title="sMMF 환매" onBack={() => navigate("/redeem")} />

      <main className="flex-1 px-5 pb-24 pt-6 space-y-6">
        {/* 완료 아이콘 + 메시지 */}
        <section className="flex flex-col items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a3fec]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#2A3FEC" />
              <path d="M7 12.5L10.2 15.5L17 8.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-[20px] font-bold leading-[28px] text-[#111111]">환매가 완료되었어요</p>
            <p className="mt-1 text-[14px] text-[#999ea4]">sKRW가 지갑으로 입금되었어요</p>
          </div>
        </section>

        {/* 거래 정보 */}
        <section className="space-y-6 rounded-[12px] border border-[#ebedf5] bg-white px-4 py-4 shadow-sm">
          <div className="space-y-2">
            <InfoRow label="거래 번호" value="SHA202511230042" />
            <InfoRow label="거래 일시" value="2025.11.23 16:15:33" />
            <InfoRow label="상품명" value="신한개인용MMF제2호" />
          </div>

          <div className="h-px bg-[#eeeeee]" />

          <div className="space-y-2">
            <InfoRow label="환매 토큰" value="1,002,252,813 sMMF" />
            <InfoRow label="환매 금액" value="1,002,252,813 원" />
            <InfoRow label="수익금" value="+2,252,813 원" />
            <InfoRow label="원천징수세(15.4%)" value="-346,933 원" />
            <InfoRow label="실 수령액" value="1,001,905,880 sKRW" valueClassName="text-[#2a3fec]" />
            <p className="text-[11px] text-[#999999]">* PoC 환전 수수료 없음</p>
          </div>
        </section>

        {/* 입금 정보 + 블록체인 정보 */}
        <section className="space-y-6 rounded-[12px] border border-[#ebedf5] bg-white px-4 py-4 shadow-sm">
          <h2 className="text-[14px] font-bold text-[#111111]">입금 정보</h2>
          <div className="space-y-2">
            <InfoRow label="입금 계좌" value="sKRW 지갑" />
            <InfoRow label="입금 완료" value="2025.11.23 16:15:33" />
          </div>

          <div className="h-px bg-[#eeeeee]" />

          <div className="space-y-3">
            <h3 className="text-[14px] font-bold text-[#111111]">블록체인 정보</h3>
            <div className="rounded-[8px] bg-[#f7f7f7] px-4 py-3 text-[12px] text-[#77738c] break-all">
              0x742d35Cc1234567890abcdef1234567890AbCdEf
            </div>
          </div>
        </section>
      </main>

      <MobileStickyFooter>
        <Button
          variant="primary"
          size="lg"
          customColor="#2a3fec"
          className="h-[52px] w-full rounded-[8px] text-[16px] font-medium"
          onClick={handleConfirm}
        >
          확인
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
