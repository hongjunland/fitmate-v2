import App from "App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

export default function Root() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  );
}
