import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
export default function GlobalNav(): JSX.Element {
  return (
    <div>
      <nav>
        <ul>
          <Stack direction="row" spacing={3}>
            <li>
              <Link to="/boardList">board</Link>
            </li>
            <li>
              <Link to="/boardList">board</Link>
            </li>
            <li>
              <Link to="/boardList">board</Link>
            </li>
            <li>
              <Link to="/boardList">board</Link>
            </li>
          </Stack>
        </ul>
      </nav>
    </div>
  );
}
