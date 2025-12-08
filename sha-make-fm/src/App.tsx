import svgPaths from "./imports/svg-fodi3oah1h";
import { useState } from "react";
import TokenIssuance from "./pages/TokenIssuance";
import { MyWalletProvider } from "./contexts/WalletContext";

function Text() {
  return (
    <div className="h-[30px] relative shrink-0 w-[179.086px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[179.086px]">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[30px] left-0 not-italic text-[#4a5565] text-nowrap top-0 whitespace-pre">신한개인용MMF제2호</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[5.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[5.156px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-nowrap top-[-0.5px] whitespace-pre">|</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[115.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[115.234px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-nowrap top-[-0.5px] whitespace-pre">2025.11.23 기준</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[47px] items-center pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6a7282] text-nowrap top-[-0.5px] whitespace-pre">현재 기준가 (전일)</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[193.594px]" data-name="Text">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[48px] left-0 not-italic text-[#00a63e] text-nowrap top-[0.5px] whitespace-pre text-[48px]">1,023.20</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[28px] left-[205.59px] top-[20px] w-[40.336px]" data-name="Text">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#4a5565] text-nowrap top-0 whitespace-pre">원</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[80px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[80px] items-start relative w-full">
        <Heading2 />
        <Container1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[74px] not-italic text-[#6a7282] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">전일 수익률</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Pretendard_GOV:SemiBold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#00a63e] text-nowrap text-right whitespace-pre text-[30px]">+0.05%</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[101px] not-italic text-[#6a7282] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">2025.11.22 기준</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full">
      <Heading3 />
      <Text5 />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[97px] relative shrink-0 w-[180px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[97px] items-end pl-[33px] pr-0 py-0 relative w-[180px]">
        <Frame7 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[96px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white h-[233px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[233px] items-start pb-px pt-[33px] px-[33px] relative w-full">
          <Container />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">NAV 업데이트</p>
      <Container6 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[37px] relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#1e2939] text-nowrap top-[-0.5px] whitespace-pre">금일 NAV 계산 (2025.11.23)</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[150.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[150.828px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e2939] text-nowrap top-[-0.5px] whitespace-pre">총 자산 (Total Assets)</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[138.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[138.281px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[139.28px] not-italic text-[#101828] text-right top-[-0.5px] translate-x-[-100%] w-[208px]">806,458,320,000 원</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute box-border content-stretch flex h-[49px] items-center justify-between left-0 pb-px pt-0 px-0 top-0 w-[1310px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.656px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-nowrap top-[-0.5px] whitespace-pre">채권</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] top-[-0.5px] w-[49px]">(93.0%)</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[84.492px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[84.492px]">
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[138.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[138.281px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[139.28px] not-italic text-[#101828] text-right top-[-0.5px] translate-x-[-100%] w-[171px]">750,000,000,000 원</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute box-border content-stretch flex h-[49px] items-center justify-between left-0 pb-px pl-[34px] pr-0 pt-0 top-[65px] w-[1310px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0px_0px_1px_2px] border-solid inset-0 pointer-events-none" />
      <Container8 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-nowrap top-[-0.5px] whitespace-pre">유동성 자산</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40.773px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[40.773px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] top-[-0.5px] w-[41px]">(7.0%)</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[122.523px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[122.523px]">
        <Text11 />
        <Text12 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[129.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[129.063px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[130.06px] not-italic text-[#101828] text-right top-[-0.5px] translate-x-[-100%] w-[160px]">56,458,320,000 원</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute box-border content-stretch flex h-[49px] items-center justify-between left-0 pb-px pl-[34px] pr-0 pt-0 top-[130px] w-[1310px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0px_0px_1px_2px] border-solid inset-0 pointer-events-none" />
      <Container10 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[170.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[170.25px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e2939] text-nowrap top-[-0.5px] whitespace-pre">총 부채 (Total Liabilities)</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[113.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[113.031px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[114px] not-italic text-[#e7000b] text-right top-[-0.5px] translate-x-[-100%] w-[114px]">-0 원</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute box-border content-stretch flex h-[49px] items-center justify-between left-0 pb-px pt-0 px-0 top-[195px] w-[1310px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[200.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[200.875px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-nowrap top-[-0.5px] whitespace-pre">순자산총액 (Net Asset Value)</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[28px] relative shrink-0 w-[172.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[172.859px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] left-[172.86px] not-italic text-[#00a63e] text-right top-[0.5px] translate-x-[-100%] w-[205px]">806,000,000,000 원</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex h-[62px] items-center justify-between left-[-16px] px-[17px] py-px rounded-[10px] top-[260px] w-[1342px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[139.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[139.031px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e2939] text-nowrap top-[-0.5px] whitespace-pre">총 좌수 (Total Units)</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[138.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[138.281px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[139.28px] not-italic text-[#101828] text-right top-[-0.5px] translate-x-[-100%] w-[214px]">788,012,345,678 좌</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute box-border content-stretch flex h-[49px] items-center justify-between left-0 pb-px pt-0 px-0 top-[338px] w-[1310px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text18 />
      <Text19 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Pretendard_GOV:SemiBold',sans-serif] gap-[8px] items-end not-italic relative shrink-0 text-center text-nowrap text-white whitespace-pre">
      <p className="leading-[31px] relative shrink-0 text-[42px]">1,023.65</p>
      <p className="leading-[normal] relative shrink-0">원/좌</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-between relative w-full">
        <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-green-100 text-nowrap whitespace-pre">금일 기준가 (09:00 적용)</p>
        <Frame />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[#00a63e] items-start left-0 p-[32px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] to-[#008236] top-[419px] w-[1310px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container9 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[656px] items-start relative shrink-0 w-full">
      <Heading4 />
      <Container18 />
    </div>
  );
}

function NavCalculation() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="NAVCalculation">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-px pt-[33px] px-[33px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p19e4f80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p8586900} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[147.5px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[147.5px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-nowrap top-[-0.5px] whitespace-pre">블록체인 업데이트 정보</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Heading5 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-nowrap top-[-0.5px] whitespace-pre">스마트 컨트랙트 함수</p>
    </div>
  );
}

function Code() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Code">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#05df72]">updateNAV(1.0002365000)</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#101828] h-[54px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[54px] items-start pb-px pl-[17px] pr-[378.133px] pt-[18.5px] relative w-full">
          <Code />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[82px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 bg-gray-50 grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[25px] relative w-full">
          <Container19 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[113.11px] not-italic text-[#1e2939] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">블록체인 등록 준비 완료</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[113.5px] not-italic text-[#4a5565] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">산출된 NAV 값을 블록체인에 기록합니다</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Heading6 />
      <Paragraph />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[52px] items-start relative shrink-0 w-[225.336px]" data-name="Container">
      <Frame4 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 3V15" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M17 8L12 3L7 8" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d557600} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[-36px] top-0">
      <Icon1 />
      <p className="font-['Pretendard_GOV:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-center text-nowrap text-white whitespace-pre">09:00 NAV 블록체인 등록</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[28px] relative shrink-0 w-[154.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[154.891px]">
        <Frame6 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00a63e] box-border content-stretch flex gap-[12px] h-[54px] items-center justify-center relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[589px]" data-name="Button">
      <Text20 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[15px] items-center relative">
        <Container25 />
        <Button />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px px-px py-[26px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame5 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container26 />
    </div>
  );
}

function NavActionPanel() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="NAVActionPanel">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[33px] relative w-full">
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame3 />
      <NavCalculation />
      <NavActionPanel />
    </div>
  );
}

function Heading() {
  return <div className="absolute h-[36px] left-[32px] top-[32px] w-[1376px]" data-name="Heading 1" />;
}

function AppContent() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col gap-[10px] items-start left-[368px] pb-[130px] pt-[32px] px-[32px] top-[64px] w-[1440px]" data-name="App">
      <Frame2 />
      <Heading />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3ac0b600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3c797180} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[63.93px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[63.93px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[32.5px] not-italic text-center text-nowrap text-white top-[-0.5px] translate-x-[-50%] whitespace-pre">NAV 관리</p>
      </div>
    </div>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#313654] hover:bg-[#3d4460] transition-colors cursor-pointer box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[223px]" data-name="Button">
      <Icon2 />
      <Text21 />
    </div>
  );
}

function ListItem({ onClick }: { onClick: () => void }) {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button1 onClick={onClick} />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_188)" id="Icon">
          <path d={svgPaths.p1e57e600} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2a7ce900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5.83333 5H6.66667V8.33333" id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25bee380} id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_188">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[24px] relative shrink-0 w-[92.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[92.188px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[46.5px] not-italic text-[#d1d5dc] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">토큰 발행 관리</p>
      </div>
    </div>
  );
}

function Button2({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute hover:bg-[#2a3444] transition-colors cursor-pointer box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon3 />
      <Text22 />
    </div>
  );
}

function ListItem1({ onClick }: { onClick: () => void }) {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button2 onClick={onClick} />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_184)" id="Icon">
          <path d={svgPaths.p2b5ca2e2} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2ff15700} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_184">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.922px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[30px] not-italic text-[#d1d5dc] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">펀드 현황</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute hover:bg-[#2a3444] transition-colors cursor-pointer box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon4 />
      <Text23 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_194)" id="Icon">
          <path d={svgPaths.p81e2440} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pab98830} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p23e3d380} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_194">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.922px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[30px] not-italic text-[#d1d5dc] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">자산 구성</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute hover:bg-[#2a3444] transition-colors cursor-pointer box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon5 />
      <Text24 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[24px] relative shrink-0 w-[73.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[73.75px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[37px] not-italic text-[#d1d5dc] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">시스템 설정</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute hover:bg-[#2a3444] transition-colors cursor-pointer box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon6 />
      <Text25 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button5 />
    </div>
  );
}

function List({ onNavClick, onTokenClick }: { onNavClick: () => void; onTokenClick: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[272px] items-start left-[16px] top-[16px] w-[223px]" data-name="List">
      <ListItem onClick={onNavClick} />
      <ListItem1 onClick={onTokenClick} />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Sidebar({ onNavClick, onTokenClick }: { onNavClick: () => void; onTokenClick: () => void }) {
  return (
    <div className="absolute bg-[#1e2939] border-[#364153] border-[0px_1px_0px_0px] border-solid h-[1456px] left-0 overflow-clip shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[64px] w-[256px]" data-name="Sidebar">
      <List onNavClick={onNavClick} onTokenClick={onTokenClick} />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[13.828px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#00a63e] text-nowrap top-[-0.5px] whitespace-pre">신</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Text26 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="basis-0 grow h-[30px] min-h-px min-w-px relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[30px] left-0 not-italic text-nowrap text-white top-0 whitespace-pre text-[22px]">신한자산운용 펀드 관리 시스템</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[32px] relative shrink-0 w-[285.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[32px] items-center relative w-[285.992px]">
        <Container28 />
        <Heading1 />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#b9f8cf] text-nowrap top-[-0.5px] whitespace-pre">펀드매니저:</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[41.484px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-nowrap text-white top-[-0.5px] whitespace-pre">최운용</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="basis-0 bg-[#008236] grow h-[40px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center px-[16px] py-0 relative w-full">
          <Text27 />
          <Text28 />
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white h-[40px] relative rounded-[10px] shrink-0 w-[87.313px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[87.313px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[44px] not-italic text-[#00a63e] text-center text-nowrap top-[7.5px] translate-x-[-50%] whitespace-pre">로그아웃</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[40px] relative shrink-0 w-[258.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[40px] items-center relative w-[258.156px]">
        <Container30 />
        <Button6 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[63px] items-center justify-between px-[32px] py-0 relative w-full">
          <Container29 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#008236] box-border content-stretch flex flex-col h-[64px] items-start left-0 pb-px pt-0 px-0 top-0 w-[1920px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#005b25] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container32 />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'nav' | 'token'>('nav');

  return (
    <MyWalletProvider>
      <div className="bg-gray-100 relative size-full" data-name="SHA-PoC-10.NAV업데이트">
        {currentPage === 'nav' ? <AppContent /> : <TokenIssuance />}
        <Sidebar onNavClick={() => setCurrentPage('nav')} onTokenClick={() => setCurrentPage('token')} />
        <Header />
      </div>
    </MyWalletProvider>
  );
}