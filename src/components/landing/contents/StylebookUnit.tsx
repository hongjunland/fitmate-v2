import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function StylebookUnit() {
  return (
    <Wrapper>
      <HeadLine variant="h2">스타일북</HeadLine>
      <SubHeadLine variant="h5">
        어울리는 패션룩을 찾고 싶은 모든 이들에게
      </SubHeadLine>
      <UnitLink to="/stylebook">더 알아보기 {">"}</UnitLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 10%;
  text-align: center;
  position: relative;
  z-index: 4;
  pointer-events: none;
  text-shadow: 0.5px 0.5px 0.5px #fff;
  color: #000;
  grid-template-columns: repeat(3, 1fr);
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
`;

const SubHeadLine = styled(Typography)`
  padding-bottom: 1rem;
`;
const UnitLink = styled(Link)`
  text-shadow: 0.1px 0.1px 0.1px #fff;
  color: #0d7ce4;
  font-weight: bold;
`;
