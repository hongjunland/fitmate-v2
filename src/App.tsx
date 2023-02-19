import { auth } from "./firebaseConfig";
import { useEffect } from "react";
import RootRouter from "./routes/Root";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {});
  }, []);
  return (
      <RootRouter />
  );
}

export default App;
