import styled from "@emotion/styled";
import { ReactNode } from "react";
import Footer from "./Footer";

interface Props {
  header: ReactNode;
  children: ReactNode;
}

export default function PageTemplate({ header, children }: Props) {
  return (
    <Container>
      {header}
      <Main>{children}</Main>
      <Footer/>
    </Container>
  );
}
const Container = styled.div`
  
`;

const Main = styled.main`
  padding-top: 60px;
`;
