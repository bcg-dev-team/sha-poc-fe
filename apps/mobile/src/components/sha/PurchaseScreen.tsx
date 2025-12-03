import { useNavigate } from "react-router-dom";
import type { ComponentType } from "react";
import ShaPoC01 from "../../imports/ShaPoC01매입신청";

type ShaPoC01Props = {
  onComplete?: () => void;
};

const ShaPoC01Component = ShaPoC01 as ComponentType<ShaPoC01Props>;

export default function PurchaseScreen() {
  const navigate = useNavigate();

  return <ShaPoC01Component onComplete={() => navigate("/purchase/complete")} />;
}


