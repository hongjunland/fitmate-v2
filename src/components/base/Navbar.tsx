import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import signedInState from "states/signedInState";
import { auth } from "../../firebaseConfig";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
export default function Navbar(): JSX.Element {
  const [signedIn, setSignedIn] = useRecoilState(signedInState);
  async function handleSignOut() {
    try {
      await auth.signOut();
      console.log("Sign-out successful.");
      setSignedIn(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Nav>
      <Container maxWidth={false}>
        <Box textAlign={"center"}>
          <Logo>
            <Link to="/">Fitmate</Link>
          </Logo>
        </Box>
        <Box>
          <NavList>
            <Stack direction="row" spacing={3} justifyContent="flex-end">
              {!signedIn && (
                <NavItem>
                  <Link to="/signin">sign in </Link>
                </NavItem>
              )}
              {!signedIn && (
                <NavItem>
                  <Link to="/signup">sign up </Link>
                </NavItem>
              )}
              {signedIn && (
                <NavItem>
                  <Link to="/" onClick={handleSignOut}>
                    sign out
                  </Link>
                </NavItem>
              )}
            </Stack>
          </NavList>
        </Box>
        <Box>
          <NavList>
            <Stack direction="row" spacing={3} justifyContent="center">
              <NavItem>
                <Link to="/boardList">board</Link>
              </NavItem>
            </Stack>
          </NavList>
        </Box>
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  padding: 25px;
  background-color: rgb(102, 103, 171);
  a {
    font-weight: bold;
    color: #d7dee6;
    text-decoration: none;
  }
  font-family: "LeferiPoint-WhiteObliqueA";
  font-weight: bold;
`;

const Logo = styled.div`
  a {
    font-size: 150%;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
`;
const NavItem = styled.li``;
