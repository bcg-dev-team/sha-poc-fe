import { useNavigate } from "react-router-dom";
import type { ComponentType } from "react";
import { Button } from "@digital-wallet/ui";
import ShaPoC02 from "../../imports/ShaPoC02매입완료";
import MobileStickyFooter from "../layout/MobileStickyFooter";

type ShaPoC02Props = {
  onBack?: () => void;
  onNavigateAssets?: () => void;
  hideInlineButton?: boolean;
};

const ShaPoC02Component = ShaPoC02 as ComponentType<ShaPoC02Props>;

export default function PurchaseCompleteScreen() {
  const navigate = useNavigate();

  const handleNavigateAssets = () => {
    navigate("/assets");
  };

  return (
    <div className="relative flex min-h-full w-full bg-white">
      <ShaPoC02Component
        onBack={() => navigate("/purchase")}
        onNavigateAssets={handleNavigateAssets}
        hideInlineButton
      />
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


