import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { auth } from "../firebaseConfig";
import authStatusState from "../states/authStatusState";

export default function Sidebar(): JSX.Element {
  const [authStatus, setAuthStatus] = useRecoilState(authStatusState);

  async function handleSignOut() {
    try {
      await auth.signOut();
      console.log("Sign-out successful.");
      setAuthStatus({ ...authStatus, data: null });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Link to="/">home </Link>
      {!authStatus.data && <Link to="/signin">sign in </Link>}
      {!authStatus.data && <Link to="/signup">sign up </Link>}
      {authStatus.data && (
        <Link to="/" onClick={handleSignOut}>
          sign out
        </Link>
      )}
    </div>
  );
}
