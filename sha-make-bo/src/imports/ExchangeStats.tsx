function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[20px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e2939] text-[20px] text-nowrap top-0 whitespace-pre">💱</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[107.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[107.813px]">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1e2939] text-[18px] text-nowrap top-[-0.5px] whitespace-pre">sKRW 환전 통계</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[41px] items-center pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text />
      <Text1 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">총 환전 건수 (금일)</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#00a63e] text-[24px] text-nowrap top-[-0.5px] whitespace-pre">80건</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.5px] whitespace-pre">매입용</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">42 건</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-green-100 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-px pt-[13px] px-[13px] relative size-full">
          <Container3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[-0.5px] whitespace-pre">환매용</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">38 건</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-green-100 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-px pt-[13px] px-[13px] relative size-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[70px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-green-50 h-[172px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-green-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[172px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container2 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[119.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[119.844px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">총 환전 금액 (금일)</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[129.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[129.063px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">80,243,362,849원</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[92.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[92.188px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">평균 환전 시간</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.922px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">3분 45초</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[92.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[92.188px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">총 수수료 수익</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[96.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[96.797px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#00a63e] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">20,060,841원</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[147px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[73.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[73.75px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">시스템 상태</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[18px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#00a63e] text-[18px] text-nowrap top-0 whitespace-pre">✅</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#00a63e] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">정상</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[28px] relative shrink-0 w-[49.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[28px] items-center relative w-[49.656px]">
        <Text9 />
        <Text10 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text11 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-blue-50 h-[62px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[62px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[413px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container14 />
      <Container16 />
    </div>
  );
}

export default function ExchangeStats() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="ExchangeStats">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Heading />
          <Container17 />
        </div>
      </div>
    </div>
  );
}