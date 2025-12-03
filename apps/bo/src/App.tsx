import { useState } from "react";
import { Button } from "@digital-wallet/ui";
import Subscription from "./pages/Subscription";
import Redemption from "./pages/Redemption";
import Monitoring from "./pages/Monitoring";
import svgPaths from "./imports/svg-o3ey7j7i6q";

type Page = "subscription" | "redemption" | "monitoring";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("subscription");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-[64px] h-[calc(100vh-64px)] w-[336px] bg-[#1e2939] p-[24px]">
        <div className="space-y-[8px]">
          <button
            onClick={() => setCurrentPage("subscription")}
            className={`flex h-[48px] w-full items-center gap-[12px] rounded-[10px] px-[16px] transition-colors ${
              currentPage === "subscription"
                ? "bg-[#313654] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
                : "hover:bg-[#313654]"
            }`}
          >
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path
                d={svgPaths.p140c1100}
                stroke={currentPage === "subscription" ? "white" : "#D1D5DC"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.66667"
              />
              <path
                d="M15 14.1667V7.5"
                stroke={currentPage === "subscription" ? "white" : "#D1D5DC"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.66667"
              />
              <path
                d="M10.8333 14.1667V4.16667"
                stroke={currentPage === "subscription" ? "white" : "#D1D5DC"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.66667"
              />
              <path
                d="M6.66667 14.1667V11.6667"
                stroke={currentPage === "subscription" ? "white" : "#D1D5DC"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.66667"
              />
            </svg>
            <span className={currentPage === "subscription" ? "text-white" : "text-[#d1d5dc]"}>청약 관리</span>
          </button>

          <button
            onClick={() => setCurrentPage("redemption")}
            className={`flex h-[48px] w-full items-center gap-[12px] rounded-[10px] px-[16px] transition-colors ${
              currentPage === "redemption"
                ? "bg-[#313654] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
                : "hover:bg-[#313654]"
            }`}
          >
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path
                d={svgPaths.p3e8f800}
                stroke={currentPage === "redemption" ? "white" : "#D1D5DC"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.66667"
              />
              <path
                d={svgPaths.p11d57a00}
                stroke={currentPage === "redemption" ? "white" : "#D1D5DC"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.66667"
              />
            </svg>
            <span className={currentPage === "redemption" ? "text-white" : "text-[#d1d5dc]"}>환매 관리</span>
          </button>

          <button
            onClick={() => setCurrentPage("monitoring")}
            className={`flex h-[48px] w-full items-center gap-[12px] rounded-[10px] px-[16px] transition-colors ${
              currentPage === "monitoring"
                ? "bg-[#313654] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
                : "hover:bg-[#313654]"
            }`}
          >
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <clipPath id="clip0">
                <rect fill="white" height="20" width="20" />
              </clipPath>
              <g clipPath="url(#clip0)">
                <path
                  d={svgPaths.p363df2c0}
                  stroke={currentPage === "monitoring" ? "white" : "#D1D5DC"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.66667"
                />
              </g>
            </svg>
            <span className={currentPage === "monitoring" ? "text-white" : "text-[#d1d5dc]"}>실시간 모니터링</span>
          </button>

          <button className="flex h-[48px] w-full items-center gap-[12px] rounded-[10px] px-[16px] transition-colors hover:bg-[#313654]">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p25397b80} stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p166b7100} stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p2241fff0} stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p2c4f400} stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            <span className="text-[#d1d5dc]">고객 관리</span>
          </button>

          <button className="flex h-[48px] w-full items-center gap-[12px] rounded-[10px] px-[16px] transition-colors hover:bg-[#313654]">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.ped54800} stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <circle cx="10" cy="10" r="2.5" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            <span className="text-[#d1d5dc]">시스템 설정</span>
          </button>
        </div>
      </div>

      {/* Top Header */}
      <div className="fixed left-0 right-0 top-0 z-10 flex h-[64px] items-center justify-between bg-[#155dfc] px-[32px]">
        <div className="flex items-center gap-[12px]">
          <div className="flex size-[36px] items-center justify-center rounded-[8px] bg-white">
            <span className="text-[#155dfc]">신</span>
          </div>
          <p className="text-white">신한투자증권 백오피스</p>
        </div>
        <div className="flex items-center gap-[12px]">
          <Button
            variant="secondary"
            size="sm"
            className="rounded-[10px] bg-transparent px-[16px] py-[8px] text-white hover:bg-white/10 border-0"
          >
            관리자: 홍길동
          </Button>
          <Button
            variant="primary"
            size="sm"
            customColor="#ffffff"
            className="rounded-[10px] px-[20px] py-[8px] text-[#155dfc] hover:bg-gray-100"
          >
            로그아웃
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-[336px] mt-[64px] p-[32px] pb-[130px]">
        {currentPage === "subscription" && <Subscription />}
        {currentPage === "redemption" && <Redemption />}
        {currentPage === "monitoring" && <Monitoring />}
      </div>
    </div>
  );
}


