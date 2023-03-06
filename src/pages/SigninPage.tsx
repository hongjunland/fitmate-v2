import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import authStatusState from "../states/authStatusState";

interface SigninFormState {
  email: string;
  password: string;
}
// interface AuthState
export default function SigninPage() {
  const [formState, setFormState] = useState<SigninFormState>({
    email: "",
    password: "",
  });
  const [authStatus, setAuthStatus] = useRecoilState(authStatusState);
  const navigate = useNavigate();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // await setPersistence(auth, browserSessionPersistence);
      let userCredential = await signInWithEmailAndPassword(
        auth,
        formState.email,
        formState.password
      );
      let user = userCredential.user;
      setAuthStatus({ loading: false, error: false, data: user });
      navigate("/");
    } catch (error) {
      console.log(error);
      setAuthStatus({ ...authStatus, error: true });
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
          />
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
}
