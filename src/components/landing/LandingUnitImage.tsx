import styled from "@emotion/styled";
import DefaultImg from "assets/default.png";
interface Props {
  src?: string;
}
export default function UnitImage({ src }: Props) {
  return (
    <Wrapper>
      <Figure src={src} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
  background-repeat: no-repeat;
  z-index: 1;
  position: absolute;
  margin: 0;
`;
