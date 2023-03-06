import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import signedInState from "states/signedInState";

interface SigninFormState {
  email: string;
  password: string;
}
export default function SigninPage() {
  const [signedIn, setSignedIn] = useRecoilState(signedInState);
  const [formState, setFormState] = useState<SigninFormState>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let userCredential = await signInWithEmailAndPassword(
        auth,
        formState.email,
        formState.password
      );
      setSignedIn(true);
      let user = userCredential.user;
      navigate("/");
    } catch (error) {
      console.log(error);
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
