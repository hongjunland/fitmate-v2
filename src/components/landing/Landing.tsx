import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import DefaultImg from "assets/default.png";
export default function Landing() {
  return (
    <Section>
      <LandingSectionUnit
        linkSrc="/board"
        imgSrc="https://www.apple.com/kr/home/ay/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_largetall_2x.jpg"
      />
      <LandingSectionUnit
        linkSrc="/board"
        imgSrc="https://www.apple.com/kr/home/ay/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_largetall_2x.jpg"
      />
      <LandingSectionUnit
        linkSrc="/board"
        imgSrc="https://www.apple.com/kr/home/ay/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_largetall_2x.jpg"
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
      <UnitLink to={linkSrc}></UnitLink>
      <UnitCopyWrapper />
      <UnitImageWrapper src={imgSrc} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 692px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const UnitLink = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
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

interface UnitImageWrapperProps {
  src?: string;
}
function UnitImageWrapper({ src }: UnitImageWrapperProps) {
  return (
    <UnitImageWrapperWrapper>
      <Figure src={src}>UnitImageWrapper</Figure>
    </UnitImageWrapperWrapper>
  );
}

const UnitImageWrapperWrapper = styled.div`
  position: absolute;
  overflow: visible;
  z-index: 1;
  height: 100%;
  width: 100%;
`;

const Figure = styled.figure<{ src?: string }>`
  background-image: url(${(props) => (props.src ? props.src : DefaultImg)});
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  z-index: 1;
  position: absolute;
  margin: 0;
`;
