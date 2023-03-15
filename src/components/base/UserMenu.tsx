import { Stack } from "@mui/material";
import { auth } from "firebaseConfig";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import signedInState from "states/signedInState";

export function UserMenu() {
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
    <div>
      <ul>
        {!signedIn && (
          <Stack direction="row" spacing={3}>
            <li>
              <Link to="/signin">sign in </Link>
            </li>
            <li>
              <Link to="/signup">sign up </Link>
            </li>
          </Stack>
        )}
        {signedIn && (
          <Stack direction="row" spacing={3}>
            <li>
              <Link to="/my">
                My Page
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleSignOut}>
                sign out
              </Link>
            </li>
          </Stack>
        )}
      </ul>
    </div>
  );
}
