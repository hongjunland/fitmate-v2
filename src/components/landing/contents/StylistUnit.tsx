import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function StylistUnit() {
  return (
    <Wrapper>
        <div>
          <HeadLine variant="h2">스타일리스트</HeadLine>
          <SubHeadLine variant="h4">
            어울리는 코디를 찾고 싶은 모든 이들에게
          </SubHeadLine>
          <UnitLink to="/stylist">더 알아보기 {">"}</UnitLink>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 10%;
  text-align: center;
  position: relative;
  z-index: 4;
  pointer-events: none;
  color: #000;
  display: grid;
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
  color: #0d7ce4;
  font-weight: bold;
`;
