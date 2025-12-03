import { useNavigate } from "react-router-dom";
import type { ComponentType } from "react";
import ShaPoC04 from "../../imports/ShaPoC04환매신청개인";

type ShaPoC04Props = {
  onBack?: () => void;
  onRedeemComplete?: () => void;
};

const ShaPoC04Component = ShaPoC04 as ComponentType<ShaPoC04Props>;

export default function RedeemScreen() {
  const navigate = useNavigate();

  return (
    <ShaPoC04Component
      onBack={() => navigate("/assets")}
      onRedeemComplete={() => navigate("/redeem/complete")}
    />
  );
}


