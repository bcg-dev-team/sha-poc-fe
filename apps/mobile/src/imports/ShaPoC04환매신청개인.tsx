import svgPaths from "./svg-bx2az1s386";
import { imgIcon } from "./svg-mc1q0";
import { useState } from "react";

function Ic00Com28LineArrowL({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute h-[32.474px] left-[3.33%] right-[88.89%] top-[13.92px] cursor-pointer"
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

function Header({ onBack }: { onBack: () => void }) {
  return (
    <div className="sticky top-0 z-50 bg-white pointer-events-auto" data-name="+ HEADER">
      <div className="h-[52px] w-[360px] relative" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 52">
          <path d="M0 0H360V52H0V0Z" fill="var(--fill-0, white)" id="bg" />
        </svg>
      </div>
      <Ic00Com28LineArrowL onClick={onBack} />
      <div className="absolute flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] h-[27.835px] justify-center leading-[0] left-[11.11%] not-italic right-[57.78%] text-[#111111] text-[16px] top-[30.15px] translate-y-[-50%]">
        <p className="leading-[24px]">sMMF 환매</p>
      </div>
      <div className="absolute left-[234px] top-[11px]" data-name="Group820325">
        <div className="size-[28px]" data-name="Rectangle154476" />
      </div>
    </div>
  );
}

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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">보유 sMMF</p>
      </div>
      <Help />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[#111111] text-[0px] text-center text-nowrap w-[280px]">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-center relative shrink-0 tracking-[-0.12px]">
        <p className="leading-[32px] text-nowrap whitespace-pre">
          <span className="text-[24px]">{`1,002,252,813 `}</span>
          <span className="text-[16px]">sMMF</span>
        </p>
      </div>
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] justify-center relative shrink-0">
        <p className="leading-[24px] not-italic text-[13px] text-nowrap whitespace-pre">
          <span>{`평가 금액 1,002,252,813 원 `}</span>
          <span className="text-[#ff3b30]">(+2,252,813 원)</span>
        </p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f4f6f9] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[20px] py-[16px] relative w-full">
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[32px] relative w-full">
          <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#111111] text-[20px] text-nowrap tracking-[-0.5px] whitespace-pre">신한개인용MMF제2호</p>
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Group3({ isDirectInput, onToggle }: { isDirectInput: boolean; onToggle: () => void }) {
  return (
    <button 
      onClick={onToggle}
      className="relative h-[28px] w-[106px] cursor-pointer shrink-0"
    >
      {/* 배경 */}
      <div className="absolute inset-0 rounded-[6px] bg-[#e7eaef]" />
      
      {/* 활성 표시 (흰색 버튼) */}
      <div 
        className={`absolute top-[2px] h-[24px] w-[51px] rounded-[6px] bg-white shadow-sm transition-all duration-200 ${
          isDirectInput ? 'left-[2px]' : 'left-[53px]'
        }`}
      />
      
      {/* 텍스트들 */}
      <div className="absolute inset-0 flex items-center justify-between px-[6px]">
        <div className={`flex-1 text-center font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] text-[11px] transition-colors ${
          isDirectInput ? 'text-[#333950]' : 'text-[#999ea4]'
        }`}>
          직접입력
        </div>
        <div className={`flex-1 text-center font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] text-[11px] transition-colors ${
          !isDirectInput ? 'text-[#333950]' : 'text-[#999ea4]'
        }`}>
          최대한도
        </div>
      </div>
    </button>
  );
}

function Frame3({ isDirectInput, onToggle }: { isDirectInput: boolean; onToggle: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[321px]">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#111111] text-[15px] text-nowrap whitespace-pre">환매 수량 (sMMF)</p>
      <Group3 isDirectInput={isDirectInput} onToggle={onToggle} />
    </div>
  );
}

function Np00ComInputLineN() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[320px]" data-name="np_00com_input_line_n.9">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 40">
        <g id="np_00com_input_line_n.9">
          <path d="M0 0H320V40H0V0Z" fill="var(--fill-0, white)" id="Rectangle 155810" />
          <path d="M0 40H320V38H0V40Z" fill="var(--fill-0, #F4F4F4)" id="np_00com_input_line_n.9_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[10%_10%_9.97%_10%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2.001px] mask-size-[20px_20px]" data-name="icon" style={{ maskImage: `url('${imgIcon}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <ellipse cx="8" cy="8.0023" fill="var(--fill-0, #CCCFD3)" id="Ellipse 857" rx="8" ry="8.0023" />
          <g id="Group 818705">
            <path d="M5.5 5.50158L10.5 10.503" id="Vector 600" stroke="var(--stroke-0, white)" strokeLinecap="round" />
            <path d="M10.5 5.50158L5.5 10.503" id="Vector 601" stroke="var(--stroke-0, white)" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IcoInputDel() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ico_input_del">
      <Icon />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-nowrap text-right tracking-[-0.07px]">
        <p className="leading-[24px] whitespace-pre">sMMF</p>
      </div>
      <IcoInputDel />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-nowrap text-right tracking-[-0.08px]">
        <p className="leading-[24px] whitespace-pre">1,002,252,813</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start ml-0 mt-0 px-0 py-[8px] relative w-[320px]">
      <Np00ComInputLineN />
      <Frame5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Frame6 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative">
      <Group1 />
    </div>
  );
}

function Input() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="input">
      <Group2 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 w-full">
      <Input />
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[#aaaeb3] text-[12px] w-[min-content]">
        <p className="leading-[16px]">보유 sMMF: 1,002,252,813</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 bg-[#f4f6f9] grow h-[36px] min-h-px min-w-px relative rounded-[6px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[10px] py-[6px] relative w-full">
          <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[12px] text-center text-nowrap whitespace-pre">1억</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 bg-[#f4f6f9] grow h-[36px] min-h-px min-w-px relative rounded-[6px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[10px] py-[6px] relative w-full">
          <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[12px] text-center text-nowrap whitespace-pre">5억</p>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 bg-[#f4f6f9] grow h-[36px] min-h-px min-w-px relative rounded-[6px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[10px] py-[6px] relative w-full">
          <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[12px] text-center text-nowrap whitespace-pre">10억</p>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 bg-[#f4f6f9] grow h-[36px] min-h-px min-w-px relative rounded-[6px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[10px] py-[6px] relative w-full">
          <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#242424] text-[12px] text-center text-nowrap whitespace-pre">최대</p>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame4({ isDirectInput, onToggle }: { isDirectInput: boolean; onToggle: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <Frame3 isDirectInput={isDirectInput} onToggle={onToggle} />
      <Frame27 />
      <Frame26 />
    </div>
  );
}

function Frame8({ isDirectInput, onToggle }: { isDirectInput: boolean; onToggle: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Frame4 isDirectInput={isDirectInput} onToggle={onToggle} />
    </div>
  );
}

function Frame9({ isDirectInput, onToggle }: { isDirectInput: boolean; onToggle: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[32px] relative w-full">
          <Frame8 isDirectInput={isDirectInput} onToggle={onToggle} />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] items-center justify-between leading-[20px] ml-0 mt-0 not-italic relative w-[320px]">
      <p className="relative shrink-0 text-[#777e8c] text-[13px] w-[85px]">환매 금액</p>
      <p className="relative shrink-0 text-[#333950] text-[14px] text-nowrap text-right whitespace-pre">1,002,252,813 원</p>
    </div>
  );
}

function Text() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="text">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] items-start justify-between leading-[20px] ml-0 mt-0 not-italic relative text-nowrap w-[320px] whitespace-pre">
      <p className="relative shrink-0 text-[#777e8c] text-[13px]">매입 원금</p>
      <p className="relative shrink-0 text-[#333950] text-[14px] text-right">1,000,000,000 원</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="text">
      <Frame14 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-full">
      <Text />
      <Text1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] items-center justify-between leading-[20px] ml-0 mt-0 not-italic relative text-nowrap w-[320px] whitespace-pre">
      <p className="relative shrink-0 text-[#777e8c] text-[13px]">과세 대상 수익</p>
      <p className="relative shrink-0 text-[#333950] text-[14px] text-right">2,252,813 원</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="text">
      <Frame15 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 text-[#777e8c]">
      <p className="relative shrink-0 text-[13px]">원천징수세(15.4%)</p>
      <p className="relative shrink-0 text-[12px]">(소득세 14% + 주민세 1.4%)</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] items-start justify-between leading-[20px] not-italic relative shrink-0 text-nowrap w-[320px] whitespace-pre">
      <Frame28 />
      <p className="relative shrink-0 text-[#333950] text-[14px] text-right">-346,833 원</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-between leading-[20px] ml-0 mt-0 not-italic relative text-nowrap w-[320px] whitespace-pre">
      <p className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] relative shrink-0 text-[#777e8c] text-[13px]">실수령 예상액(세후)</p>
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] relative shrink-0 text-[#2a3fec] text-[16px] text-right">1,001,905,880 원</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="text">
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <p className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#999999] text-[11px] text-nowrap whitespace-pre">* PoC 환전 수수료 없음</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Text3 />
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[16px] items-start ml-0 mt-0 relative w-[320px]">
      <div className="bg-[#eeeeee] h-px shrink-0 w-full" data-name="line" />
      <Frame18 />
      <div className="bg-[#eeeeee] h-px shrink-0 w-full" data-name="line" />
      <Text2 />
      <Frame16 />
      <div className="bg-[#eeeeee] h-px shrink-0 w-full" data-name="line" />
      <Frame30 />
    </div>
  );
}

function List() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="list">
      <Frame20 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-[320px]">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#111111] text-[14px] text-nowrap whitespace-pre">세금 계산 (개인 투자자)</p>
      <List />
    </div>
  );
}

function Frame29({ isDirectInput, onToggle }: { isDirectInput: boolean; onToggle: () => void }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-center left-0 pb-[100px] pt-0 px-0 top-[52px] w-[360px]">
      <Frame />
      <div className="bg-[#f6f6f9] h-[10px] shrink-0 w-full" data-name="np_00com_dv_360x10_sld.9" />
      <Frame9 isDirectInput={isDirectInput} onToggle={onToggle} />
      <div className="bg-[#f6f6f9] h-[10px] shrink-0 w-full" data-name="np_00com_dv_360x10_sld.9" />
      <Frame12 />
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
      <p className="absolute font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] inset-[26.92%_6.25%] leading-[24px] not-italic text-[16px] text-center text-white">환매 신청</p>
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
  onRedeemComplete,
  hideInlineButton = false,
}: {
  onBack?: () => void;
  onRedeemComplete?: () => void;
  hideInlineButton?: boolean;
}) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleRedeemComplete = () => {
    if (onRedeemComplete) {
      onRedeemComplete();
    }
  };

  const [isDirectInput, setIsDirectInput] = useState(true);
  const toggleDirectInput = () => setIsDirectInput(!isDirectInput);

  return (
    <div className="bg-white relative size-full" data-name="SHA-PoC-04.환매신청-개인">
      <Header onBack={handleBack} />
      <Frame29 isDirectInput={isDirectInput} onToggle={toggleDirectInput} />
      {!hideInlineButton && <Btn onClick={handleRedeemComplete} />}
    </div>
  );
}