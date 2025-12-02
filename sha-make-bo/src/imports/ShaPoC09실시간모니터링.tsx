import svgPaths from "./svg-hml6bixx3y";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#101828] text-[24px] text-nowrap top-[-0.5px] whitespace-pre">실시간 모니터링</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[30px] relative shrink-0 w-[179.086px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[179.086px]">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[30px] left-0 not-italic text-[#4a5565] text-[20px] text-nowrap top-0 whitespace-pre">신한개인용MMF제2호</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[5.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[5.156px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">|</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] w-[207px]">2025.11.23 16:29:08 (실시간)</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[30px] relative shrink-0 w-[406.883px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[30px] items-center relative w-[406.883px]">
        <Text />
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-[18px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[#00a63e] text-[15px] text-nowrap whitespace-pre">● 실시간 업데이트 중</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-green-50 h-[42px] relative rounded-[10px] shrink-0 w-[163.641px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start pb-px pt-[12px] px-[17px] relative w-[163.641px]">
        <Text3 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[92px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[92px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Heading />
      <Container3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#414141] text-[18px] text-nowrap top-[-0.5px] whitespace-pre">총 발행량</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[54px] left-0 top-0 w-[280.023px]" data-name="Text">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[54px] left-0 not-italic text-[#155dfc] text-[36px] text-nowrap top-[-0.5px] whitespace-pre">806,000,000,000</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-[288.02px] top-[22.5px] w-[45.516px]" data-name="Text">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">sMMF</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function StatsCard() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[248px] items-start left-0 pb-px pt-[25px] px-[25px] rounded-[10px] top-0 w-[442.664px]" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Heading2 />
      <Container4 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[33px] left-[24px] top-[24px] w-[392.664px]" data-name="Heading 3">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#414141] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">현재 기준가</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[54px] left-0 top-0 w-[134.828px]" data-name="Text">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[54px] left-0 not-italic text-[#155dfc] text-[36px] text-nowrap top-[-0.5px] whitespace-pre">1,002.25</p>
    </div>
  );
}

function Text7() {
  return <div className="absolute left-[142.83px] size-0 top-[40px]" data-name="Text" />;
}

function Container5() {
  return (
    <div className="absolute h-[54px] left-[24px] top-[73px] w-[392.664px]" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[7.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3155f180} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pea6a680} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[22.5px] left-[32px] top-[4px] w-[105.07px]" data-name="Text">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[22.5px] left-0 not-italic text-[#e7000b] text-[15px] top-[-1px] w-[106px]">+0.225 % (금일)</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-red-50 h-[30.5px] left-[24px] rounded-[1.67772e+07px] top-[139px] w-[149.07px]" data-name="Container">
      <Icon />
      <Text8 />
    </div>
  );
}

function StatsCard1() {
  return (
    <div className="absolute bg-white border border-gray-200 border-solid h-[248px] left-[466.66px] rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[442.664px]" data-name="StatsCard">
      <Heading3 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#414141] text-[18px] text-nowrap top-[-0.5px] whitespace-pre">투자자 현황</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.656px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">개인</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[55.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[55.313px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[56px] not-italic text-[#414141] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">8,234 명</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text9 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.656px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">법인</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[55.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[55.313px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[56px] not-italic text-[#414141] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">1,156 명</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text11 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[27.656px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">총계</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[55.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[55.313px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[56px] not-italic text-[#155dfc] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">9,390 명</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text13 />
      <Text14 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[146px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function StatsCard2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[248px] items-start left-[933.33px] pb-px pt-[25px] px-[25px] rounded-[10px] top-0 w-[442.664px]" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Heading4 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Container">
      <StatsCard />
      <StatsCard1 />
      <StatsCard2 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[28px] relative shrink-0 w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[20px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e2939] text-[20px] text-nowrap top-0 whitespace-pre">🔗</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[147.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[147.5px]">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1e2939] text-[18px] text-nowrap top-[-0.5px] whitespace-pre">블록체인 트랜잭션 통계</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[41px] items-center pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text15 />
      <Text16 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">최근 블록 높이</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#155dfc] text-[20px] text-nowrap top-0 whitespace-pre">#2,847,563</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">총 트랜잭션 (누적)</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#155dfc] text-[20px] text-nowrap top-0 whitespace-pre">147,285건</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[52px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-blue-50 h-[86px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-blue-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[86px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Text17() {
  return <div className="absolute bg-[#00c950] left-0 rounded-[1.67772e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[89.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[89.703px]">
        <Text17 />
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">Mint (발행)</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[64.531px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[65px] not-italic text-[#101828] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">42,158 건</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return <div className="absolute bg-[#fb2c36] left-0 rounded-[1.67772e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[91.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[91.5px]">
        <Text20 />
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">Burn (소각)</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[64.531px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[65px] not-italic text-[#101828] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">38,085 건</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text21 />
      <Text22 />
    </div>
  );
}

function Text23() {
  return <div className="absolute bg-[#2b7fff] left-0 rounded-[1.67772e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[105.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[105.719px]">
        <Text23 />
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">NAV Update</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[41.484px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[42px] not-italic text-[#101828] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">365 건</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text24 />
      <Text25 />
    </div>
  );
}

function Text26() {
  return <div className="absolute bg-[#ad46ff] left-0 rounded-[1.67772e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text27() {
  return (
    <div className="h-[24px] relative shrink-0 w-[70.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[70.102px]">
        <Text26 />
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">Rebase</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[64.531px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[65px] not-italic text-[#101828] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">66,677 건</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text27 />
      <Text28 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[200px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.578px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">금일 트랜잭션</p>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[28px] relative shrink-0 w-[51.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[51.859px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] left-[52px] not-italic text-[#155dfc] text-[20px] text-nowrap text-right top-0 translate-x-[-100%] whitespace-pre">147 건</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text29 />
      <Text30 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-gray-50 h-[62px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[62px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[380px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container24 />
      <Container26 />
    </div>
  );
}

function BlockchainStats() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[10px] shrink-0" data-name="BlockchainStats">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Heading5 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[28px] relative shrink-0 w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[20px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e2939] text-[20px] text-nowrap top-0 whitespace-pre">💱</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[24px] relative shrink-0 w-[107.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[107.813px]">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1e2939] text-[18px] text-nowrap top-[-0.5px] whitespace-pre">sKRW 환전 통계</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[41px] items-center pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text31 />
      <Text32 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">총 환전 건수 (금일)</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#00a63e] text-[24px] text-nowrap top-[-0.5px] whitespace-pre">80건</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.5px] whitespace-pre">매입용</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">42 건</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-green-100 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-px pt-[13px] px-[13px] relative size-full">
          <Container31 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.5px] whitespace-pre">환매용</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">38 건</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-green-100 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-px pt-[13px] px-[13px] relative size-full">
          <Container34 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[70px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-green-50 h-[172px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-green-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[172px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container30 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[24px] relative shrink-0 w-[119.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[119.844px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">총 환전 금액 (금일)</p>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[24px] relative shrink-0 w-[129.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[129.063px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">80,243,362,849원</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text33 />
      <Text34 />
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[24px] relative shrink-0 w-[92.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[92.188px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">평균 환전 시간</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.922px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">3분 45초</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text35 />
      <Text36 />
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[24px] relative shrink-0 w-[92.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[92.188px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">총 수수료 수익</p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[24px] relative shrink-0 w-[96.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[96.797px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#00a63e] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">20,060,841원</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text37 />
      <Text38 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[147px] items-start relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[24px] relative shrink-0 w-[73.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[73.75px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">시스템 상태</p>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[28px] relative shrink-0 w-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[18px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#00a63e] text-[18px] text-nowrap top-0 whitespace-pre">✅</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#00a63e] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">정상</p>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[28px] relative shrink-0 w-[49.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[28px] items-center relative w-[49.656px]">
        <Text40 />
        <Text41 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text39 />
      <Text42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-blue-50 h-[62px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[62px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[413px] items-start relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container42 />
      <Container44 />
    </div>
  );
}

function ExchangeStats() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[10px] shrink-0" data-name="ExchangeStats">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Heading6 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[528px] relative shrink-0 w-full" data-name="Container">
      <BlockchainStats />
      <ExchangeStats />
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[28px] relative shrink-0 w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[20px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e2939] text-[20px] text-nowrap top-0 whitespace-pre">⚡</p>
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[24px] relative shrink-0 w-[92.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[92.188px]">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1e2939] text-[18px] text-nowrap top-[-0.5px] whitespace-pre">최근 활동 로그</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[41px] items-center pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text43 />
      <Text44 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[22px] relative shrink-0 w-[55.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] relative w-[55.781px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[1.5px] whitespace-pre">16:30:18</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#e7000b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">김차산 - 환매 완료 (1,002,252,813원)</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-red-50 h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffe2e2] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[58px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container47 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[22px] relative shrink-0 w-[55.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] relative w-[55.781px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[1.5px] whitespace-pre">16:29:42</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">이투자 - 청약 접수 (500,000,000원)</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-blue-50 h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-blue-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[58px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container50 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[22px] relative shrink-0 w-[55.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] relative w-[55.781px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[1.5px] whitespace-pre">16:28:33</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">NAV 업데이트 완료 (기준가: 1.00225)</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-gray-50 h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[58px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container53 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[22px] relative shrink-0 w-[55.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] relative w-[55.781px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[1.5px] whitespace-pre">16:27:55</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#e7000b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">박세무(법인) - 환매 완료 (2,004,505,626원)</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-red-50 h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffe2e2] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[58px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container56 />
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[22px] relative shrink-0 w-[55.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] relative w-[55.781px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[1.5px] whitespace-pre">16:26:12</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">최부자 - 청약 접수 (1,500,000,000원)</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-blue-50 h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-blue-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[58px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container59 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[22px] relative shrink-0 w-[55.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] relative w-[55.781px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[1.5px] whitespace-pre">16:24:38</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#e7000b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">정금융 - 환매 완료 (300,675,844원)</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-red-50 h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffe2e2] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[58px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container62 />
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[22px] relative shrink-0 w-[55.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] relative w-[55.781px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[1.5px] whitespace-pre">16:22:15</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#e7000b] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">강출자(법인) - 환매 완료 (802,901,251원)</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-red-50 h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffe2e2] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[58px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container65 />
          <Container66 />
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[22px] relative shrink-0 w-[55.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] relative w-[55.781px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[1.5px] whitespace-pre">16:20:05</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">Rebase 실행 완료</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-gray-50 h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[58px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container68 />
          <Container69 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[400px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[400px] items-start pl-0 pr-[15px] py-0 relative w-full">
          <Container49 />
          <Container52 />
          <Container55 />
          <Container58 />
          <Container61 />
          <Container64 />
          <Container67 />
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function ActivityLog() {
  return (
    <div className="bg-white h-[515px] relative rounded-[10px] shrink-0 w-full" data-name="ActivityLog">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[515px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <Heading7 />
          <Container71 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[28px] items-start left-[392.5px] pb-[130px] pt-0 px-0 top-[96px] w-[1376px]">
      <Frame1 />
      <Container11 />
      <Container46 />
      <ActivityLog />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.922px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[30px] not-italic text-[#d1d5dc] text-[16px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">청약 관리</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon1 />
      <Text45 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e8f800} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p11d57a00} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.922px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[30px] not-italic text-[#d1d5dc] text-[16px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">환매 관리</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon2 />
      <Text46 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_1038)" id="Icon">
          <path d={svgPaths.p363df2c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_1038">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[24px] relative shrink-0 w-[101.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[101.406px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[51px] not-italic text-[16px] text-center text-nowrap text-white top-[-0.5px] translate-x-[-50%] whitespace-pre">실시간 모니터링</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#313654] box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[223px]" data-name="Button">
      <Icon3 />
      <Text47 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p166b7100} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.922px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[30px] not-italic text-[#d1d5dc] text-[16px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">고객 관리</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon4 />
      <Text48 />
    </div>
  );
}

function ListItem3() {
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
        <g id="Icon">
          <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[24px] relative shrink-0 w-[73.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[73.75px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[37px] not-italic text-[#d1d5dc] text-[16px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">시스템 설정</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon5 />
      <Text49 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button4 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[272px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#1e2939] h-[1681px] left-0 top-[64px] w-[256px]" data-name="Sidebar">
      <div className="box-border content-stretch flex flex-col h-[1681px] items-start overflow-clip pb-0 pl-[16px] pr-[17px] pt-[16px] relative rounded-[inherit] w-[256px]">
        <List />
      </div>
      <div aria-hidden="true" className="absolute border-[#364153] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[13.828px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">신</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Text50 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="basis-0 grow h-[30px] min-h-px min-w-px relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[30px] left-0 not-italic text-[22px] text-nowrap text-white top-0 whitespace-pre">신한투자증권 백오피스</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[32px] relative shrink-0 w-[222.617px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[32px] items-center relative w-[222.617px]">
        <Container72 />
        <Heading1 />
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#bedbff] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">관리자:</p>
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[41.484px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] whitespace-pre">홍길동</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="basis-0 bg-[#1447e6] grow h-[40px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center px-[16px] py-0 relative w-full">
          <Text51 />
          <Text52 />
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white h-[40px] relative rounded-[10px] shrink-0 w-[87.313px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[87.313px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[44px] not-italic text-[#155dfc] text-[16px] text-center text-nowrap top-[7.5px] translate-x-[-50%] whitespace-pre">로그아웃</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[40px] relative shrink-0 w-[230.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[40px] items-center relative w-[230.5px]">
        <Container74 />
        <Button5 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[63px] items-center justify-between px-[32px] py-0 relative w-full">
          <Container73 />
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#004094] box-border content-stretch flex flex-col h-[64px] items-start left-0 pb-px pt-0 px-0 top-0 w-[1905px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#003478] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container76 />
    </div>
  );
}

export default function ShaPoC() {
  return (
    <div className="bg-gray-100 relative size-full" data-name="SHA-PoC-09.실시간모니터링">
      <Frame />
      <Sidebar />
      <Header />
    </div>
  );
}