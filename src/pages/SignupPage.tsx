import { useState } from "react";
import { auth } from "../firebaseConfig";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
interface SignupFormState {
  email: string;
  password: string;
  confirmPassword: string;
}
interface ErrorMessage {
  code: number;
  message: string;
}

export default function SignupPage() {
  const [formState, setFormState] = useState<SignupFormState>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState);
    createUserWithEmailAndPassword(auth, formState.email, formState.password)
    .then((userCrential) => {
      console.log(userCrential);
      const user = userCrential.user;
      navigate("/")
    })
    .catch((error: ErrorMessage) => {
      const errorMessage = error.message;
      console.error(errorMessage, error);
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div id="signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formState.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}