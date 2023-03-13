import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import DefaultImg from "assets/default.png";
export default function Landing() {
  return (
    <Section>
      <LandingSectionUnit
        linkSrc="/"
        imgSrc="https://www.apple.com/kr/iphone-14-pro/"
      />
    </Section>
  );
}

const Section = styled.section``;
interface LandingSectionUnitProps {
  imgSrc?: string;
  linkSrc: string;
}
function LandingSectionUnit({ imgSrc, linkSrc }: LandingSectionUnitProps) {
  return (
    <Wrapper>
      <UnitLink to={linkSrc}>&nbsp</UnitLink>
      <UnitCopyWrapper />
      <UnitImageWrapper src={imgSrc} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: relative;
  height: 382px;
`;

const UnitLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: inherit;
  z-index: 3;
`;

interface UnitCopyWrapperProps {}
function UnitCopyWrapper({}: UnitCopyWrapperProps) {
  return <UnitCopyWrapperWrapper></UnitCopyWrapperWrapper>;
}

const UnitCopyWrapperWrapper = styled.div`
  padding-top: 55px;
  text-align: center;
  position: relative;
  flex-grow: 0;
  z-index: 4;
  pointer-events: none;
`;

interface UnitImageWrapperProps {
  src?: string;
}
function UnitImageWrapper({ src }: UnitImageWrapperProps) {
  return (
    <UnitImageWrapperWrapper>
      <Figure src={src} >
        sds
      </Figure>
    </UnitImageWrapperWrapper>
  );
}

const UnitImageWrapperWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const Figure = styled.figure<{ src?: string }>`
  /* background-image: url(${(props) => (props.src ? props.src : DefaultImg)}); */
  background-image: black;
  width: 1800px;
  height: 382px;
  background-size: 1800px 382px;
`;
