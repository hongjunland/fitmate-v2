import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Wrapper>
      <Link to="/">
        <Typography variant="h5">Fitmate</Typography>
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
