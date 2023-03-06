import { RecoilRoot } from "recoil";
import RootRouter from "./routes/Root";

function App() {
  return (
    <RecoilRoot>
      <RootRouter />
    </RecoilRoot>
  );
}

export default App;
