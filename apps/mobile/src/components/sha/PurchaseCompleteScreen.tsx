import { useNavigate } from "react-router-dom";
import type { ComponentType } from "react";
import ShaPoC02 from "../../imports/ShaPoC02매입완료";

type ShaPoC02Props = {
  onBack?: () => void;
  onNavigateAssets?: () => void;
};

const ShaPoC02Component = ShaPoC02 as ComponentType<ShaPoC02Props>;

export default function PurchaseCompleteScreen() {
  const navigate = useNavigate();

  return (
    <ShaPoC02Component
      onBack={() => navigate("/purchase")}
      onNavigateAssets={() => navigate("/assets")}
    />
  );
}


