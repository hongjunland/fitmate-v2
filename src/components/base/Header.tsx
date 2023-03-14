import styled from "@emotion/styled";
import { Container} from "@mui/material";
import { ReactNode } from "react";
import Logo from "./Logo";
interface Props {
  navbar: ReactNode;
  usermenu: ReactNode;
}

export default function Header({ usermenu, navbar }: Props) {
  return (
    <HeaderContainer>
      <Container>
        <Wrapper>
          <Logo />
          {navbar}
          {usermenu}
        </Wrapper>
      </Container>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.header`
  background-color: rgb(102, 103, 171);
  position: fixed;
  width: 100%;
  min-width: 320px;
  z-index: 9999;
  height: 60px;
  a, h5 {
    color: #d7dee6;
    font-weight: bold;
    font-family: "LeferiPoint-WhiteObliqueA";
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`