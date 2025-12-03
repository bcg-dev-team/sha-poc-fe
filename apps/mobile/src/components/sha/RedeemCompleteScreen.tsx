import { useNavigate } from "react-router-dom";
import type { ComponentType } from "react";
import { Button } from "@digital-wallet/ui";
import ShaPoC06 from "../../imports/ShaPoC06환매완료개인";
import MobileStickyFooter from "../layout/MobileStickyFooter";

type ShaPoC06Props = {
  onBack?: () => void;
  onConfirm?: () => void;
  hideInlineButton?: boolean;
};

const ShaPoC06Component = ShaPoC06 as ComponentType<ShaPoC06Props>;

export default function RedeemCompleteScreen() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/purchase");
  };

  return (
    <div className="relative flex min-h-full w-full bg-white">
      <ShaPoC06Component
        onBack={() => navigate("/redeem")}
        onConfirm={handleConfirm}
        hideInlineButton
      />
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


