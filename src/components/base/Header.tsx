import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
interface Props {
  navbar: ReactNode;
  usermenu: ReactNode;
}

export default function Header({ usermenu, navbar }: Props) {
  return (
    <header>
      <HeaderContainer maxWidth={false}>
        <Box>
          <Logo />
        </Box>
        {navbar}
        {usermenu}
      </HeaderContainer>
    </header>
  );
}
const LogoText = styled(Typography)``;
const HeaderContainer = styled(Container)`
  background-color: rgb(102, 103, 171);
  font-family: "LeferiPoint-WhiteObliqueA";
  display: flex;
  a {
    font-weight: bold;
    color: #d7dee6;
    text-decoration: none;
  }
  h5 {
    font-family: "LeferiPoint-WhiteObliqueA";
  }
`;

function Logo() {
  return (
    <>
      <Link to="/">
        <LogoText variant="h5">Fitmate</LogoText>
      </Link>
    </>
  );
}
