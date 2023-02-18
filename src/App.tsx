import { ChangeEvent, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<HomePage/> />
          <Route path="/signup" element=<SignupPage/> />
          <Route path="/signin" element=<SigninPage/> />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
