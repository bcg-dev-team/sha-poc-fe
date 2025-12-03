import { BrowserRouter, Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileViewport from "./components/layout/MobileViewport";
import { useMobileViewportContext } from "./components/layout/MobileViewportContext";
import { QuickAccessToggle } from "./components/devtools/MobileViewportToggle";
import { ScreenSummaryPanel } from "./components/ScreenSummaryPanel";

import PurchaseScreen from "./components/sha/PurchaseScreen";
import PurchaseCompleteScreen from "./components/sha/PurchaseCompleteScreen";
import AssetsScreen from "./components/sha/AssetsScreen";
import RedeemScreen from "./components/sha/RedeemScreen";
import RedeemCompleteScreen from "./components/sha/RedeemCompleteScreen";
function ScrollToTop() {
  const { pathname } = useLocation();
  const viewportContext = useMobileViewportContext();

  useEffect(() => {
    // window 스크롤 초기화
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // MobileViewport 내부 스크롤 초기화
    if (viewportContext?.contentRef?.current) {
      viewportContext.contentRef.current.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, viewportContext]);

  return null;
}

function WorkspaceLayout() {
  const [isQuickAccessVisible, setIsQuickAccessVisible] = useState(true);

  // localStorage에 설정 저장 (페이지 새로고침 시 유지)
  useEffect(() => {
    const saved = localStorage.getItem("quickAccessVisible");
    if (saved !== null) {
      setIsQuickAccessVisible(saved === "true");
    }
  }, []);

  const toggleQuickAccess = () => {
    const newValue = !isQuickAccessVisible;
    setIsQuickAccessVisible(newValue);
    localStorage.setItem("quickAccessVisible", String(newValue));
  };

  return (
    <div className="flex min-h-screen bg-[#eef1f6]">
      {isQuickAccessVisible && <ScreenSummaryPanel />}
      <main className="flex flex-1 items-center justify-center">
        <MobileViewport>
          <ScrollToTop />
          <Outlet />
        </MobileViewport>
      </main>
      <QuickAccessToggle isVisible={isQuickAccessVisible} onToggle={toggleQuickAccess} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WorkspaceLayout />}>
          <Route path="/" element={<Navigate to="/purchase" replace />} />
          <Route path="/purchase" element={<PurchaseScreen />} />
          <Route path="/purchase/complete" element={<PurchaseCompleteScreen />} />
          <Route path="/assets" element={<AssetsScreen />} />
          <Route path="/redeem" element={<RedeemScreen />} />
          <Route path="/redeem/complete" element={<RedeemCompleteScreen />} />
          <Route path="*" element={<Navigate to="/purchase" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
