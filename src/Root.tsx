import App from "components/App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
// There are App Component.
export default function Root() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  );
}
