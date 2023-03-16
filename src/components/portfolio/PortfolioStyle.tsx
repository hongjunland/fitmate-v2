import styled from "@emotion/styled";
import { styleList } from "components/dummy/portfolio";
import StyleList from "./StyleList";
export default function PortfolioStyle() {
  return (
    <Container>
      <StyleListWrapper>
        <StyleList styleList={styleList}/>
      </StyleListWrapper>
    </Container>
  );
}

const Container = styled.div``;

const StyleListWrapper = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  img {
    width: 100%;
    height: 100%;
  }
  figure{
    width: 125px;
    height: 150px;
  }
`;