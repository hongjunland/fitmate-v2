import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig";

interface SigninFormState {
  email: string;
  password: string;
}
interface ErrorMessage {
  code: number;
  message: string;
}
export default function SigninPage() {
  const [formState, setFormState] = useState<SigninFormState>({
    email: "",
    password: "",
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, formState.email, formState.password)
      .then((userCredentail) => {
        const user = userCredentail.user;
        console.log(user);
      })
      .catch((error: ErrorMessage) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
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
