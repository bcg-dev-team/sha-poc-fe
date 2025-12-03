import { useNavigate } from "react-router-dom";
import type { ComponentType } from "react";
import { Button } from "@digital-wallet/ui";
import ShaPoC01 from "../../imports/ShaPoC01매입신청";
import MobileStickyFooter from "../layout/MobileStickyFooter";

type ShaPoC01Props = {
  onComplete?: () => void;
  hideInlineButton?: boolean;
};

const ShaPoC01Component = ShaPoC01 as ComponentType<ShaPoC01Props>;

export default function PurchaseScreen() {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/purchase-complete");
  };

  return (
    <div className="relative flex min-h-full w-full bg-white">
      <ShaPoC01Component onComplete={handleComplete} hideInlineButton />
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


