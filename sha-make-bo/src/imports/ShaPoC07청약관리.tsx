import svgPaths from "./svg-o3ey7j7i6q";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#101828] text-[24px] text-nowrap top-[-0.5px] whitespace-pre">청약 관리</p>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[30px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[30px] left-0 not-italic text-[#4a5565] text-[20px] text-nowrap top-0 whitespace-pre">신한개인용MMF제2호</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[4.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[4.891px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">|</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[160.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[160.781px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">2025.11.23 16:30 기준</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[30px] relative shrink-0 w-[360.758px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[30px] items-center relative w-[360.758px]">
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
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[#155dfc] text-[15px] text-nowrap whitespace-pre">● 실시간 연동중</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-blue-50 h-[42px] relative rounded-[10px] shrink-0 w-[133.391px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start px-[17px] py-[10px] relative w-[133.391px]">
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
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[33px] left-[24px] top-[24px] w-[392.664px]" data-name="Heading 3">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">금일 청약 건수</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[54px] left-0 top-0 w-[41.484px]" data-name="Text">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[54px] left-0 not-italic text-[#155dfc] text-[36px] text-nowrap top-[-0.5px] whitespace-pre">42</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-[49.48px] top-[22.5px] w-[13.828px]" data-name="Text">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">건</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[54px] left-[24px] top-[73px] w-[392.664px]" data-name="Container">
      <Text4 />
      <Text5 />
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

function Text6() {
  return (
    <div className="absolute h-[22.5px] left-[32px] top-[4px] w-[104.484px]" data-name="Text">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[22.5px] left-0 not-italic text-[#e7000b] text-[15px] top-[-1px] w-[105px]">+7 건 (전일 대비)</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-red-50 h-[30.5px] left-[24px] rounded-[1.67772e+07px] top-[139px] w-[148.484px]" data-name="Container">
      <Icon />
      <Text6 />
    </div>
  );
}

function StatsCard() {
  return (
    <div className="absolute bg-white border border-gray-200 border-solid h-[248px] left-0 rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[442.664px]" data-name="StatsCard">
      <Heading2 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[33px] left-[24px] top-[24px] w-[392.664px]" data-name="Heading 3">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">금일 청약 금액</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[54px] left-0 top-0 w-[259.281px]" data-name="Text">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[54px] left-0 not-italic text-[#155dfc] text-[36px] text-nowrap top-[-0.5px] whitespace-pre">42,158,000,000</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[24px] left-[267.28px] top-[22.5px] w-[13.828px]" data-name="Text">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">원</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[54px] left-[24px] top-[73px] w-[392.664px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Icon1() {
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

function Text9() {
  return (
    <div className="absolute h-[22.5px] left-[32px] top-[4px] w-[195.234px]" data-name="Text">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[22.5px] left-0 not-italic text-[#e7000b] text-[15px] top-[-1px] w-[196px]">+7,500,000,000 원 (전일 대비)</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-red-50 h-[30.5px] left-[24px] rounded-[1.67772e+07px] top-[139px] w-[239.234px]" data-name="Container">
      <Icon1 />
      <Text9 />
    </div>
  );
}

function StatsCard1() {
  return (
    <div className="absolute bg-white border border-gray-200 border-solid h-[248px] left-[466.66px] rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[442.664px]" data-name="StatsCard">
      <Heading3 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#6a7282] text-[18px] text-nowrap top-[-0.5px] whitespace-pre">처리 현황</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.922px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">완전 완료</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[32.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[32.266px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[33px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">35 건</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.922px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">완전 대기</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[23.047px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[24px] not-italic text-[#155dfc] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">7 건</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[92.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[92.188px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">토큰 발행 예정</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[32.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[32.266px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[33px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">42 건</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[146px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function StatsCard2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[248px] items-start left-[933.33px] pb-px pt-[25px] px-[25px] rounded-[10px] top-0 w-[442.664px]" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Heading4 />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Container">
      <StatsCard />
      <StatsCard1 />
      <StatsCard2 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-gray-50 h-[46px] relative rounded-[10px] shrink-0 w-[448px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[46px] items-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[448px]">
        <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">거래번호 또는 고객명 검색</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#155dfc] h-[46px] relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[75.656px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[46px] relative w-[75.656px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[38px] not-italic text-[16px] text-center text-nowrap text-white top-[10.5px] translate-x-[-50%] whitespace-pre">전체</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[46px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[46px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[55px] not-italic text-[#364153] text-[16px] text-center text-nowrap top-[10.5px] translate-x-[-50%] whitespace-pre">환전 대기</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[46px] relative shrink-0 w-[193.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[46px] items-start relative w-[193.578px]">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[95px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[95px] items-start pb-px pt-[24px] px-[24px] relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[340.75px]" data-name="Header Cell">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-[24px] not-italic text-[#1e2939] text-[16px] text-nowrap top-[15.5px] whitespace-pre">거래번호</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[57px] left-[340.75px] top-0 w-[194.336px]" data-name="Header Cell">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-[24px] not-italic text-[#1e2939] text-[16px] text-nowrap top-[15.5px] whitespace-pre">거래일시</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[57px] left-[535.09px] top-0 w-[156.055px]" data-name="Header Cell">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-[24px] not-italic text-[#1e2939] text-[16px] text-nowrap top-[15.5px] whitespace-pre">고객명</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[57px] left-[691.14px] top-0 w-[292.703px]" data-name="Header Cell">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-[269.39px] not-italic text-[#1e2939] text-[16px] text-nowrap text-right top-[15.5px] translate-x-[-100%] whitespace-pre">청약금액</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[57px] left-[983.84px] top-0 w-[180.164px]" data-name="Header Cell">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-[90.42px] not-italic text-[#1e2939] text-[16px] text-center text-nowrap top-[15.5px] translate-x-[-50%] whitespace-pre">완전상태</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[57px] left-[1164.01px] top-0 w-[209.992px]" data-name="Header Cell">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-[105.16px] not-italic text-[#1e2939] text-[16px] text-center text-nowrap top-[15.5px] translate-x-[-50%] whitespace-pre">처리</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[1374px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-gray-100 border-[#d1d5dc] border-[0px_0px_2px] border-solid h-[57px] left-0 top-0 w-[1374px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="h-[65.5px] relative shrink-0 w-[340.75px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20.5px] whitespace-pre">SHA20251123004Z</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="h-[65.5px] relative shrink-0 w-[194.336px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#364153] text-[16px] text-nowrap top-[20.5px] whitespace-pre">16:25:33</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="h-[65.5px] relative shrink-0 w-[156.055px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20.5px] whitespace-pre">김차산</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="h-[65.5px] relative shrink-0 w-[292.703px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[268.86px] not-italic text-[#155dfc] text-[16px] text-right top-[20.5px] translate-x-[-100%] w-[120px]">1,000,000,000</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-blue-100 box-border content-stretch flex gap-[10px] items-center justify-center left-[66.71px] px-[12px] py-[4px] rounded-[999px] top-[20.25px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[14px] text-center text-nowrap whitespace-pre">완료</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="h-[65.5px] relative shrink-0 w-[180.164px]" data-name="Table Cell">
      <Text16 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#4a5565] h-[32px] left-[68.8px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[17px] w-[72.398px]" data-name="Button">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[36.5px] not-italic text-[14px] text-center text-nowrap text-white top-[5.5px] translate-x-[-50%] whitespace-pre">상세보기</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="h-[65.5px] relative shrink-0 w-[209.992px]" data-name="Table Cell">
      <Button2 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[340.75px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">SHA20251123004I</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[65px] left-[340.75px] top-0 w-[194.336px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#364153] text-[16px] text-nowrap top-[20px] whitespace-pre">16:18:15</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[65px] left-[535.09px] top-0 w-[156.055px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">이두사</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[65px] left-[691.14px] top-0 w-[292.703px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[269.69px] not-italic text-[#155dfc] text-[16px] text-right top-[20px] translate-x-[-100%] w-[107px]">500,000,000</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-[#fef3c6] box-border content-stretch flex gap-[10px] items-center justify-center left-[66.71px] px-[12px] py-[4px] rounded-[999px] top-[19.75px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffd230] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#bb4d00] text-[14px] text-center text-nowrap whitespace-pre">대기</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[65px] left-[983.84px] top-0 w-[180.164px]" data-name="Table Cell">
      <Text17 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#4a5565] h-[32px] left-[68.8px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[16.5px] w-[72.398px]" data-name="Button">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[36.5px] not-italic text-[14px] text-center text-nowrap text-white top-[5.5px] translate-x-[-50%] whitespace-pre">상세보기</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[65px] left-[1164.01px] top-0 w-[209.992px]" data-name="Table Cell">
      <Button3 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[65px] left-0 top-[65.5px] w-[1374px]" data-name="Table Row">
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[340.75px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">SHA20251123004D</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[65px] left-[340.75px] top-0 w-[194.336px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#364153] text-[16px] text-nowrap top-[20px] whitespace-pre">16:05:47</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[65px] left-[535.09px] top-0 w-[156.055px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">박세무</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[65px] left-[691.14px] top-0 w-[292.703px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[268.86px] not-italic text-[#155dfc] text-[16px] text-right top-[20px] translate-x-[-100%] w-[120px]">2,000,000,000</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute bg-blue-100 box-border content-stretch flex gap-[10px] items-center justify-center left-[66.71px] px-[12px] py-[4px] rounded-[999px] top-[19.75px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[14px] text-center text-nowrap whitespace-pre">완료</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[65px] left-[983.84px] top-0 w-[180.164px]" data-name="Table Cell">
      <Text18 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#4a5565] h-[32px] left-[68.8px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[16.5px] w-[72.398px]" data-name="Button">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[36.5px] not-italic text-[14px] text-center text-nowrap text-white top-[5.5px] translate-x-[-50%] whitespace-pre">상세보기</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[65px] left-[1164.01px] top-0 w-[209.992px]" data-name="Table Cell">
      <Button4 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[65px] left-0 top-[130.5px] w-[1374px]" data-name="Table Row">
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[340.75px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">SHA20251123003P</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[65px] left-[340.75px] top-0 w-[194.336px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#364153] text-[16px] text-nowrap top-[20px] whitespace-pre">15:52:22</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[65px] left-[535.09px] top-0 w-[156.055px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">최부자</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[65px] left-[691.14px] top-0 w-[292.703px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[268.86px] not-italic text-[#155dfc] text-[16px] text-right top-[20px] translate-x-[-100%] w-[120px]">1,500,000,000</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute bg-blue-100 box-border content-stretch flex gap-[10px] items-center justify-center left-[66.71px] px-[12px] py-[4px] rounded-[999px] top-[19.75px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[14px] text-center text-nowrap whitespace-pre">완료</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[65px] left-[983.84px] top-0 w-[180.164px]" data-name="Table Cell">
      <Text19 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#4a5565] h-[32px] left-[68.8px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[16.5px] w-[72.398px]" data-name="Button">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[36.5px] not-italic text-[14px] text-center text-nowrap text-white top-[5.5px] translate-x-[-50%] whitespace-pre">상세보기</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[65px] left-[1164.01px] top-0 w-[209.992px]" data-name="Table Cell">
      <Button5 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[65px] left-0 top-[195.5px] w-[1374px]" data-name="Table Row">
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[340.75px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">SHA20251123003S</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[65px] left-[340.75px] top-0 w-[194.336px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#364153] text-[16px] text-nowrap top-[20px] whitespace-pre">15:38:09</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[65px] left-[535.09px] top-0 w-[156.055px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">정금융</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[65px] left-[691.14px] top-0 w-[292.703px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[269.69px] not-italic text-[#155dfc] text-[16px] text-right top-[20px] translate-x-[-100%] w-[107px]">300,000,000</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute bg-[#fef3c6] box-border content-stretch flex gap-[10px] items-center justify-center left-[66.71px] px-[12px] py-[4px] rounded-[999px] top-[19.75px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffd230] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#bb4d00] text-[14px] text-center text-nowrap whitespace-pre">대기</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[65px] left-[983.84px] top-0 w-[180.164px]" data-name="Table Cell">
      <Text20 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#4a5565] h-[32px] left-[68.8px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[16.5px] w-[72.398px]" data-name="Button">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[36.5px] not-italic text-[14px] text-center text-nowrap text-white top-[5.5px] translate-x-[-50%] whitespace-pre">상세보기</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[65px] left-[1164.01px] top-0 w-[209.992px]" data-name="Table Cell">
      <Button6 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[65px] left-0 top-[260.5px] w-[1374px]" data-name="Table Row">
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[340.75px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">SHA20251123003L</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[65px] left-[340.75px] top-0 w-[194.336px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#364153] text-[16px] text-nowrap top-[20px] whitespace-pre">15:20:44</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[65px] left-[535.09px] top-0 w-[156.055px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">강투자</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[65px] left-[691.14px] top-0 w-[292.703px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[269.69px] not-italic text-[#155dfc] text-[16px] text-right top-[20px] translate-x-[-100%] w-[107px]">800,000,000</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute bg-blue-100 box-border content-stretch flex gap-[10px] items-center justify-center left-[66.71px] px-[12px] py-[4px] rounded-[999px] top-[19.75px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[14px] text-center text-nowrap whitespace-pre">완료</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[65px] left-[983.84px] top-0 w-[180.164px]" data-name="Table Cell">
      <Text21 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#4a5565] h-[32px] left-[68.8px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[16.5px] w-[72.398px]" data-name="Button">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[36.5px] not-italic text-[14px] text-center text-nowrap text-white top-[5.5px] translate-x-[-50%] whitespace-pre">상세보기</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[65px] left-[1164.01px] top-0 w-[209.992px]" data-name="Table Cell">
      <Button7 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[65px] left-0 top-[325.5px] w-[1374px]" data-name="Table Row">
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[340.75px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">SHA20251123002W</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[65px] left-[340.75px] top-0 w-[194.336px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#364153] text-[16px] text-nowrap top-[20px] whitespace-pre">14:55:18</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[65px] left-[535.09px] top-0 w-[156.055px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">오청약</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[65px] left-[691.14px] top-0 w-[292.703px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[268.86px] not-italic text-[#155dfc] text-[16px] text-right top-[20px] translate-x-[-100%] w-[120px]">1,200,000,000</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute bg-blue-100 box-border content-stretch flex gap-[10px] items-center justify-center left-[66.71px] px-[12px] py-[4px] rounded-[999px] top-[19.75px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[14px] text-center text-nowrap whitespace-pre">완료</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[65px] left-[983.84px] top-0 w-[180.164px]" data-name="Table Cell">
      <Text22 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#4a5565] h-[32px] left-[68.8px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[16.5px] w-[72.398px]" data-name="Button">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[36.5px] not-italic text-[14px] text-center text-nowrap text-white top-[5.5px] translate-x-[-50%] whitespace-pre">상세보기</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[65px] left-[1164.01px] top-0 w-[209.992px]" data-name="Table Cell">
      <Button8 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[65px] left-0 top-[390.5px] w-[1374px]" data-name="Table Row">
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[64.5px] left-0 top-0 w-[340.75px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">SHA20251123002M</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[64.5px] left-[340.75px] top-0 w-[194.336px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#364153] text-[16px] text-nowrap top-[20px] whitespace-pre">14:32:05</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[64.5px] left-[535.09px] top-0 w-[156.055px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[20px] whitespace-pre">송자산</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[64.5px] left-[691.14px] top-0 w-[292.703px]" data-name="Table Cell">
      <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[269.69px] not-italic text-[#155dfc] text-[16px] text-right top-[20px] translate-x-[-100%] w-[107px]">600,000,000</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute bg-blue-100 box-border content-stretch flex gap-[10px] items-center justify-center left-[66.71px] px-[12px] py-[4px] rounded-[999px] top-[19.75px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#8ec5ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[14px] text-center text-nowrap whitespace-pre">완료</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[64.5px] left-[983.84px] top-0 w-[180.164px]" data-name="Table Cell">
      <Text23 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#4a5565] h-[32px] left-[68.8px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[16.5px] w-[72.398px]" data-name="Button">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[36.5px] not-italic text-[14px] text-center text-nowrap text-white top-[5.5px] translate-x-[-50%] whitespace-pre">상세보기</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[64.5px] left-[1164.01px] top-0 w-[209.992px]" data-name="Table Cell">
      <Button9 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute h-[64.5px] left-0 top-[455.5px] w-[1374px]" data-name="Table Row">
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[520px] left-0 top-[57px] w-[1374px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[577px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Text24() {
  return <div className="h-[17px] shrink-0 w-[8.07px]" data-name="Text" />;
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-0 top-[-0.5px]">
      <p className="font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">
        <span>{`총 `}</span>
        <span className="font-['Pretendard_GOV:Bold',sans-serif] text-[#155dfc]">8</span>
        <span>{` 건`}</span>
      </p>
      <Text24 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.305px]">
        <Frame2 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white h-[34px] opacity-50 relative rounded-[10px] shrink-0 w-[50.203px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34px] relative w-[50.203px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[25.5px] not-italic text-[#364153] text-[14px] text-center text-nowrap top-[6.5px] translate-x-[-50%] whitespace-pre">이전</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#155dfc] h-[32px] relative rounded-[10px] shrink-0 w-[32.07px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[32.07px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[16.5px] not-italic text-[14px] text-center text-nowrap text-white top-[5.5px] translate-x-[-50%] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white h-[34px] relative rounded-[10px] shrink-0 w-[34.07px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34px] relative w-[34.07px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[17.5px] not-italic text-[#364153] text-[14px] text-center text-nowrap top-[6.5px] translate-x-[-50%] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white h-[34px] relative rounded-[10px] shrink-0 w-[34.07px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34px] relative w-[34.07px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[17.5px] not-italic text-[#364153] text-[14px] text-center text-nowrap top-[6.5px] translate-x-[-50%] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-white h-[34px] relative rounded-[10px] shrink-0 w-[34.07px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34px] relative w-[34.07px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[17.5px] not-italic text-[#364153] text-[14px] text-center text-nowrap top-[6.5px] translate-x-[-50%] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-white h-[34px] relative rounded-[10px] shrink-0 w-[34.07px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34px] relative w-[34.07px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[17.5px] not-italic text-[#364153] text-[14px] text-center text-nowrap top-[6.5px] translate-x-[-50%] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="basis-0 bg-white grow h-[34px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-[25.5px] not-italic text-[#364153] text-[14px] text-center text-nowrap top-[6.5px] translate-x-[-50%] whitespace-pre">다음</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[34px] relative shrink-0 w-[304.758px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[34px] items-center relative w-[304.758px]">
        <Button10 />
        <Button11 />
        <Button12 />
        <Button13 />
        <Button14 />
        <Button15 />
        <Button16 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[34px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-gray-50 h-[67px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[67px] items-start pb-0 pt-[17px] px-[24px] relative w-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function SubscriptionTable() {
  return (
    <div className="bg-white h-[741px] relative rounded-[10px] shrink-0 w-full" data-name="SubscriptionTable">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[741px] items-start p-px relative w-full">
          <Container15 />
          <Table />
          <Container19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Container12 />
      <SubscriptionTable />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col gap-[24px] items-start left-[368px] pb-[130px] pt-[32px] px-[32px] top-[64px] w-[1440px]" data-name="App">
      <Frame />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.922px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] whitespace-pre">청약 관리</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-[#313654] box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[223px]" data-name="Button">
      <Icon2 />
      <Text25 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button17 />
    </div>
  );
}

function Icon3() {
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

function Text26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.922px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">환매 관리</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon3 />
      <Text26 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button18 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_305)" id="Icon">
          <path d={svgPaths.p363df2c0} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_305">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[24px] relative shrink-0 w-[101.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[101.406px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">실시간 모니터링</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon4 />
      <Text27 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button19 />
    </div>
  );
}

function Icon5() {
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

function Text28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.922px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">고객 관리</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon5 />
      <Text28 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button20 />
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

function Text29() {
  return (
    <div className="h-[24px] relative shrink-0 w-[73.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[73.75px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">시스템 설정</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon6 />
      <Text29 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button21 />
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
    <div className="absolute bg-[#1e2939] h-[1343px] left-0 top-[64px] w-[256px]" data-name="Sidebar">
      <div className="box-border content-stretch flex flex-col h-[1343px] items-start overflow-clip pb-0 pl-[16px] pr-[17px] pt-[16px] relative rounded-[inherit] w-[256px]">
        <List />
      </div>
      <div aria-hidden="true" className="absolute border-[#364153] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[13.828px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">신</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Text30 />
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

function Container21() {
  return (
    <div className="h-[32px] relative shrink-0 w-[222.617px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[32px] items-center relative w-[222.617px]">
        <Container20 />
        <Heading1 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#bedbff] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">관리자:</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[41.484px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] whitespace-pre">홍길동</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 bg-[#1447e6] grow h-[40px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center px-[16px] py-0 relative w-full">
          <Text31 />
          <Text32 />
        </div>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-white h-[40px] relative rounded-[10px] shrink-0 w-[87.313px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[87.313px]">
        <p className="absolute font-['Pretendard_GOV:Medium',sans-serif] leading-[24px] left-[44px] not-italic text-[#155dfc] text-[16px] text-center text-nowrap top-[7.5px] translate-x-[-50%] whitespace-pre">로그아웃</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[40px] relative shrink-0 w-[230.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[40px] items-center relative w-[230.344px]">
        <Container22 />
        <Button22 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[63px] items-center justify-between px-[32px] py-0 relative w-full">
          <Container21 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#004094] box-border content-stretch flex flex-col h-[64px] items-start left-0 pb-px pt-0 px-0 top-0 w-[1920px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#003478] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container24 />
    </div>
  );
}

export default function ShaPoC() {
  return (
    <div className="bg-gray-100 relative size-full" data-name="SHA-PoC-07.청약관리">
      <App />
      <Sidebar />
      <Header />
    </div>
  );
}