function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[20px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e2939] text-[20px] text-nowrap top-0 whitespace-pre">🔗</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[147.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[147.5px]">
        <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1e2939] text-[18px] text-nowrap top-[-0.5px] whitespace-pre">블록체인 트랜잭션 통계</p>
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
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">최근 블록 높이</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#155dfc] text-[20px] text-nowrap top-0 whitespace-pre">#2,847,563</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-0.5px] whitespace-pre">총 트랜잭션 (누적)</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard_GOV:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#155dfc] text-[20px] text-nowrap top-0 whitespace-pre">147,285건</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[52px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-blue-50 h-[86px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-blue-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[86px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return <div className="absolute bg-[#00c950] left-0 rounded-[1.67772e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[89.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[89.703px]">
        <Text2 />
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">Mint (발행)</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[64.531px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[65px] not-italic text-[#101828] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">42,158 건</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return <div className="absolute bg-[#fb2c36] left-0 rounded-[1.67772e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[91.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[91.5px]">
        <Text5 />
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">Burn (소각)</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[64.531px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[65px] not-italic text-[#101828] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">38,085 건</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return <div className="absolute bg-[#2b7fff] left-0 rounded-[1.67772e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[105.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[105.719px]">
        <Text8 />
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">NAV Update</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[41.484px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[42px] not-italic text-[#101828] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">365 건</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text9 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return <div className="absolute bg-[#ad46ff] left-0 rounded-[1.67772e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[70.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[70.102px]">
        <Text11 />
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">Rebase</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[64.531px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[24px] left-[65px] not-italic text-[#101828] text-[16px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">66,677 건</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[200px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.578px]">
        <p className="absolute font-['Pretendard_GOV:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">금일 트랜잭션</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[28px] relative shrink-0 w-[51.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[51.859px]">
        <p className="absolute font-['Pretendard_GOV:SemiBold',sans-serif] leading-[28px] left-[52px] not-italic text-[#155dfc] text-[20px] text-nowrap text-right top-0 translate-x-[-100%] whitespace-pre">147 건</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-gray-50 h-[62px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[62px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[380px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container12 />
      <Container14 />
    </div>
  );
}

export default function BlockchainStats() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="BlockchainStats">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Heading />
          <Container15 />
        </div>
      </div>
    </div>
  );
}