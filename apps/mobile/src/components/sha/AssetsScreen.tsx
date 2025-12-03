import { useNavigate } from "react-router-dom";
import type { ComponentType } from "react";
import ShaPoC03 from "../../imports/ShaPoC03보유자산";

type ShaPoC03Props = {
  onBack?: () => void;
  onNavigateRedeem?: () => void;
};

const ShaPoC03Component = ShaPoC03 as ComponentType<ShaPoC03Props>;

export default function AssetsScreen() {
  const navigate = useNavigate();

  return (
    <ShaPoC03Component
      onBack={() => navigate("/purchase/complete")}
      onNavigateRedeem={() => navigate("/redeem")}
    />
  );
}


