import { useState } from "react";
import svgPaths from "../imports/svg-5z933dgoz9";
import { Button, Input } from "@digital-wallet/ui";

interface RedemptionData {
  id: string;
  tradeNumber: string;
  tradeTime: string;
  customerName: string;
  redemptionAmount: number;
  tokenAmount: number;
  status: "완료" | "대기";
}

const mockRedemptionData: RedemptionData[] = [
  { id: "1", tradeNumber: "SHA20251123008S", tradeTime: "16:28:41", customerName: "김자산", redemptionAmount: 1052282819, tokenAmount: 1001455403, status: "완료" },
  { id: "2", tradeNumber: "SHA20251123008A", tradeTime: "16:15:22", customerName: "이투자", redemptionAmount: 601126407, tokenAmount: 500955127, status: "대기" },
  { id: "3", tradeNumber: "SHA20251123008P", tradeTime: "16:02:15", customerName: "박씨(법인)", redemptionAmount: 2004505626, tokenAmount: 2004505626, status: "완료" },
  { id: "4", tradeNumber: "SHA20251123005Z", tradeTime: "15:48:33", customerName: "최부자", redemptionAmount: 1603379219, tokenAmount: 1502869797, status: "완료" },
  { id: "5", tradeNumber: "SHA20251123005I", tradeTime: "15:32:07", customerName: "정금융", redemptionAmount: 303678964, tokenAmount: 300571951, status: "대기" },
  { id: "6", tradeNumber: "SHA20251123005O", tradeTime: "15:18:55", customerName: "강승지(법인)", redemptionAmount: 802991351, tokenAmount: 802901251, status: "완료" },
  { id: "7", tradeNumber: "SHA20251123004W", tradeTime: "14:55:22", customerName: "오자산", redemptionAmount: 1263505126, tokenAmount: 1202344982, status: "완료" },
  { id: "8", tradeNumber: "SHA20251123004M", tradeTime: "14:32:18", customerName: "송금융", redemptionAmount: 600450283, tokenAmount: 600086421, status: "대기" },
];

export default function Redemption() {
  const [filter, setFilter] = useState<"전체" | "대기">("전체");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = mockRedemptionData.filter((item) => {
    const matchesFilter = filter === "전체" || item.status === filter;
    const matchesSearch =
      searchQuery === "" ||
      item.tradeNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.customerName.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  const waitingCount = mockRedemptionData.filter((item) => item.status === "대기").length;
  const completedCount = mockRedemptionData.filter((item) => item.status === "완료").length;

  return (
    <div>
      {/* Header */}
      <div className="mb-[16px]">
        <h1 className="text-[#101828] font-bold">환매 관리</h1>
      </div>

      {/* Product Info Card */}
      <div className="mb-[24px] rounded-[10px] border border-gray-200 bg-white px-[25px] py-[25px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <p className="text-[#4a5565] text-[20px] font-bold">신한개인용MMF제2호</p>
            <span className="text-[#99a1af]">|</span>
            <p className="text-[#4a5565]">2025.11.23 16:30 기준</p>
          </div>
          <div className="rounded-[10px] border border-[#bedbff] bg-blue-50 px-[17px] py-[10px]">
            <p className="text-[#155dfc]">● 실시간 연동중</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-[24px] grid grid-cols-3 gap-[24px]">
        <div className="rounded-[10px] border border-gray-200 bg-white px-[24px] py-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="mb-[16px] border-b border-gray-100 pb-[8px]">
            <p className="text-[#6a7282]">금일 환매 건수</p>
          </div>
          <div className="mb-[12px]">
            <span className="text-[#fc8815] text-[36px] font-bold">38</span>
            <span className="text-[#4a5565]"> 건</span>
          </div>
          <div className="inline-flex items-center gap-[8px] rounded-full bg-red-50 px-[12px] py-[4px]">
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d={svgPaths.p3155f180} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.pea6a680} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
            <span className="text-[#e7000b]">+5 건 (전일 대비)</span>
          </div>
        </div>

        <div className="rounded-[10px] border border-gray-200 bg-white px-[24px] py-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="mb-[16px] border-b border-gray-100 pb-[8px]">
            <p className="text-[#6a7282]">금일 환매 금액</p>
          </div>
          <div className="mb-[12px]">
            <span className="text-[#fc8815] text-[36px] font-bold">38,085,362,849</span>
            <span className="text-[#4a5565]"> 원</span>
          </div>
          <div className="inline-flex items-center gap-[8px] rounded-full bg-red-50 px-[12px] py-[4px]">
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d={svgPaths.p3155f180} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.pea6a680} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
            <span className="text-[#e7000b]">+6,200,000,000 원 (전일 대비)</span>
          </div>
        </div>

        <div className="rounded-[10px] border border-gray-200 bg-white px-[24px] py-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="mb-[16px] border-b border-gray-100 pb-[8px]">
            <p className="text-[#6a7282]">처리 현황</p>
          </div>
          <div className="space-y-[12px]">
            <div className="flex items-center justify-between border-b border-gray-100 pb-[8px]">
              <span className="text-[#4a5565]">소각 완료</span>
              <span className="text-[#4a5565]">{completedCount} 건</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-[8px]">
              <span className="text-[#4a5565]">소각 대기</span>
              <span className="text-[#fc8815]">{waitingCount} 건</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#4a5565]">지급 완료</span>
              <span className="text-[#4a5565]">35 건</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-[10px] border border-gray-200 bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
        {/* Search and Filter */}
        <div className="border-b border-gray-200 px-[24px] py-[24px]">
          <div className="flex items-center justify-between">
            <div className="w-[448px]">
              <Input
                placeholder="거래번호 또는 고객명 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-[46px] rounded-[10px] border border-[#d1d5dc] bg-gray-50 px-[16px] text-[14px] placeholder:text-[rgba(10,10,10,0.5)]"
              />
            </div>
            <div className="flex gap-[8px]">
              <Button
                variant={filter === "전체" ? "primary" : "secondary"}
                size="sm"
                className={`h-[46px] rounded-[10px] px-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] ${
                  filter === "전체" ? "" : "border border-[#d1d5dc] bg-gray-50 text-[#364153]"
                }`}
                onClick={() => setFilter("전체")}
              >
                전체
              </Button>
              <Button
                variant={filter === "대기" ? "primary" : "secondary"}
                size="sm"
                className={`h-[46px] rounded-[10px] px-[24px] ${
                  filter === "대기"
                    ? "shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
                    : "border border-[#d1d5dc] bg-gray-50 text-[#364153]"
                }`}
                onClick={() => setFilter("대기")}
              >
                소각 대기
              </Button>
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b-2 border-[#d1d5dc] bg-gray-100">
              <tr>
                <th className="px-[24px] py-[16px] text-left text-[#1e2939]">거래번호</th>
                <th className="px-[24px] py-[16px] text-left text-[#1e2939]">거래일시</th>
                <th className="px-[24px] py-[16px] text-left text-[#1e2939]">고객명</th>
                <th className="px-[24px] py-[16px] text-right text-[#1e2939]">환매금액</th>
                <th className="px-[24px] py-[16px] text-right text-[#1e2939]">지급액(세후)</th>
                <th className="px-[24px] py-[16px] text-center text-[#1e2939]">소각상태</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={item.id} className={index !== filteredData.length - 1 ? "border-b border-gray-200" : ""}>
                  <td className="px-[24px] py-[20px] text-[#101828]">{item.tradeNumber}</td>
                  <td className="px-[24px] py-[20px] text-[#364153]">{item.tradeTime}</td>
                  <td className="px-[24px] py-[20px] text-[#101828]">{item.customerName}</td>
                  <td className="px-[24px] py-[20px] text-right text-[#fc8815]">
                    {item.redemptionAmount.toLocaleString()}
                  </td>
                  <td className="px-[24px] py-[20px] text-right text-[#0fa968]">
                    {item.tokenAmount.toLocaleString()}
                  </td>
                  <td className="px-[24px] py-[20px]">
                    <div className="flex justify-center">
                      {item.status === "완료" ? (
                        <span className="rounded-full border border-[#8ec5ff] bg-blue-100 px-[12px] py-[4px] text-[#1447e6]">
                          완료
                        </span>
                      ) : (
                        <span className="rounded-full border border-[#ffd230] bg-[#fef3c6] px-[12px] py-[4px] text-[#bb4d00]">
                          대기
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="border-t border-gray-200 bg-gray-50 px-[24px] py-[17px]">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[#4a5565]">총 </span>
              <span className="text-[#155dfc]">{filteredData.length}</span>
              <span className="text-[#4a5565]"> 건</span>
            </div>
            <div className="flex gap-[6px]">
              <Button
                variant="secondary"
                size="sm"
                className="h-[34px] rounded-[10px] border border-[#d1d5dc] bg-white px-[12px] text-[#364153] opacity-50"
              >
                이전
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="h-[32px] w-[32px] rounded-[10px] bg-[#155dfc] text-white px-0"
              >
                1
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="h-[34px] w-[34px] rounded-[10px] border border-[#d1d5dc] bg-white text-[#364153] px-0"
              >
                2
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="h-[34px] w-[34px] rounded-[10px] border border-[#d1d5dc] bg-white text-[#364153] px-0"
              >
                3
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="h-[34px] w-[34px] rounded-[10px] border border-[#d1d5dc] bg-white text-[#364153] px-0"
              >
                4
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="h-[34px] w-[34px] rounded-[10px] border border-[#d1d5dc] bg-white text-[#364153] px-0"
              >
                5
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="h-[34px] rounded-[10px] border border-[#d1d5dc] bg-white px-[12px] text-[#364153]"
              >
                다음
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


