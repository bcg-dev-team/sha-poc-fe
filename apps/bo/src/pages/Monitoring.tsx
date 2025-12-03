import svgPaths from "../imports/svg-hml6bixx3y";

export default function Monitoring() {
  return (
    <div>
      {/* Header */}
      <div className="mb-[16px]">
        <h1 className="text-[#101828] font-bold">실시간 모니터링</h1>
      </div>

      {/* Product Info Card */}
      <div className="mb-[24px] rounded-[10px] border border-gray-200 bg-white px-[25px] py-[25px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <p className="text-[#4a5565] text-[20px] font-bold">신한개인용MMF제2호</p>
            <span className="text-[#99a1af]">|</span>
            <p className="text-[#4a5565]">2025.11.23 16:29:08 (실시간)</p>
          </div>
          <div className="rounded-[10px] border border-[#b9f8cf] bg-green-50 px-[17px] py-[12px]">
            <p className="text-[#00a63e]">● 실시간 업데이트 중</p>
          </div>
        </div>
      </div>

      {/* Stats Cards - Row 1 */}
      <div className="mb-[24px] grid grid-cols-3 gap-[24px]">
        <div className="rounded-[10px] border border-gray-200 bg-white px-[25px] py-[25px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="mb-[16px] border-b border-gray-100 pb-[8px]">
            <p className="text-[#414141]">총 발행량</p>
          </div>
          <div>
            <span className="text-[#155dfc] text-[36px] font-bold">806,000,000,000</span>
            <span className="text-[#4a5565]"> sMMF</span>
          </div>
        </div>

        <div className="rounded-[10px] border border-gray-200 bg-white px-[25px] py-[25px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="mb-[16px] border-b border-gray-100 pb-[8px]">
            <p className="text-[#414141]">현재 기준가</p>
          </div>
          <div className="mb-[12px]">
            <span className="text-[#155dfc] text-[36px] font-bold">1,002.25</span>
          </div>
          <div className="inline-flex items-center gap-[8px] rounded-full bg-red-50 px-[12px] py-[4px]">
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d={svgPaths.p3155f180} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.pea6a680} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
            <span className="text-[#e7000b]">+0.225 % (금일)</span>
          </div>
        </div>

        <div className="rounded-[10px] border border-gray-200 bg-white px-[25px] py-[25px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="mb-[16px] border-b border-gray-100 pb-[8px]">
            <p className="text-[#414141]">투자자 현황</p>
          </div>
          <div className="space-y-[12px]">
            <div className="flex items-center justify-between border-b border-gray-100 pb-[8px]">
              <span className="text-[#4a5565]">개인</span>
              <span className="text-[#414141]">8,234 명</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-[8px]">
              <span className="text-[#4a5565]">법인</span>
              <span className="text-[#414141]">1,156 명</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#4a5565]">총계</span>
              <span className="text-[#155dfc]">9,390 명</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards - Row 2 */}
      <div className="mb-[24px] grid grid-cols-2 gap-[24px]">
        <div className="rounded-[10px] border border-gray-200 bg-[rgb(255,255,255)] px-[25px] py-[25px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <div className="mb-[24px] flex items-center gap-[8px] border-b border-gray-200 pb-px">
            <p className="text-[20px] leading-[28px]">🔗</p>
            <p className="text-[#1e2939] text-[18px] leading-[24px] font-bold">블록체인 트랜잭션 통계</p>
          </div>

          <div className="space-y-[16px]">
            <div className="rounded-[10px] bg-blue-50 border border-blue-100 px-[17px] py-[17px]">
              <div className="grid grid-cols-2 gap-[16px]">
                <div>
                  <p className="mb-[4px] text-[#4a5565] text-[14px] leading-[20px]">최근 블록 높이</p>
                  <p className="text-[#155dfc] text-[20px] leading-[28px] font-bold">#2,847,563</p>
                </div>
                <div>
                  <p className="mb-[4px] text-[#4a5565] text-[14px] leading-[20px]">총 트랜잭션 (누적)</p>
                  <p className="text-[#155dfc] text-[20px] leading-[28px] font-bold">147,285건</p>
                </div>
              </div>
            </div>

            <div className="space-y-[10px]">
              <div className="flex items-center justify-between border-b border-gray-100 py-[12px]">
                <div className="flex items-center gap-[8px]">
                  <div className="size-[8px] rounded-full bg-[#00c950]" />
                  <span className="text-[#364153] text-[16px] leading-[24px]">Mint (발행)</span>
                </div>
                <span className="text-[#101828] text-[16px] leading-[24px] font-semibold">42,158 건</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 py-[12px]">
                <div className="flex items-center gap-[8px]">
                  <div className="size-[8px] rounded-full bg-[#fb2c36]" />
                  <span className="text-[#364153] text-[16px] leading-[24px]">Burn (소각)</span>
                </div>
                <span className="text-[#101828] text-[16px] leading-[24px] font-semibold">38,085 건</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 py-[12px]">
                <div className="flex items-center gap-[8px]">
                  <div className="size-[8px] rounded-full bg-[#2b7fff]" />
                  <span className="text-[#364153] text-[16px] leading-[24px]">NAV Update</span>
                </div>
                <span className="text-[#101828] text-[16px] leading-[24px] font-semibold">365 건</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 py-[12px]">
                <div className="flex items-center gap-[8px]">
                  <div className="size-[8px] rounded-full bg-[#ad46ff]" />
                  <span className="text-[#364153] text-[16px] leading-[24px]">Rebase</span>
                </div>
                <span className="text-[#101828] text-[16px] leading-[24px] font-semibold">66,677 건</span>
              </div>
            </div>

            <div className="rounded-[10px] bg-gray-50 border border-gray-200 px-[17px] py-[17px]">
              <div className="flex items-center justify-between">
                <span className="text-[#364153] text-[16px] leading-[24px]">금일 트랜잭션</span>
                <span className="text-[#155dfc] text-[20px] leading-[28px] font-semibold">147 건</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[10px] border border-gray-200 bg-[rgb(255,255,255)] px-[25px] py-[25px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <div className="mb-[24px] flex items-center gap-[8px] border-b border-gray-200 pb-px">
            <p className="text-[20px] leading-[28px]">💱</p>
            <p className="text-[#1e2939] text-[18px] leading-[24px] font-bold">sKRW 잔고 통계</p>
          </div>

          <div className="flex flex-col gap-[16px]">
            {/* 총 환전 건수 카드 */}
            <div className="bg-green-50 rounded-[10px] border border-green-100">
              <div className="flex flex-col gap-[12px] px-[17px] py-[17px]">
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[#4a5565] text-[14px] leading-[20px]">총 환전 건수 (금일)</p>
                  <p className="text-[#00a63e] text-[24px] leading-[32px]">80건</p>
                </div>

                <div className="grid grid-cols-2 gap-[12px]">
                  <div className="bg-white rounded-[4px] border border-green-100 px-[13px] py-[13px]">
                    <p className="text-[#4a5565] text-[12px] leading-[16px] mb-[4px]">매입용</p>
                    <p className="text-[#101828] text-[16px] leading-[24px]">42 건</p>
                  </div>
                  <div className="bg-white rounded-[4px] border border-green-100 px-[13px] py-[13px]">
                    <p className="text-[#4a5565] text-[12px] leading-[16px] mb-[4px]">환매용</p>
                    <p className="text-[#101828] text-[16px] leading-[24px]">38 건</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 통계 리스트 */}
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center justify-between border-b border-gray-100 py-[12px]">
                <span className="text-[#364153] text-[16px] leading-[24px]">총 환전 금액 (금일)</span>
                <span className="text-[#155dfc] text-[16px] leading-[24px]">80,243,362,849원</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 py-[12px]">
                <span className="text-[#364153] text-[16px] leading-[24px]">평균 환전 시간</span>
                <span className="text-[#101828] text-[16px] leading-[24px]">3분 45초</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 py-[12px]">
                <span className="text-[#364153] text-[16px] leading-[24px]">총 수수료 수익</span>
                <span className="text-[#00a63e] text-[16px] leading-[24px]">20,060,841원</span>
              </div>
            </div>

            {/* 시스템 상태 */}
            <div className="bg-blue-50 rounded-[10px] border border-[#bedbff] px-[17px] py-[17px]">
              <div className="flex items-center justify-between">
                <span className="text-[#364153] text-[16px] leading-[24px]">시스템 상태</span>
                <div className="flex items-center gap-[4px]">
                  <p className="text-[#00a63e] text-[18px] leading-[28px]">✅</p>
                  <span className="text-[#00a63e] text-[16px] leading-[24px]">정상</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div className="rounded-[10px] border border-gray-200 bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="border-b border-gray-200 px-[25px] py-[20px]">
          <div className="flex items-center gap-[8px]">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M10 5V10L13.3333 11.6667" stroke="#FC8815" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <circle cx="10" cy="10" r="7.5" stroke="#FC8815" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            <p className="text-[#414141]">최근 활동 로그</p>
          </div>
        </div>

        <div className="space-y-[8px] px-[25px] py-[16px]">
          <div className="rounded-[8px] bg-red-50 px-[16px] py-[12px]">
            <span className="text-[#6a7282] text-[14px]">16:30:18</span>
            <span className="ml-[16px] text-[#e7000b]">김자산 - 환매 완료 (1,002,252,813원)</span>
          </div>
          <div className="rounded-[8px] bg-blue-50 px-[16px] py-[12px]">
            <span className="text-[#6a7282] text-[14px]">16:29:42</span>
            <span className="ml-[16px] text-[#155dfc]">이투자 - 청약 접수 (500,000,000원)</span>
          </div>
          <div className="rounded-[8px] bg-gray-50 px-[16px] py-[12px]">
            <span className="text-[#6a7282] text-[14px]">16:28:53</span>
            <span className="ml-[16px] text-[#4a5565]">NAV 업데이트 완료 (기준가: 1,002.25)</span>
          </div>
          <div className="rounded-[8px] bg-red-50 px-[16px] py-[12px]">
            <span className="text-[#6a7282] text-[14px]">16:27:35</span>
            <span className="ml-[16px] text-[#e7000b]">박세무(법인) - 환매 완료 (2,004,505,658원)</span>
          </div>
          <div className="rounded-[8px] bg-blue-50 px-[16px] py-[12px]">
            <span className="text-[#6a7282] text-[14px]">16:25:17</span>
            <span className="ml-[16px] text-[#155dfc]">최부자 - 청약 접수 (1,500,000,000원)</span>
          </div>
          <div className="rounded-[8px] bg-red-50 px-[16px] py-[12px]">
            <span className="text-[#6a7282] text-[14px]">16:24:38</span>
            <span className="ml-[16px] text-[#e7000b]">정금융 - 환매 완료 (550,476,844원)</span>
          </div>
        </div>
      </div>
    </div>
  );
}


