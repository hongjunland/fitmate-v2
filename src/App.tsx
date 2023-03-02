import { auth } from "./firebaseConfig";
import { useEffect } from "react";
import RootRouter from "./routes/Root";
import { onAuthStateChanged } from "firebase/auth";
import { useRecoilState } from "recoil";
import authStatusState from "./states/authStatusState";

function App() {
  const [authStatus, setAuthStatus] = useRecoilState(authStatusState);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setAuthStatus({ loading: false, error: null, data: user });
      console.log(user);
    });
    // auth.onAuthStateChanged((user) => {});
  }, [setAuthStatus]);
  return <RootRouter />;
}

export default App;
