import styled from "@emotion/styled";
import LandingUnit from "./LandingUnit";
export default function Landing() {
  return (
    <Section>
      <LandingUnit
        linkSrc="/board"
        imgSrc="https://static.wixstatic.com/media/ad420a_a6fde3feab894f6cae6bf59d119fc863~mv2.jpg/v1/fill/w_1355,h_729,al_c,q_85,enc_auto/ad420a_a6fde3feab894f6cae6bf59d119fc863~mv2.jpg"
        content={<UnitCopyWrapper />}
      />
      <LandingUnit
        linkSrc="/board"
        imgSrc="https://www.webex.com/content/dam/wbx/us/images/rebrand/meeting043021herolarge.jpg"
        content={<UnitCopyWrapper />}
      />
      <LandingUnit
        linkSrc="/board"
        imgSrc="https://static.wixstatic.com/media/84770f_b8a2d0fcac104f88a14d95f999540efb~mv2.jpg/v1/fill/w_979,h_527,al_c,q_85,enc_auto/84770f_b8a2d0fcac104f88a14d95f999540efb~mv2.jpg"
        content={<UnitCopyWrapper />}
      />
    </Section>
  );
}

const Section = styled.section`
  height: 100%;
`;

interface UnitCopyWrapperProps {}
function UnitCopyWrapper({}: UnitCopyWrapperProps) {
  return <UnitCopyWrapperWrapper>UnitCopyWrapper</UnitCopyWrapperWrapper>;
}

const UnitCopyWrapperWrapper = styled.div`
  padding-top: 55px;
  text-align: center;
  position: relative;
  z-index: 4;
  pointer-events: none;
`;
