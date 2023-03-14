import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function PortpolioUnit() {
  return (
    <Wrapper>
      <div />
      <div>
        <div>
          <HeadLine variant="h2">개인 포트폴리오</HeadLine>
          <SubHeadLine variant="h5">
            누군가를 스타일링하고 싶은 스타일리스트를 위해
          </SubHeadLine>
          <UnitLink to="/portpolio">작성하기 {">"}</UnitLink>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 5%;
  text-align: center;
  position: relative;
  z-index: 4;
  pointer-events: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Cafe24Ohsquare";
  }
`;

const HeadLine = styled(Typography)`
  padding-bottom: 0.5rem;
  text-shadow: 0.5px 0.5px 0.5px #000;
  color: #fff;
`;

const SubHeadLine = styled(Typography)`
  padding-bottom: 1rem;
  text-shadow: 0.2px 0.2px 0.2px #000;
  color: #fff;
`;
const UnitLink = styled(Link)`
  text-shadow: 0.1px 0.1px 0.1px #000;
  color: #77bcfc;
  font-weight: bold;
`;
