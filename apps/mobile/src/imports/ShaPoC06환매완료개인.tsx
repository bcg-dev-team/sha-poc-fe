import svgPaths from "./svg-rgovu1pqt0";

function Group2() {
  return (
    <div className="absolute inset-[8.33%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group 823301">
          <circle cx="20" cy="20" fill="var(--fill-0, #2A3FEC)" id="Ellipse 944" r="20" />
          <path d="M12 19L18.5 25.5L29 15" id="Vector 674" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Mask group">
      <Group2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[8.33%]">
      <MaskGroup />
    </div>
  );
}

function Img00ComApngCompleted() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="img_00com_apng_completed">
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center w-full">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[28px] min-w-full relative shrink-0 text-[#111111] text-[20px] tracking-[-0.5px] w-[min-content]">환매가 완료되었어요</p>
      <p className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#999ea4] text-[14px] text-nowrap whitespace-pre">sKRW가 지갑으로 입금되었어요</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <Img00ComApngCompleted />
      <Frame />
    </div>
  );
}

function Text() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">거래 번호</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#333950] text-[14px] text-right translate-x-[-100%]">SHA202511230042</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333950] text-[14px] text-nowrap text-right whitespace-pre">2025.11.23 16:15:33</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-end ml-0 mt-0 relative w-[320px]">
      <Frame14 />
    </div>
  );
}

function Text1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="text">
      <p className="[grid-area:1_/_1] font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] ml-[0.46px] mt-0 not-italic relative text-[#777e8c] text-[13px] w-[197.467px]">거래 일시</p>
      <Frame13 />
    </div>
  );
}

function Text2() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">상품명</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#333950] text-[14px] text-right translate-x-[-100%]">신한개인용MMF제2호</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[#eeeeee] h-px shrink-0 w-full" data-name="line" />
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
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">환매 토큰</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#333950] text-[14px] text-right translate-x-[-100%]">1,002,252,813 sMMF</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">환매 금액</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#333950] text-[14px] text-right translate-x-[-100%]">1,002,252,813 원</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">수익금</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#333950] text-[14px] text-right translate-x-[-100%]">+2,252,813 원</p>
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

function Text6() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">원천징수세(15.4%)</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#333950] text-[14px] text-right translate-x-[-100%]">-346,933 원</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="text">
      <p className="[grid-area:1_/_1] font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] ml-0 mt-0 not-italic relative text-[#999999] text-[11px] text-nowrap whitespace-pre">*PoC 환전 수수료 없음</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <Text7 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame10 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <div className="bg-[#eeeeee] h-px shrink-0 w-full" data-name="line" />
    </div>
  );
}

function Text8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] ml-0 mt-0 relative text-[#777e8c] text-[13px]">실 수령액</p>
      <p className="[grid-area:1_/_1] font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] ml-[320px] mt-0 relative text-[#2a3fec] text-[14px] text-right translate-x-[-100%]">1,001,905,880 sKRW</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <Text8 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[320px]">
      <Frame18 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-[320px]" data-name="+ CONTENTS">
      <Frame1 />
      <Frame12 />
    </div>
  );
}

function Text9() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">입금 계좌</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#333950] text-[14px] text-right translate-x-[-100%]">sKRW 지갑</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333950] text-[14px] text-nowrap text-right whitespace-pre">2025.11.23 16:15:33</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-end ml-0 mt-0 relative w-[320px]">
      <Frame16 />
    </div>
  );
}

function Text10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="text">
      <p className="[grid-area:1_/_1] font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] ml-[0.46px] mt-0 not-italic relative text-[#777e8c] text-[13px] w-[197.467px]">입금 완료</p>
      <Frame17 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[#eeeeee] h-px shrink-0 w-full" data-name="line" />
      <Text9 />
      <Text10 />
      <div className="bg-[#eeeeee] h-px shrink-0 w-full" data-name="line" />
    </div>
  );
}

function Text11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="text">
      <p className="[grid-area:1_/_1] font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[24px] ml-0 mt-0 not-italic relative text-[#111111] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">블록체인 정보</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#77738c] text-[12px] w-full">
        <p className="leading-[18px]">0x742d35Cc1234567890abcdef1234567890AbCdEf</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start px-[16px] py-[12px] relative w-full">
          <Frame23 />
          <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#77738c] text-[0px] text-nowrap">
            <p className="[text-underline-position:from-font] decoration-solid leading-[18px] text-[12px] underline whitespace-pre">접기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Text11 />
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111111] text-[16px] w-full">입금 정보</p>
      <Frame26 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]">
      <Frame3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[40px] items-center left-0 pb-[100px] pt-0 px-0 top-[80px] w-[360px]">
      <Contents />
      <Frame8 />
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
      <div className="[grid-area:1_/_1] flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] h-[27.835px] justify-center ml-[40px] mt-[30.15px] not-italic relative text-[#111111] text-[16px] translate-y-[-50%] w-[112px]">
        <p className="leading-[24px]">sMMF 환매</p>
      </div>
      <Group />
    </div>
  );
}

function Frame9({ onBack }: { onBack: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0 w-[360px]">
      <Header onBack={onBack} />
    </div>
  );
}

function Img00ComBtnbg360Bg() {
  return (
    <div className="absolute bottom-0 h-[92px] left-0 w-[360px]" data-name="img_00com_btnbg_360_bg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 92">
        <g id="img_00com_btnbg_360_bg">
          <path d="M0 24H360V92H0V24Z" fill="var(--fill-0, white)" id="Rectangle 154436" />
          <path d="M0 0H360V24H0V0Z" fill="url(#paint0_linear_1_8801)" id="Rectangle 154438" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_8801" x1="180" x2="180" y1="2.5" y2="24">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function BtnMainN({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[20px] h-[52px] left-[5.56%] right-[5.56%] cursor-pointer" 
      data-name="btn_main_n.9"
    >
      <div className="absolute bg-[#2a3fec] inset-0 rounded-[8px]" data-name="btn_main_n.9" />
      <p className="absolute font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] inset-[26.92%_6.25%] leading-[24px] not-italic text-[16px] text-center text-white">확인</p>
    </button>
  );
}

function Btn({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute bottom-0 left-0 w-[360px] z-50" data-name="+ BTN">
      <Img00ComBtnbg360Bg />
      <BtnMainN onClick={onClick} />
    </div>
  );
}

export default function ShaPoC({
  onBack,
  onConfirm,
  hideInlineButton = false,
}: {
  onBack?: () => void;
  onConfirm?: () => void;
  hideInlineButton?: boolean;
}) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  return (
    <div className="bg-white relative size-full" data-name="SHA-PoC-06.환매완료-개인">
      <Frame11 />
      <div className="absolute bottom-0 left-0 pointer-events-none top-0">
        <Frame9 onBack={handleBack} />
      </div>
      {!hideInlineButton && <Btn onClick={handleConfirm} />}
    </div>
  );
}