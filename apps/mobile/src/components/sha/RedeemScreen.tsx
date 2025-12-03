import { useNavigate } from "react-router-dom";
import type { ComponentType } from "react";
import { Button } from "@digital-wallet/ui";
import ShaPoC04 from "../../imports/ShaPoC04환매신청개인";
import MobileStickyFooter from "../layout/MobileStickyFooter";

type ShaPoC04Props = {
  onBack?: () => void;
  onRedeemComplete?: () => void;
  hideInlineButton?: boolean;
};

const ShaPoC04Component = ShaPoC04 as ComponentType<ShaPoC04Props>;

export default function RedeemScreen() {
  const navigate = useNavigate();

  const handleRedeemComplete = () => {
    navigate("/redeem/complete");
  };

  return (
    <div className="relative flex min-h-full w-full bg-white">
      <ShaPoC04Component
        onBack={() => navigate("/assets")}
        onRedeemComplete={handleRedeemComplete}
        hideInlineButton
      />
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


