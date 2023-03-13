import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
export default function Navbar(): JSX.Element {
  return (
    <Nav>
      <Box>
        <NavList>
          <Stack direction="row" spacing={3}>
            <NavItem>
              <Link to="/boardList">board</Link>
            </NavItem>
          </Stack>
        </NavList>
      </Box>
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

const NavList = styled.ul`
  list-style-type: none;
`;
const NavItem = styled.li``;
