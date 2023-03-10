import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebaseConfig";
import BoardListPage from "pages/BoardListPage";
import BoardPage from "pages/BoardPage";
import { BoardWritePage } from "pages/BoardWritePage";
import LandingPage from "pages/LandingPage";
import SigninPage from "pages/SigninPage";
import SignupPage from "pages/SignupPage";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import signedInState from "states/signedInState";

export default function App() {
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
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/boardList" element={<BoardListPage />} />
        <Route path="/board/:id" element={<BoardPage />} />
        <Route path="/boardWrite" element={<BoardWritePage />} />
      </Routes>
    </>
  );
}
