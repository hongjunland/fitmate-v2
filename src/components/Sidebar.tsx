import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import signedInState from "states/signedInState";
import { auth } from "../firebaseConfig";

export default function Sidebar(): JSX.Element {
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
        <li>
          <Link to="/">home </Link>
        </li>
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
        <li>
          <Link to="/boardList">board</Link>
        </li>
      </ul>
    </div>
  );
}
