import svgPaths from "./svg-asj42zm7em";

function Help() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7692)" id="Help">
          <g id="Vector"></g>
          <path d={svgPaths.pe934c00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_7692">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">총 자산</p>
      </div>
      <Help />
    </div>
  );
}

function Refresh() {
  return (
    <div className="relative size-[20px]" data-name="Refresh">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_8006)" id="Refresh">
          <g id="Vector"></g>
          <path d={svgPaths.p211eec00} fill="var(--fill-0, #999EA4)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_8006">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[26px] text-center text-nowrap tracking-[-0.13px]">
        <p className="leading-[32px] whitespace-pre">1,002,252,813</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Refresh />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function TabL1SldContainer() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[6px] items-center pb-0 pt-[12px] px-[20px] relative shrink-0 w-[360px]" data-name="tab_l1_sld_container">
      <Frame2 />
    </div>
  );
}

function IcoTrPriceUp() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="ico_tr_price_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="ico_tr_price_up">
          <g id="guide"></g>
          <path clipRule="evenodd" d={svgPaths.p204a8380} fill="var(--fill-0, #FA2D42)" fillRule="evenodd" id="Triangle" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <IcoTrPriceUp />
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fa2d42] text-[14px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">2,252,813원 (+0.23%)</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[251px]">
      <Frame3 />
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#999ea4] text-[12px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">2025.11.16 15:30 기준</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame30 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame10 />
    </div>
  );
}

function TabL1SldContainer1() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-between pb-0 pt-[8px] px-[20px] relative shrink-0 w-[360px]" data-name="tab_l1_sld_container">
      <Frame6 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TabL1SldContainer />
      <TabL1SldContainer1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame19 />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[10px] relative shrink-0 w-[360px]" data-name="divider">
      <div className="absolute bg-[#f6f6f9] inset-0" data-name="np_00com_dv_360x10_sld.9" />
    </div>
  );
}

function Component01Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="01_container">
      <Frame12 />
      <Divider />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[320px]">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#111111] text-[18px] text-nowrap tracking-[-0.5px] whitespace-pre">신한개인용MMF제2호</p>
    </div>
  );
}

function Text() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">보유 수량</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#3e4ff9] text-[14px] text-right translate-x-[-100%]">1,002,252,813 sMMF</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333950] text-[14px] text-nowrap text-right whitespace-pre">1,002,252,813 원</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-end ml-0 mt-0 relative w-[320px]">
      <Frame16 />
    </div>
  );
}

function Text1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="text">
      <p className="[grid-area:1_/_1] font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] ml-[0.46px] mt-0 not-italic relative text-[#777e8c] text-[13px] w-[197.467px]">평가 금액</p>
      <Frame15 />
    </div>
  );
}

function Text2() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">매입 원금</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#333950] text-[14px] text-right translate-x-[-100%]">1,000,000,000 원</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Text />
      <Text1 />
      <Text2 />
      <div className="bg-[#eeeeee] h-px shrink-0 w-full" data-name="line" />
    </div>
  );
}

function Text3() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">평가 손익</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#ff3b30] text-[14px] text-right translate-x-[-100%]">+2,252,813 원</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">수익률</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#ff3b30] text-[14px] text-right translate-x-[-100%]">+0.23%</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">보유 기간</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#333950] text-[14px] text-right translate-x-[-100%]">7일 (2025.11.10부터)</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <Text5 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame13 />
      <Frame26 />
      <Frame20 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[320px]">
      <Frame18 />
      <Frame21 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function KeyboardArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Keyboard arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_3_209)" id="Keyboard arrow right">
          <g id="Vector"></g>
          <path d={svgPaths.p16e51a00} fill="var(--fill-0, #777E8C)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_209">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777e8c] text-[14px] text-center text-nowrap tracking-[-0.5px]">
        <p className="leading-[24px] whitespace-pre">전체보기</p>
      </div>
      <KeyboardArrowRight />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[15px] text-center text-nowrap tracking-[-0.5px]">
        <p className="leading-[24px] whitespace-pre">최근 7일 수익 내역</p>
      </div>
      <Frame35 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[24px] items-start justify-between px-[20px] py-0 relative w-full">
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-[13px] text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c]">2025.11.16</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#ff3b30] text-right translate-x-[-100%]">+501,251 원 (+0.05%)</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-[13px] text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c]">2025.11.15</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#ff3b30] text-right translate-x-[-100%]">+501,001 원 (+0.05%)</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-[13px] text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c]">2025.11.14</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#ff3b30] text-right translate-x-[-100%]">+500,750 원 (+0.05%)</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-[13px] text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c]">2025.11.13</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#ff3b30] text-right translate-x-[-100%]">+500,500 원 (+0.05%)</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="text">
      <p className="[grid-area:1_/_1] [text-underline-position:from-font] decoration-solid font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] ml-0 mt-0 not-italic relative text-[#777e8c] text-[12px] text-nowrap underline whitespace-pre">더 보기</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Text10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[320px]">
      <Frame27 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame22 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame9 />
      <Frame28 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Frame33 />
      <Frame32 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame />
      <Frame34 />
    </div>
  );
}

function Divider1() {
  return <div className="h-[10px] shrink-0 w-[360px]" data-name="divider" />;
}

function Component() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] items-center overflow-clip pb-[130px] pt-[32px] px-0 relative shrink-0 w-full" data-name="실시간순위_거래대금">
      <Frame1 />
      <Divider1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col h-[701px] items-start relative shrink-0 w-[360px]">
      <Component01Container />
      <Component />
    </div>
  );
}

function ContentsFooter() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[753px] items-start left-0 overflow-x-clip pb-0 pt-[52px] px-0 top-0 w-[360px]"
      data-name="contents+footer"
    >
      <Frame31 />
    </div>
  );
}

function BtnMainN({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-0 left-[51.88%] right-0 top-0 cursor-pointer"
      data-name="btn_main_n.9"
    >
      <div className="absolute bg-[#2a3fec] bottom-0 left-0 right-0 rounded-[8px] top-0" data-name="btn_main_n.9" />
      <p className="absolute font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] inset-[26.92%_3.75%] leading-[24px] not-italic text-[16px] text-center text-white">환매</p>
    </button>
  );
}

function Np00ComBtnL1SubN() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[51.88%] top-0" data-name="np_00com_btn_l1_sub_n.9">
      <div className="absolute bg-[#f4f6f9] bottom-0 left-0 right-[51.88%] rounded-[8px] top-0" data-name="btn_main_c_n.9" />
      <p className="absolute font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] inset-[26.92%_58.13%_26.92%_6.25%] leading-[24px] not-italic text-[#333950] text-[16px] text-center">추가 매입</p>
    </div>
  );
}

function Boxbtn({ onRedeem }: { onRedeem: () => void }) {
  return (
    <div className="absolute inset-[21.74%_5.56%]" data-name="boxbtn">
      <BtnMainN onClick={onRedeem} />
      <Np00ComBtnL1SubN />
    </div>
  );
}

function Box2BtnSldH52Default2A3FecFloating({ onRedeem }: { onRedeem: () => void }) {
  return (
    <div className="absolute bottom-0 h-[92px] left-0 w-[360px]" data-name="box2btn_sld_h52_default_2A3FEC_floating">
      <div className="absolute bottom-0 left-0 right-0 top-[26.09%]" data-name="Rectangle154436">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 68">
          <path d="M0 0H360V68H0V0Z" fill="var(--fill-0, white)" id="Rectangle154436" />
        </svg>
      </div>
      <div className="absolute bottom-[73.91%] left-0 right-0 top-0" data-name="Rectangle154438">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
          <path d="M0 0H360V24H0V0Z" fill="url(#paint0_linear_3_207)" id="Rectangle154438" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_207" x1="180" x2="180" y1="2.5" y2="24">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Boxbtn onRedeem={onRedeem} />
    </div>
  );
}

function Ic00Com28LineArrowL({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="[grid-area:1_/_1] h-[32.474px] ml-[12px] mt-[13.92px] relative w-[28px] cursor-pointer"
      data-name="ic_00com_28_line_arrow_l_111"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector"></g>
      </svg>
      <div className="absolute inset-[21.43%_35.71%]" data-name="Vector">
        <div className="absolute inset-[-4.04%_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 21">
            <path d={svgPaths.p2c0ecd80} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[234px] mt-[11px] place-items-start relative" data-name="Group820325">
      <div className="[grid-area:1_/_1] ml-0 mt-0 size-[28px]" data-name="Rectangle154476" />
    </div>
  );
}

function Header({ onBack }: { onBack: () => void }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="+ HEADER">
      <div className="[grid-area:1_/_1] h-[52px] ml-0 mt-0 relative w-[360px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 52">
          <path d="M0 0H360V52H0V0Z" fill="var(--fill-0, white)" id="bg" />
        </svg>
      </div>
      <Ic00Com28LineArrowL onClick={onBack} />
      <div className="[grid-area:1_/_1] flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] h-[28px] justify-center ml-[40px] mt-[30px] not-italic relative text-[#111111] text-[16px] translate-y-[-50%] w-[200px]">
        <p className="leading-[24px]">내 자산</p>
      </div>
      <Group />
    </div>
  );
}

function Frame11({ onBack }: { onBack: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header onBack={onBack} />
    </div>
  );
}

function Frame17({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[40px] items-start left-0 top-0 w-[360px] z-40 pointer-events-auto">
      <Frame11 onBack={onBack} />
    </div>
  );
}

export default function ShaPoC({ onBack, onNavigateRedeem }: { onBack?: () => void; onNavigateRedeem?: () => void }) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleRedeem = () => {
    if (onNavigateRedeem) {
      onNavigateRedeem();
    }
  };

  return (
    <div className="bg-white relative size-full" data-name="SHA-PoC-03.보유자산">
      <Frame17 onBack={handleBack} />
      <ContentsFooter />
      <Box2BtnSldH52Default2A3FecFloating onRedeem={handleRedeem} />
    </div>
  );
}