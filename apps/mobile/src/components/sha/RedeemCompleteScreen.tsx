import { useNavigate } from "react-router-dom";
import type { ComponentType } from "react";
import ShaPoC06 from "../../imports/ShaPoC06환매완료개인";

type ShaPoC06Props = {
  onBack?: () => void;
  onConfirm?: () => void;
};

const ShaPoC06Component = ShaPoC06 as ComponentType<ShaPoC06Props>;

export default function RedeemCompleteScreen() {
  const navigate = useNavigate();

  return (
    <ShaPoC06Component
      onBack={() => navigate("/redeem")}
      onConfirm={() => navigate("/purchase")}
    />
  );
}


