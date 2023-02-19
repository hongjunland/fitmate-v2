import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { auth } from "../firebaseConfig";
import authStatusState from "../states/authStatusState";

export default function Sidebar(): JSX.Element {
  const [authStatus, setAuthStatus] = useRecoilState(authStatusState);
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`Sidebar ${isOpen ? "open" : ""}`}>
      <div className="Sidebar__toggle" onClick={handleToggle}>
        <i className="fa fa-bars" />
      </div>
      <div>
        <Link to="/">home </Link>
        {!authStatus.data && <Link to="/signin">sign in </Link>}
        {!authStatus.data && <Link to="/signup">sign up </Link>}
        {authStatus.data && (
          <Link
            to="/"
            onClick={async() => {
              setAuthStatus((prevState)=>({...prevState, data: null}));
              await signOut(auth);
            }}
          >
            sign out{" "}
          </Link>
        )}
      </div>
      {/* <div className="Sidebar__content">{children}</div> */}
    </div>
  );
}
