import imgImage from "./9e68f8793e6f67c0fd5130f78ea97da9bed1c275.png";
import imgImage1 from "./2108354b80ceaa608fa1fc4709e4197af793e1cb.png";
import imgImage2 from "./a474695a0abc603be21cff6b77f41bb42daf2c78.png";
import imgImage3 from "./96badee1e513008ebf5530cdd0f07ca6fdd47237.png";

function Paragraph() {
  return (
    <div className="absolute font-normal h-[128px] leading-[32px] left-0 text-[#574638] text-[24px] top-[222.88px] w-[501.33px]" data-name="Paragraph">
      <p className="absolute font-['Newsreader:Regular',sans-serif] left-0 top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        For over three years, I’ve hosted a monthly dinner in
      </p>
      <p className="absolute font-['Newsreader:Italic',sans-serif] italic left-[25.06px] top-[36px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Bed–Stuy
      </p>
      <p className="absolute font-['Newsreader:Regular',sans-serif] left-0 top-[36px]" style={{ fontFeatureSettings: "'dlig'" }}>
        — a long table of eight, a seasonal menu, and an evening to slow down and connect over food and good conversation.
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#2a1f16] h-[48px] left-0 rounded-[9999px] text-[#f4eee2] top-0 w-[168.4px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Newsreader:Regular',sans-serif] left-[72.2px] top-[12px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Save me a seat
      </p>
      <p className="-translate-x-1/2 absolute font-['Newsreader:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] left-[132.4px] top-[12px]" style={{ fontFeatureSettings: "'dlig'" }}>
        →
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute font-normal h-[48px] leading-[24px] left-0 text-[16px] text-center top-[390.88px] w-[501.33px]" data-name="Container">
      <Button />
      <p className="-translate-x-1/2 absolute font-['Newsreader:Italic',sans-serif] italic left-[279.94px] text-[#574638] top-[12px]" style={{ fontFeatureSettings: "'dlig'" }}>
        see what we’ve been cooking
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="[word-break:break-word] absolute h-[438.88px] left-0 top-0 w-[501.33px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Kalam:Regular',sans-serif] leading-[36px] left-[-0.31px] not-italic text-[#a04e33] text-[30px] top-[-8.75px]" style={{ fontFeatureSettings: "'dlig'" }}>
        welcome —
      </p>
      <div className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[0] left-0 text-[#2a1f16] text-[72px] top-[52px] tracking-[-1.8px]" style={{ fontFeatureSettings: "'dlig'" }}>
        <p className="leading-[73.44px] mb-0">Come eat with</p>
        <p className="leading-[73.44px]">us.</p>
      </div>
      <Paragraph />
      <Container5 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#ebe2d0] h-[438.13px] left-[-3.01px] overflow-clip rounded-[2px] shadow-[0px_20px_60px_-20px_rgba(42,31,22,0.35)] top-[-2.4px] w-[352.68px]" data-name="Background">
      <div className="absolute h-[438.13px] left-0 top-0 w-[352.68px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[433.33px] left-[541.33px] top-[5.55px] w-[346.66px]" data-name="Container">
      <Background />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[438.88px] left-[32px] top-[160px] w-[888px]" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[694.88px] left-0 top-0 w-[952px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container10() {
  return <div className="absolute h-[48px] left-[455.28px] top-0 w-0" data-name="Container" />;
}

function Heading() {
  return (
    <div className="absolute h-[96px] left-0 top-[48px] w-[498px]" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#2a1f16] text-[48px] top-0 tracking-[-1.2px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        A space for community,
      </p>
      <Container10 />
      <p className="[word-break:break-word] absolute font-['Newsreader:Italic',sans-serif] font-normal italic leading-[48px] left-0 text-[#574638] text-[48px] top-[48px] tracking-[-1.2px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        over a long dinner.
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal h-[376px] leading-[0] left-0 text-[#574638] text-[20px] top-[176px] w-[498px] whitespace-nowrap" data-name="Container">
      <div className="absolute left-0 top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        <p className="leading-[28px] mb-0">Brooklyn Suppers (formerly Family Meal) started a little over</p>
        <p className="leading-[28px] mb-0">three years ago as a way to build community and bring people</p>
        <p className="leading-[28px] mb-0">together over food and thoughtful conversation. It’s grown</p>
        <p className="leading-[28px]">into a monthly rhythm I look forward to every month.</p>
      </div>
      <div className="absolute left-0 top-[132px]" style={{ fontFeatureSettings: "'dlig'" }}>
        <p className="leading-[28px] mb-0">Each dinner has a theme. Sometimes it’s a region — a</p>
        <p className="leading-[28px] mb-0">Spanish-and-Portuguese evening with vermouth and paella,</p>
        <p className="leading-[28px] mb-0">or a Southern menu drawn from Edna Lewis and Sean Brock.</p>
        <p className="leading-[28px] mb-0">Sometimes it’s a season — the first ramps and fava beans of</p>
        <p className="leading-[28px]">spring, or whatever’s peak at the market that week.</p>
      </div>
      <div className="absolute left-0 top-[292px]" style={{ fontFeatureSettings: "'dlig'" }}>
        <p className="leading-[28px] mb-0">Eight chairs around one table. Three or four courses, paced</p>
        <p className="leading-[28px] mb-0">slowly. Wine pairings throughout. You arrive around seven</p>
        <p className="leading-[28px]">and most people don’t leave until midnight.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[552px] left-0 top-0 w-[498px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Kalam:Regular',sans-serif] leading-[36px] left-[-0.31px] not-italic text-[#a04e33] text-[30px] top-[-8.69px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        what it is
      </p>
      <Heading />
      <Container11 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#ebe2d0] h-[357.45px] left-[-3.66px] overflow-clip rounded-[2px] shadow-[0px_20px_60px_-20px_rgba(42,31,22,0.3)] top-[-2.73px] w-[271.31px]" data-name="Background">
      <div className="absolute h-[357.45px] left-0 top-0 w-[271.31px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[488px] left-[624px] top-[64px] w-[264px]" data-name="Container">
      <Background1 />
      <p className="[word-break:break-word] absolute font-['Kalam:Regular',sans-serif] leading-[28px] left-[7.78px] not-italic text-[#8c7b6b] text-[20px] top-[365.76px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        the table, in good company
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[552px] left-[32px] top-[80px] w-[888px]" data-name="Container">
      <Container9 />
      <Container12 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[744px] left-0 top-[694.88px] w-[952px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#ebe2d0] h-[461.9px] left-[-3.95px] overflow-clip rounded-[2px] shadow-[0px_20px_60px_-20px_rgba(42,31,22,0.3)] top-[-2.95px] w-[349.91px]" data-name="Background">
      <div className="absolute h-[461.9px] left-0 top-0 w-[349.91px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[456px] left-0 top-0 w-[342px]" data-name="Container">
      <Background2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute font-['Newsreader:Regular',sans-serif] font-normal h-[56px] leading-[28px] left-[30.26px] text-[20px] top-0 w-[389.74px]" data-name="Container">
      <p className="absolute left-0 text-[#2a1f16] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        7pm-ish.
      </p>
      <p className="absolute left-0 text-[#574638] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Come hungry. There’s usually bread and something to start.
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[420px]" data-name="ListItem">
      <p className="absolute font-['Kalam:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#a04e33] text-[24px] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        ~
      </p>
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute font-['Newsreader:Regular',sans-serif] font-normal h-[56px] leading-[28px] left-[30.26px] text-[20px] top-0 w-[389.74px]" data-name="Container">
      <p className="absolute left-0 text-[#2a1f16] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        A themed menu
      </p>
      <p className="absolute left-0 text-[#574638] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        , three or four courses, served family-style.
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[56px] left-0 top-[76px] w-[420px]" data-name="ListItem">
      <p className="absolute font-['Kalam:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#a04e33] text-[24px] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        ~
      </p>
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute font-['Newsreader:Regular',sans-serif] font-normal h-[56px] leading-[28px] left-[30.26px] text-[20px] top-0 w-[389.74px]" data-name="Container">
      <p className="absolute left-0 text-[#2a1f16] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Wine pairings
      </p>
      <p className="absolute left-0 text-[#574638] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        throughout. Bring a bottle if you’d like to share.
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[56px] left-0 top-[152px] w-[420px]" data-name="ListItem">
      <p className="absolute font-['Kalam:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#a04e33] text-[24px] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        ~
      </p>
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute font-['Newsreader:Regular',sans-serif] font-normal h-[56px] leading-[28px] left-[30.26px] text-[20px] top-0 w-[389.74px]" data-name="Container">
      <p className="absolute left-0 text-[#2a1f16] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Around midnight,
      </p>
      <p className="absolute left-0 text-[#574638] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        the last of us are still at the table. No rush.
      </p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute h-[56px] left-0 top-[228px] w-[420px]" data-name="ListItem">
      <p className="absolute font-['Kalam:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#a04e33] text-[24px] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        ~
      </p>
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute font-['Newsreader:Regular',sans-serif] font-normal h-[56px] leading-[28px] left-[30.26px] text-[20px] top-0 w-[389.74px]" data-name="Container">
      <p className="absolute left-0 text-[#2a1f16] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Bed–Stuy,
      </p>
      <p className="absolute left-0 text-[#574638] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Brooklyn. Exact address comes once you’re in.
      </p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="absolute h-[56px] left-0 top-[304px] w-[420px]" data-name="ListItem">
      <p className="absolute font-['Kalam:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#a04e33] text-[24px] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        ~
      </p>
      <Container21 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[360px] left-0 top-[176px] w-[420px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="[word-break:break-word] absolute h-[536px] left-[468px] top-0 w-[420px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Kalam:Regular',sans-serif] leading-[36px] left-[-0.31px] not-italic text-[#a04e33] text-[30px] top-[-7.33px]" style={{ fontFeatureSettings: "'dlig'" }}>
        what to expect
      </p>
      <div className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[0] left-0 text-[#2a1f16] text-[48px] top-[48px] tracking-[-1.2px]" style={{ fontFeatureSettings: "'dlig'" }}>
        <p className="leading-[48px] mb-0">A long evening,</p>
        <p className="leading-[48px]">mostly.</p>
      </div>
      <List />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[536px] left-[32px] top-0 w-[888px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[664px] left-0 top-[1438.88px] w-[952px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container23() {
  return (
    <div className="[word-break:break-word] absolute h-[172px] left-[32px] top-0 w-[672px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Kalam:Regular',sans-serif] leading-[36px] left-[-0.31px] not-italic text-[#a04e33] text-[30px] top-[-11.73px]" style={{ fontFeatureSettings: "'dlig'" }}>
        recent menus
      </p>
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#2a1f16] text-[48px] top-[48px] tracking-[-1.2px]" style={{ fontFeatureSettings: "'dlig'" }}>
        What we’ve been cooking.
      </p>
      <div className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[0] left-0 text-[#574638] text-[20px] top-[116px]" style={{ fontFeatureSettings: "'dlig'" }}>
        <p className="leading-[28px] mb-0">A look at the last couple of dinners — to give you a sense of how a typical evening</p>
        <p className="leading-[28px]">goes.</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#ebe2d0] h-[341.83px] left-0 overflow-clip top-0 w-[424.65px]" data-name="Background">
      <div className="absolute h-[341.83px] left-0 top-0 w-[424.65px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="[word-break:break-word] absolute h-[40.86px] left-[36.5px] top-[36.5px] w-[348.47px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Kalam:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#a04e33] text-[30px] top-[4.14px]" style={{ fontFeatureSettings: "'dlig'" }}>
        May
      </p>
      <p className="absolute font-['Newsreader:Italic',sans-serif] font-normal italic leading-[20px] left-[238.12px] text-[#8c7b6b] text-[14px] top-[12.5px]" style={{ fontFeatureSettings: "'dlig'" }}>
        a Brooklyn Supper
      </p>
    </div>
  );
}

function Background5() {
  return <div className="absolute bg-[rgba(42,31,22,0.1)] h-[5.86px] left-[39.41px] top-[245.23px] w-[347.98px]" data-name="Background" />;
}

function ListItem5() {
  return (
    <div className="absolute h-[26.86px] left-0 top-0 w-[348.27px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-[4.71px]" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.97px] text-[#2a1f16] top-[2.79px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Mussels escabeche
      </p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="absolute h-[26.86px] left-[0.42px] top-[30px] w-[348.27px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-[4.7px]" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.97px] text-[#2a1f16] top-[0.59px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Patatas fritas con jamón ibérico y piparras
      </p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="absolute h-[26.86px] left-[0.84px] top-[59.99px] w-[348.27px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-[4.71px]" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.97px] text-[#2a1f16] top-[3.39px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Paella mixta
      </p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="absolute h-[26.86px] left-[1.26px] top-[89.99px] w-[348.27px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-[4.71px]" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.97px] text-[#2a1f16] top-[0.82px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Roasted young potatoes with ramp aioli
      </p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="absolute h-[26.86px] left-[1.68px] top-[119.99px] w-[348.27px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-[4.7px]" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.97px] text-[#2a1f16] top-[0.18px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Fava beans with snap peas, mint, and pecorino
      </p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="absolute h-[26.86px] left-[2.1px] top-[149.99px] w-[348.27px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-[4.7px]" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.96px] text-[#2a1f16] top-[3.29px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Broccoli rabe
      </p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="absolute h-[26.86px] left-[2.52px] top-[179.98px] w-[348.27px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-[4.71px]" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.96px] text-[#2a1f16] top-[0.77px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Basque cheesecake with kumquat honey
      </p>
    </div>
  );
}

function List1() {
  return (
    <div className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal h-[206.84px] leading-[22px] left-[39.7px] text-[16px] top-[266.23px] w-[350.79px] whitespace-nowrap" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[561.56px] left-[4.69px] top-[335.96px] w-[427.72px]" data-name="Container">
      <Container26 />
      <p className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[36px] left-[37.22px] text-[#2a1f16] text-[30px] top-[88.5px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>{`Spain & Portugal`}</p>
      <p className="[word-break:break-word] absolute font-['Newsreader:Italic',sans-serif] font-normal italic leading-[24px] left-[37.78px] text-[#574638] text-[16px] top-[128.49px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        with vermouth, sherry, Iberian whites
      </p>
      <div className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[0] left-[38.39px] text-[#574638] text-[15px] top-[172.49px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        <p className="leading-[24.375px] mb-0">Built around the arrival of ramps, fava beans, spring</p>
        <p className="leading-[24.375px]">onions, and young potatoes.</p>
      </div>
      <Background5 />
      <List1 />
      <p className="[word-break:break-word] absolute font-['Kalam:Regular',sans-serif] leading-[28px] left-[42.76px] not-italic text-[#8c7b6b] text-[20px] top-[490.69px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        basque cheesecake, just before
      </p>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[rgba(235,226,208,0.6)] h-[897.53px] left-[-6.2px] overflow-clip rounded-[2px] shadow-[0px_20px_60px_-30px_rgba(42,31,22,0.35)] top-[-2.89px] w-[432.41px]" data-name="Background">
      <Background4 />
      <Container25 />
    </div>
  );
}

function Container28() {
  return (
    <div className="[word-break:break-word] absolute h-[42.07px] left-[45.77px] top-[36.62px] w-[348.58px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Kalam:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#a04e33] text-[30px] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        April
      </p>
      <p className="absolute font-['Newsreader:Italic',sans-serif] font-normal italic leading-[20px] left-[237.99px] text-[#8c7b6b] text-[14px] top-[16.65px]" style={{ fontFeatureSettings: "'dlig'" }}>
        a Brooklyn Supper
      </p>
    </div>
  );
}

function Background7() {
  return <div className="absolute bg-[rgba(42,31,22,0.1)] h-[7.07px] left-[42.31px] top-[269.71px] w-[347.96px]" data-name="Background" />;
}

function ListItem12() {
  return (
    <div className="absolute h-[28.07px] leading-[22px] left-[4.05px] top-0 w-[348.33px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.96px] text-[#2a1f16] top-[0.4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Pimento cheese and crackers
      </p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="absolute h-[28.07px] leading-[22px] left-[3.52px] top-[29.99px] w-[348.33px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.97px] text-[#2a1f16] top-[0.4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Fennel pickled shrimp
      </p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="absolute h-[28.07px] leading-[22px] left-[3px] top-[59.99px] w-[348.33px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.96px] text-[#2a1f16] top-[0.4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Pickled spring vegetables
      </p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="absolute h-[50.07px] left-[2.09px] top-[89.98px] w-[348.71px]" data-name="ListItem">
      <p className="absolute leading-[22px] left-0 text-[#8c7b6b] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <div className="absolute leading-[0] left-[22.97px] text-[#2a1f16] top-[0.4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        <p className="leading-[22px] mb-0">Fried chicken with honey-fermented kumquats</p>
        <p className="leading-[22px]">and hot honey</p>
      </div>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="absolute h-[28.07px] leading-[22px] left-[1.57px] top-[141.98px] w-[348.33px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.96px] text-[#2a1f16] top-[0.4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Collard greens
      </p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="absolute h-[28.07px] leading-[22px] left-[1.04px] top-[171.97px] w-[348.33px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.97px] text-[#2a1f16] top-[0.4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Skillet cornbread
      </p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="absolute h-[28.07px] leading-[22px] left-[0.52px] top-[201.97px] w-[348.33px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.97px] text-[#2a1f16] top-[0.4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Mac and cheese
      </p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="absolute h-[28.07px] leading-[22px] left-0 top-[231.96px] w-[348.33px]" data-name="ListItem">
      <p className="absolute left-0 text-[#8c7b6b] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        —
      </p>
      <p className="absolute left-[22.96px] text-[#2a1f16] top-[0.4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Strawberry rhubarb pavlova
      </p>
    </div>
  );
}

function List2() {
  return (
    <div className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal h-[260.03px] left-[37.53px] text-[16px] top-[290.71px] w-[352.38px] whitespace-nowrap" data-name="List">
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
      <ListItem16 />
      <ListItem17 />
      <ListItem18 />
      <ListItem19 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[639.36px] left-0 top-0 w-[430.97px]" data-name="Container">
      <Container28 />
      <p className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[36px] left-[44.86px] text-[#2a1f16] text-[30px] top-[88.61px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        Southern
      </p>
      <p className="[word-break:break-word] absolute font-['Newsreader:Italic',sans-serif] font-normal italic leading-[24px] left-[44.37px] text-[#574638] text-[16px] top-[128.61px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        with champagne and sparkling wines
      </p>
      <div className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[0] left-[42.74px] text-[#574638] text-[15px] top-[172.6px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        <p className="leading-[24.375px] mb-0">A classic Southern menu drawn from Edna Lewis,</p>
        <p className="leading-[24.375px] mb-0">Scott Peacock, and Sean Brock — Southern dishes you</p>
        <p className="leading-[24.375px]">don’t see often in New York.</p>
      </div>
      <Background7 />
      <List2 />
      <p className="[word-break:break-word] absolute font-['Kalam:Regular',sans-serif] leading-[28px] left-[36.72px] not-italic text-[#8c7b6b] text-[20px] top-[570.18px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        cooked with @ajbesser
      </p>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[rgba(235,226,208,0.6)] h-[639.36px] left-[462.52px] overflow-clip rounded-[2px] shadow-[0px_20px_60px_-30px_rgba(42,31,22,0.35)] top-[-3.62px] w-[430.97px]" data-name="Background">
      <Container27 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[891.75px] left-[32px] top-[236px] w-[888px]" data-name="Container">
      <Background3 />
      <Background6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[1343.75px] left-0 top-[2102.88px] w-[952px]" data-name="Container">
      <Container23 />
      <Container24 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Newsreader:Italic',sans-serif] font-normal italic leading-[24px] left-[326.98px] text-[#574638] text-[16px] text-center top-[1191.75px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        A new menu every month, shaped by the season and whatever’s good at the market that week.
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="[word-break:break-word] absolute h-[272px] left-0 top-0 w-[342px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Kalam:Regular',sans-serif] leading-[36px] left-[-0.31px] not-italic text-[#a04e33] text-[30px] top-[-5.97px]" style={{ fontFeatureSettings: "'dlig'" }}>
        come over
      </p>
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[48px] left-0 text-[#2a1f16] text-[48px] top-[48px] tracking-[-1.2px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Save me a seat.
      </p>
      <div className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[0] left-0 text-[#574638] text-[20px] top-[120px]" style={{ fontFeatureSettings: "'dlig'" }}>
        <p className="leading-[28px] mb-0">Leave your details below and I’ll write</p>
        <p className="leading-[28px] mb-0">back when the next dinner is set. Seats are</p>
        <p className="leading-[28px] mb-0">limited to eight, so I read every note</p>
        <p className="leading-[28px]">personally before sending an invite.</p>
      </div>
      <p className="absolute font-['Newsreader:Italic',sans-serif] font-normal italic leading-[24px] left-0 text-[#8c7b6b] text-[16px] top-[248px]" style={{ fontFeatureSettings: "'dlig'" }}>
        If we’ve cooked for you before, welcome back.
      </p>
    </div>
  );
}

function Label() {
  return (
    <div className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal h-[24px] leading-[24px] left-0 text-[16px] top-0 w-[498px] whitespace-nowrap" data-name="Label">
      <p className="absolute left-0 text-[#2a1f16] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        What should I call you?
      </p>
      <p className="absolute left-[161.02px] text-[#a04e33] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        *
      </p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[30px] relative shrink-0 w-[466px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Newsreader:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9ca3af] text-[18px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
          Your name
        </p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[rgba(235,226,208,0.4)] h-[54px] left-0 rounded-[6px] top-[30px] w-[498px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[17px] py-[13px] relative rounded-[inherit] size-full">
        <Container35 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(42,31,22,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[84px] left-0 top-0 w-[498px]" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal h-[24px] leading-[24px] left-0 text-[16px] top-0 w-[498px] whitespace-nowrap" data-name="Label">
      <p className="absolute left-0 text-[#2a1f16] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Phone (so I can text you the address)
      </p>
      <p className="absolute left-[248.57px] text-[#a04e33] top-[4px]" style={{ fontFeatureSettings: "'dlig'" }}>
        *
      </p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[30px] relative shrink-0 w-[466px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Newsreader:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9ca3af] text-[18px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
          555 555 5555
        </p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[rgba(235,226,208,0.4)] h-[54px] left-0 rounded-[6px] top-[30px] w-[498px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[17px] py-[13px] relative rounded-[inherit] size-full">
        <Container37 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(42,31,22,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[84px] left-0 top-[112px] w-[498px]" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[30px] relative shrink-0 w-[466px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Newsreader:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9ca3af] text-[18px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>{`Allergies, vegetarian, etc — or just say 'no'`}</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-[rgba(235,226,208,0.4)] h-[54px] left-0 rounded-[6px] top-[30px] w-[498px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[17px] py-[13px] relative rounded-[inherit] size-full">
        <Container39 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(42,31,22,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[84px] left-0 top-[224px] w-[498px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#2a1f16] text-[16px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>{`Anything you can't eat?`}</p>
      <Input2 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[86px] relative shrink-0 w-[466px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Newsreader:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9ca3af] text-[18px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
          A favorite ingredient, how you heard about us, a special occasion, or just say hi.
        </p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="absolute bg-[rgba(235,226,208,0.4)] h-[110px] left-0 rounded-[6px] top-[30px] w-[498px]" data-name="Textarea">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[17px] py-[13px] relative rounded-[inherit] size-full">
        <Container41 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(42,31,22,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[148px] left-0 top-[336px] w-[498px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#2a1f16] text-[16px] top-0 whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>{`Anything else you'd like to share?`}</p>
      <Textarea />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute h-[32px] left-0 top-[512px] w-[498px]" data-name="Label">
      <div className="absolute bg-[rgba(0,0,0,0)] border border-[#2a1f16] border-solid left-0 rounded-[3px] size-[16px] top-[12px]" data-name="Checkbox" />
      <p className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[24px] left-[28px] text-[#574638] text-[16px] top-[8px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        I’ve been to a supper before.
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="[word-break:break-word] absolute bg-[#2a1f16] font-normal h-[48px] leading-[24px] left-0 rounded-[9999px] text-[#f4eee2] text-[16px] text-center top-[12px] w-[161.32px] whitespace-nowrap" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Newsreader:Regular',sans-serif] left-[68.66px] top-[12px]" style={{ fontFeatureSettings: "'dlig'" }}>
        Send it over
      </p>
      <p className="-translate-x-1/2 absolute font-['Newsreader:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] left-[121.32px] top-[12px]" style={{ fontFeatureSettings: "'dlig'" }}>
        →
      </p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[60px] left-0 top-[572px] w-[498px]" data-name="Container">
      <Button1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[632px] left-0 top-0 w-[498px]" data-name="Container">
      <Container34 />
      <Container36 />
      <Container38 />
      <Container40 />
      <Label2 />
      <Container42 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[632px] left-[390px] top-0 w-[498px]" data-name="Container">
      <Container33 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[632px] left-[32px] top-0 w-[888px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[760px] left-0 top-[3446.63px] w-[952px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[30px] relative shrink-0 w-[489.77px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Newsreader:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9ca3af] text-[18px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
          you@somewhere.com
        </p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute bg-[#f4eee2] h-[54px] left-0 rounded-[9999px] top-0 w-[529.77px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[21px] py-[13px] relative rounded-[inherit] size-full">
        <Container45 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(42,31,22,0.15)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#2a1f16] h-[54px] left-[541.77px] rounded-[9999px] top-0 w-[114.23px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[24px] left-[57.12px] text-[#f4eee2] text-[16px] text-center top-[19px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        Subscribe
      </p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[54px] left-[56px] top-[221.25px] w-[656px]" data-name="Container">
      <Input3 />
      <Button2 />
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-[rgba(235,226,208,0.5)] h-[339.25px] left-[92px] rounded-[16px] top-0 w-[768px]" data-name="Background">
      <p className="[word-break:break-word] absolute font-['Kalam:Regular',sans-serif] leading-[36px] left-[55.69px] not-italic text-[#a04e33] text-[30px] top-[52.55px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        stay in touch
      </p>
      <p className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[40px] left-[56px] text-[#2a1f16] text-[36px] top-[108px] tracking-[-0.9px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        Hear when the next supper is set.
      </p>
      <p className="[word-break:break-word] absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[29.25px] left-[56px] text-[#574638] text-[18px] top-[164px] whitespace-nowrap" style={{ fontFeatureSettings: "'dlig'" }}>
        One short note a month with the upcoming menu and when RSVPs open — nothing more.
      </p>
      <Container44 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[467.25px] left-0 top-[4206.63px] w-[952px]" data-name="Container">
      <Background8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[4673.88px] left-0 top-0 w-[952px]" data-name="Container">
      <Container2 />
      <Container7 />
      <Container13 />
      <Container22 />
      <Container29 />
      <Container43 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[124px] left-0 top-0 w-[320px]" data-name="Container">
      <p className="absolute font-['Newsreader:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#2a1f16] text-[20px] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        Brooklyn Suppers
      </p>
      <div className="absolute font-['Newsreader:Italic',sans-serif] font-normal italic leading-[0] left-0 text-[#574638] text-[16px] top-[32px]" style={{ fontFeatureSettings: "'dlig'" }}>
        <p className="leading-[24px] mb-0">A long dinner, once a month, in Bed–Stuy. Hosted</p>
        <p className="leading-[24px]">since 2022.</p>
      </div>
      <p className="absolute font-['Kalam:Regular',sans-serif] leading-[28px] left-[-0.22px] not-italic text-[#8c7b6b] text-[20px] top-[93.2px]" style={{ fontFeatureSettings: "'dlig'" }}>
        — formerly Family Meal
      </p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute font-['Newsreader:Regular',sans-serif] font-normal h-[96px] left-[672.91px] top-0 w-[215.09px]" data-name="Container">
      <p className="absolute leading-[24px] left-0 text-[#574638] text-[16px] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        Instagram — @brooklynsuppers
      </p>
      <p className="absolute leading-[24px] left-[20.91px] text-[#574638] text-[16px] top-[32px]" style={{ fontFeatureSettings: "'dlig'" }}>
        hello@brooklynsuppers.com
      </p>
      <p className="absolute leading-[20px] left-[167.52px] text-[#8c7b6b] text-[14px] top-[76px]" style={{ fontFeatureSettings: "'dlig'" }}>
        © 2026
      </p>
    </div>
  );
}

function Container47() {
  return (
    <div className="[word-break:break-word] absolute h-[124px] left-[32px] top-[40px] w-[888px] whitespace-nowrap" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute border-[rgba(42,31,22,0.1)] border-solid border-t h-[221px] left-0 top-[4673.88px] w-[952px]" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[20px] leading-[20px] left-[582.02px] text-[14px] top-[4px] w-[337.98px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Newsreader:Regular',sans-serif] left-[18.62px] text-[#574638] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        About
      </p>
      <p className="-translate-x-1/2 absolute font-['Newsreader:Regular',sans-serif] left-[91.35px] text-[#574638] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        Menus
      </p>
      <p className="-translate-x-1/2 absolute font-['Newsreader:Regular',sans-serif] left-[184.53px] text-[#574638] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        Stay in touch
      </p>
      <p className="-translate-x-1/2 absolute font-['Newsreader:Italic','Noto_Sans:Italic','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] italic left-[293.27px] text-[#a04e33] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        Come over →
      </p>
    </div>
  );
}

function Container50() {
  return (
    <div className="[word-break:break-word] absolute font-normal h-[28px] left-0 text-center top-[12px] w-[952px] whitespace-nowrap" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Newsreader:Regular',sans-serif] leading-[28px] left-[105.35px] text-[#2a1f16] text-[20px] top-0" style={{ fontFeatureSettings: "'dlig'" }}>
        Brooklyn Suppers
      </p>
      <Container51 />
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(244,238,226,0.9)] h-[52px] left-0 top-[2232px] w-[952px]" data-name="Background">
      <Container50 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[4894.88px] left-0 top-0 w-[952px]" data-name="Container">
      <Container1 />
      <Container46 />
      <Background9 />
    </div>
  );
}

export default function ClarificationQuestionsComponent() {
  return (
    <div className="bg-white relative size-full" data-name="Clarification Questions Component">
      <Container />
    </div>
  );
}