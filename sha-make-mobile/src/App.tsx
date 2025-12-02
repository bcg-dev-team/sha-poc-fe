import { useState } from "react";
import ShaPoC01 from "./imports/ShaPoC01매입신청";
import ShaPoC02 from "./imports/ShaPoC02매입완료";
import ShaPoC03 from "./imports/ShaPoC03보유자산";
import ShaPoC04 from "./imports/ShaPoC04환매신청개인";
import ShaPoC06 from "./imports/ShaPoC06환매완료개인";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'purchase' | 'complete' | 'assets' | 'redeem' | 'redeemComplete'>('purchase');

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#f6f6f9]">
      <div className="w-[360px] h-full max-h-[844px] bg-white shadow-xl overflow-auto relative">
        {currentScreen === 'purchase' ? (
          <ShaPoC01 onComplete={() => setCurrentScreen('complete')} />
        ) : currentScreen === 'complete' ? (
          <ShaPoC02 
            onBack={() => setCurrentScreen('purchase')} 
            onNavigateAssets={() => setCurrentScreen('assets')}
          />
        ) : currentScreen === 'assets' ? (
          <ShaPoC03 
            onBack={() => setCurrentScreen('complete')}
            onNavigateRedeem={() => setCurrentScreen('redeem')}
          />
        ) : currentScreen === 'redeem' ? (
          <ShaPoC04 
            onBack={() => setCurrentScreen('assets')}
            onRedeemComplete={() => setCurrentScreen('redeemComplete')}
          />
        ) : (
          <ShaPoC06 
            onBack={() => setCurrentScreen('redeem')}
            onConfirm={() => setCurrentScreen('purchase')}
          />
        )}
      </div>
    </div>
  );
}