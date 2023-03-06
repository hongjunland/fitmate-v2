import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebaseConfig";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import authStatusState from "states/authStatusState";
import Sidebar from "../components/Sidebar";
import HomePage from "../pages/HomePage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";

export default function Root() {
  const [authStatus, setAuthStatus] = useRecoilState(authStatusState);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setAuthStatus({ loading: false, error: false, data: user });
      console.log(user);
    });
  }, [setAuthStatus]);
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
