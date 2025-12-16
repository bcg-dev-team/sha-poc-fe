import svgPaths from "../imports/svg-fodi3oah1h";
import { useMyWallet } from "../contexts/WalletContext";

// sha-make-fm 의 NAV 업데이트 메인 컨텐츠(AppContent 부분)를
// 레이아웃만 현재 앱 구조에 맞게 조정한 버전

export default function NavUpdate() {
  const { wallet, isInitialized } = useMyWallet();

  const nav = 1.0002365000;



  const handleNavUpdate = async () => {
    if (!isInitialized) {
      alert("지갑이 초기화되지 않았습니다.");
      return;
    }

    try {

      let tx = await wallet.updateNAVWithDecimals(10002365,7);

      
      tx.wait(1);
      // 0x8DFeB78ecEe391149b1c2739cEd0f6992D0a5663
      // const balance = await wallet.getMMFShare()
      // console.log(`balance = : ${balance}`);
      // const balanceReadable = ethers.formatEther(balance);

      alert("NAV 업데이트가 완료되었습니다.");
    } catch (error) {
      console.error("[NavUpdate] Error updating NAV:", error);
      alert("NAV 업데이트 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="box-border flex min-h-[calc(100vh-64px)] flex-col gap-[30px] bg-gray-100 px-[32px] pb-[130px] pt-[32px]">
      {/* 상단 요약 카드 */}
      <div className="content-stretch flex flex-col gap-[16px] items-start">
        <p className="font-['Pretendard_GOV:Bold',sans-serif] text-[24px] leading-[36px] text-[#101828]">
          NAV 업데이트
        </p>

        <div className="bg-white h-[233px] w-full rounded-[10px] border border-gray-200 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <div className="flex h-full flex-col gap-[24px] px-[33px] pb-px pt-[33px]">
            {/* 상품명/기준일 */}
            <div className="flex h-[47px] items-center gap-[8px] border-b border-gray-200">
              <p className="font-['Pretendard_GOV:Bold',sans-serif] text-[20px] leading-[30px] text-[#4a5565]">
                신한개인용MMF제2호
              </p>
              <span className="text-[#99a1af]">|</span>
              <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] leading-[24px] text-[#4a5565]">
                2025.11.23 기준
              </p>
            </div>

            {/* 현재 기준가 / 전일 수익률 */}
            <div className="flex h-[96px] items-center justify-between">
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] leading-[24px] text-[#6a7282]">
                  현재 기준가 (전일)
                </p>
                <div className="relative h-[48px]">
              <p className="font-['Pretendard_GOV',sans-serif] font-semibold text-[48px] leading-[48px] text-[#00a63e]">
                    1,023.20
                  </p>
                  <p className="absolute left-[206px] top-[20px] font-['Pretendard_GOV:Regular',sans-serif] text-[16px] leading-[28px] text-[#4a5565]">
                    원
                  </p>
                </div>
              </div>

              <div className="h-[97px] w-[180px] border-l border-gray-200 pl-[33px]">
                <div className="flex flex-col items-end gap-[8px]">
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] leading-[24px] text-[#6a7282]">
                    전일 수익률
                  </p>
                  <p className="font-['Pretendard_GOV',sans-serif] font-semibold text-[30px] leading-[36px] text-[#00a63e]">
                    +0.05%
                  </p>
                  <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[12px] leading-[20px] text-[#6a7282]">
                    2025.11.22 기준
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAV 계산/요약 카드들 */}
      <div className="content-stretch flex flex-col gap-[40px] items-start">
        {/* 금일 NAV 계산 카드 */}
        <div className="bg-white w-full rounded-[10px] border border-gray-200 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col gap-[24px] px-[33px] pb-px pt-[33px]">
            <div className="mb-[8px] h-[37px] border-b border-gray-200">
              <p className="font-['Pretendard_GOV',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1e2939]">
                금일 NAV 계산 (2025.11.23)
              </p>
            </div>

            {/* 금일 NAV 계산 내용 - sha-make-fm 구조를 참고한 실제 컨텐츠 */}
            <div className="space-y-6">
              {/* 총 자산 / 세부 자산 / 부채 / 순자산 / 총 좌수 */}
              <div className="relative rounded-[10px] border border-gray-100 bg-white/60 px-6 py-5">
                <dl className="space-y-3 text-[14px] text-[#1e2939]">
                  {/* 총 자산 */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <dt className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] leading-[24px] text-[#1e2939]">
                      총 자산 (Total Assets)
                    </dt>
                    <dd className="font-['Pretendard_GOV',sans-serif] font-semibold text-[14px] leading-[24px] text-[#101828]">
                      806,458,320,000 원
                    </dd>
                  </div>

                  {/* 채권 */}
                  <div className="flex items-center justify-between border-b border-[#b9f8cf] border-l-2 pl-4 pb-3">
                    <dt className="flex items-center gap-[8px] font-['Pretendard_GOV:Regular',sans-serif] text-[14px] leading-[24px] text-[#4a5565]">
                      <span>채권</span>
                      <span className="text-[13px] text-[#6a7282]">(93.0%)</span>
                    </dt>
                    <dd className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] leading-[24px] text-[#101828]">
                      750,000,000,000 원
                    </dd>
                  </div>

                  {/* 유동성 자산 */}
                  <div className="flex items-center justify-between border-b border-[#b9f8cf] border-l-2 pl-4 pb-3">
                    <dt className="flex items-center gap-[8px] font-['Pretendard_GOV:Regular',sans-serif] text-[14px] leading-[24px] text-[#4a5565]">
                      <span>유동성 자산</span>
                      <span className="text-[13px] text-[#6a7282]">(7.0%)</span>
                    </dt>
                    <dd className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] leading-[24px] text-[#101828]">
                      56,458,320,000 원
                    </dd>
                  </div>

                  {/* 총 부채 */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <dt className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] leading-[24px] text-[#1e2939]">
                      총 부채 (Total Liabilities)
                    </dt>
                    <dd className="font-['Pretendard_GOV',sans-serif] font-semibold text-[14px] leading-[24px] text-[#e7000b]">
                      -0 원
                    </dd>
                  </div>

                  {/* 순자산총액 */}
                  <div className="flex items-center justify-between rounded-[10px] border border-[#b9f8cf] bg-green-50 px-4 py-3">
                    <dt className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] leading-[24px] text-[#101828]">
                      순자산총액 (Net Asset Value)
                    </dt>
                    <dd className="font-['Pretendard_GOV',sans-serif] font-semibold text-[14px] leading-[24px] text-[#00a63e]">
                      806,000,000,000 원
                    </dd>
                  </div>

                  {/* 총 좌수 */}
                  <div className="flex items-center justify-between pt-1">
                    <dt className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] leading-[24px] text-[#1e2939]">
                      총 좌수 (Total Units)
                    </dt>
                    <dd className="font-['Pretendard_GOV',sans-serif] font-semibold text-[14px] leading-[24px] text-[#101828]">
                      788,012,345,678 좌
                    </dd>
                  </div>
                </dl>

                {/* 금일 기준가 배너 */}
                <div className="mt-6 rounded-[14px] bg-gradient-to-r from-[#00a63e] to-[#008236] p-8 text-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                  <div className="flex items-center justify-between">
                    <p className="font-['Pretendard_GOV:Regular',sans-serif] text-[14px] leading-[24px] text-green-100">
                      금일 기준가 (09:00 적용)
                    </p>
                    <div className="flex items-end gap-[8px] font-['Pretendard_GOV',sans-serif] font-semibold not-italic text-center text-nowrap text-white">
                      <span className="relative shrink-0 text-[42px] leading-[31px]">1,023.65</span>
                      <span className="relative shrink-0 text-[16px] leading-[normal]">원/좌</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 블록체인 업데이트 정보 + NAV 등록 패널은 TokenIssuance 쪽과 동일한 패턴이므로, 간단 카드로 축약 */}
        <div className="grid w-full gap-[32px] md:grid-cols-2">
          <div className="basis-0 grow rounded-[10px] border border-gray-200 bg-[#f9fafb] p-[25px]">
            <div className="mb-[16px] flex items-center gap-[8px]">
              <div className="relative size-[20px]">
                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                  <g>
                    <path
                      d={svgPaths.p19e4f80}
                      stroke="#364153"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.66667"
                    />
                    <path
                      d={svgPaths.p8586900}
                      stroke="#364153"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.66667"
                    />
                  </g>
                </svg>
              </div>
              <p className="font-['Pretendard_GOV',sans-serif] font-semibold text-[14px] leading-[24px] text-[#364153]">
                블록체인 업데이트 정보
              </p>
            </div>
            <p className="mb-[8px] text-[14px] leading-[20px] text-[#4a5565]">
              컨트랙트: sMMF (0xabc...def)
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[13px] leading-[20px] text-[#05df72] bg-[#101828] rounded-[10px] border border-[#364153] px-[17px] py-[12px]">
              updateNAV(1.0002365000)
            </p>
          </div>

          {/* Button NAV등록*/}
          <div className="basis-0 grow rounded-[10px] border border-[#b9f8cf] bg-green-50 p-[26px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
            <p className="mb-[8px] text-center font-['Pretendard_GOV',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1e2939]">
              블록체인 등록 준비 완료
            </p>
            <p className="mb-[16px] text-center font-['Pretendard_GOV:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565]">
              산출된 NAV 값을 블록체인에 기록합니다
            </p>
            <div className="flex justify-center">
              <div
                className="flex h-[54px] w-[320px] items-center justify-center gap-[8px] rounded-[10px] bg-[#00a63e] text-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#009436] transition-colors"
                onClick={handleNavUpdate}
              >
                <span className="text-[15px] font-medium">09:00 NAV 블록체인 등록</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


