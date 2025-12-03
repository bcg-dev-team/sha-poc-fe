import svgPaths from "./svg-9r4g0t4yl5";
import { imgIcon } from "./svg-1da4c";
import { useState } from "react";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] justify-center relative shrink-0 text-[#77738c] text-[12px] w-full">
        <p className="leading-[18px]">연 수익률</p>
      </div>
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-center relative shrink-0 text-[#333950] text-[14px] w-full">
        <p className="leading-[20px]">2.60%</p>
      </div>
    </div>
  );
}

function NpIndexCardFlat() {
  return (
    <div className="basis-0 bg-[#f4f6f9] grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="np_index_card_flat.9">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[12px] pt-[16px] px-[16px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Scroll() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="scroll">
      <NpIndexCardFlat />
    </div>
  );
}

function IndexArea() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="index_area">
      <Scroll />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] justify-center relative shrink-0 text-[#77738c] text-[12px] w-full">
        <p className="leading-[18px]">1개월 수익률</p>
      </div>
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] justify-center relative shrink-0 text-[#333950] text-[14px] w-full">
        <p className="leading-[20px]">0.19%</p>
      </div>
    </div>
  );
}

function NpIndexCardFlat1() {
  return (
    <div className="basis-0 bg-[#f4f6f9] grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="np_index_card_flat.9">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[12px] pt-[16px] px-[16px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <IndexArea />
      <NpIndexCardFlat1 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="container">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[20px] py-0 relative w-full">
          <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333950] text-[18px] text-center text-nowrap whitespace-pre">신한개인용MMF제2호</p>
          <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#777e8c] text-[13px] text-center text-nowrap whitespace-pre">기준가: 1,023.65원/좌 (2025.11.13)</p>
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Container />
      <div className="bg-[#f6f6f9] h-[10px] shrink-0 w-full" data-name="np_00com_dv_360x10_sld.9" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[321px]">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#111111] text-[15px] text-nowrap whitespace-pre">결제 수단</p>
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Keyboard arrow down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_8805)" id="Keyboard arrow down">
          <g id="Vector"></g>
          <path d={svgPaths.pdde3a00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_8805">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white h-[42px] relative rounded-[6px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[42px] items-center justify-between px-[10px] py-[7px] relative w-full">
          <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333950] text-[14px] text-nowrap">
            <p className="leading-[18px] whitespace-pre">sKRW (신한 원화 스테이블코인)</p>
          </div>
          <KeyboardArrowDown />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <Frame2 />
      <Frame29 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Frame9 />
    </div>
  );
}

function Group3() {
  const [activeTab, setActiveTab] = useState<'direct' | 'max'>('direct');

  return (
    <div className="relative flex h-[28px] w-[106px] bg-[#E7EAEF] rounded-[6px] overflow-hidden">
      {/* 직접입력 버튼 */}
      <button
        onClick={() => setActiveTab('direct')}
        className={`flex-1 flex items-center justify-center relative z-10 transition-colors ${
          activeTab === 'direct' ? 'text-[#333950]' : 'text-[#999ea4]'
        }`}
      >
        {activeTab === 'direct' && (
          <div className="absolute inset-[2px] bg-white rounded-[4px] shadow-[0_0_3px_rgba(17,17,17,0.18)]" style={{ zIndex: -1 }} />
        )}
        <p className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] text-[11px] leading-[16px] relative z-20">
          직접입력
        </p>
      </button>
      
      {/* 최대한도 버튼 */}
      <button
        onClick={() => setActiveTab('max')}
        className={`flex-1 flex items-center justify-center relative z-10 transition-colors ${
          activeTab === 'max' ? 'text-[#333950]' : 'text-[#999ea4]'
        }`}
      >
        {activeTab === 'max' && (
          <div className="absolute inset-[2px] bg-white rounded-[4px] shadow-[0_0_3px_rgba(17,17,17,0.18)]" style={{ zIndex: -1 }} />
        )}
        <p className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] text-[11px] leading-[16px] relative z-20">
          최대한도
        </p>
      </button>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[321px]">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#111111] text-[15px] text-nowrap whitespace-pre">매입 금액</p>
      <Group3 />
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

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] text-nowrap text-right tracking-[-0.07px]">
        <p className="leading-[24px] whitespace-pre">원</p>
      </div>
      <IcoInputDel />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[16px] text-nowrap text-right">
        <p className="leading-[24px] whitespace-pre">1,000,000,000</p>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start ml-0 mt-0 px-0 py-[8px] relative w-[320px]">
      <Np00ComInputLineN />
      <Frame11 />
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative">
      <Frame12 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group1 />
    </div>
  );
}

function Input() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="input">
      <Group2 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] justify-center ml-0 mt-[56px] not-italic relative text-[#aaaeb3] text-[12px] text-nowrap translate-y-[-50%]">
        <p className="leading-[16px] whitespace-pre">보유 sKRW: 1,250,000,000 원</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Input />
    </div>
  );
}

function Frame30() {
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

function Frame31() {
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

function Frame32() {
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

function Frame33() {
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

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <Frame3 />
      <Frame19 />
      <Frame34 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-[320px]">
      <Frame14 />
      <Frame15 />
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

function Component() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] items-center overflow-clip pb-0 pt-[32px] px-0 relative shrink-0 w-[360px]" data-name="실시간순위_거래대금">
      <Divider />
    </div>
  );
}

function Text() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">환전 금액</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#333950] text-[14px] text-right translate-x-[-100%]">1,000,000,000 원</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333950] text-[14px] text-nowrap text-right whitespace-pre">약 3~5분</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-end ml-0 mt-0 relative w-[320px]">
      <Frame18 />
    </div>
  );
}

function Text1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="text">
      <p className="[grid-area:1_/_1] font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] ml-0 mt-0 not-italic relative text-[#777e8c] text-[13px] w-[197.467px]">예상 처리 시간</p>
      <Frame17 />
    </div>
  );
}

function Frame20() {
  return <div className="h-[20px] shrink-0 w-[54px]" />;
}

function Frame22() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-end ml-0 mt-0 relative w-[320px]">
      <Frame20 />
    </div>
  );
}

function Text2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="text">
      <p className="[grid-area:1_/_1] font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] ml-0 mt-0 not-italic relative text-[#999999] text-[11px] w-[197.467px]">* PoC 환전 수수료 없음</p>
      <Frame22 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-full">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[#eeeeee] h-px shrink-0 w-full" data-name="line" />
      <Text />
      <Frame35 />
    </div>
  );
}

function Text3() {
  return (
    <div className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[20px] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre" data-name="text">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[#777e8c] text-[13px]">예상 발행 토큰</p>
      <p className="[grid-area:1_/_1] ml-[320px] mt-0 relative text-[#333950] text-[14px] text-right translate-x-[-100%]">1,000,000,000 sMMF</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333950] text-[14px] text-nowrap text-right whitespace-pre">익일 09:00</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-end ml-0 mt-0 relative w-[320px]">
      <Frame23 />
    </div>
  );
}

function Text4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="text">
      <p className="[grid-area:1_/_1] font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[20px] ml-[0.46px] mt-0 not-italic relative text-[#777e8c] text-[13px] w-[197.467px]">발행 예정일</p>
      <Frame24 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[#eeeeee] h-px shrink-0 w-full" data-name="line" />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111111] text-[15px] w-full">토큰 발행 안내</p>
      <Frame28 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-[320px]">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#111111] text-[15px] w-[min-content]">sKRW → KRW 환전 정보</p>
      <Frame27 />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-[320px]">
      <Frame5 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-center left-0 pb-[130px] pt-0 px-0 top-[80px] w-[360px]">
      <Frame26 />
      <Frame21 />
      <Component />
      <Frame7 />
    </div>
  );
}

function Ic00Com28LineArrowL() {
  return (
    <div className="[grid-area:1_/_1] h-[32.474px] ml-[12px] mt-[13.92px] relative w-[28px]" data-name="ic_00com_28_line_arrow_l_111">
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
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[234px] mt-[11px] place-items-start relative" data-name="Group820325">
      <div className="[grid-area:1_/_1] ml-0 mt-0 size-[28px]" data-name="Rectangle154476" />
    </div>
  );
}

function Header() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="+ HEADER">
      <div className="[grid-area:1_/_1] h-[52px] ml-0 mt-0 relative w-[360px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 52">
          <path d="M0 0H360V52H0V0Z" fill="var(--fill-0, white)" id="bg" />
        </svg>
      </div>
      <Ic00Com28LineArrowL />
      <div className="[grid-area:1_/_1] flex flex-col font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] h-[27.835px] justify-center ml-[40px] mt-[30.15px] not-italic relative text-[#111111] text-[16px] translate-y-[-50%] w-[112px]">
        <p className="leading-[24px]">매입</p>
      </div>
      <Group />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0 w-[360px]">
      <Header />
    </div>
  );
}

function Img00ComBtnbg360Bg() {
  return (
    <div className="h-[92px] w-[360px]" data-name="img_00com_btnbg_360_bg">
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
      className="absolute bottom-[20px] h-[52px] left-[5.56%] right-[5.56%]" 
      data-name="btn_main_n.9"
    >
      <div className="absolute bg-[#2a3fec] inset-0 rounded-[8px]" data-name="btn_main_n.9" />
      <p className="absolute font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] inset-[26.92%_6.25%] leading-[24px] not-italic text-[16px] text-center text-white">매입 신청</p>
    </button>
  );
}

function Btn({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute bottom-0 left-0 w-[360px] z-50" data-name="+ BTN">
      <div className="relative w-full">
        <Img00ComBtnbg360Bg />
        <BtnMainN onClick={onClick} />
      </div>
    </div>
  );
}

export default function ShaPoC({
  onComplete,
  hideInlineButton = false,
}: {
  onComplete?: () => void;
  hideInlineButton?: boolean;
}) {
  const handlePurchase = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="bg-white relative size-full" data-name="SHA-PoC-01.매입신청">
      {!hideInlineButton && <Btn onClick={handlePurchase} />}
      <Frame16 />
      <div className="absolute bottom-0 left-0 pointer-events-none top-0 z-40">
        <Frame8 />
      </div>
    </div>
  );
}