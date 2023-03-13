import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Props {
  header: ReactNode;
  children: ReactNode;
}

function PageTemplate({ header, children }: Props) {
  return (
    <Container>
      {header}
      <main>{children}</main>
    </Container>
  );
}
const Container = styled.div`
  
`;
