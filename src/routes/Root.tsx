import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "firebaseConfig";
import BoardListPage from "pages/BoardListPage";
import BoardPage from "pages/BoardPage";
import { BoardWritePage} from "pages/BoardWritePage";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import signedInState from "states/signedInState";
import Sidebar from "../components/Sidebar";
import HomePage from "../pages/HomePage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";

export default function Root() {
  const [signedIn, setSignedIn] = useRecoilState(signedInState);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/boardList" element={<BoardListPage />} />
          <Route path="/board/:id" element={<BoardPage />} />
          <Route path="/boardWrite" element={<BoardWritePage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
