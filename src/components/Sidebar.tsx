import React from "react";
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
      <Link to="/">home </Link>
      {!signedIn && <Link to="/signin">sign in </Link>}
      {!signedIn && <Link to="/signup">sign up </Link>}
      {signedIn && (
        <Link to="/" onClick={handleSignOut}>
          sign out
        </Link>
      )}
    </div>
  );
}
