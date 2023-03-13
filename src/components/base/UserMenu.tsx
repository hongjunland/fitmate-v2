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
    <Stack direction="row" spacing={3}>
      <ul>
        {!signedIn && (
          <li>
            <Link to="/signin">sign in </Link>
          </li>
        )}
        {!signedIn && (
          <li>
            <Link to="/signup">sign up </Link>
          </li>
        )}
        {signedIn && (
          <li>
            <Link to="/" onClick={handleSignOut}>
              sign out
            </Link>
          </li>
        )}
      </ul>
    </Stack>
  );
}
