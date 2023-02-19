import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import HomePage from "../pages/HomePage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";

export default function Root() {
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
