import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface SignupFormState {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export default function SignupPage() {
  const [formState, setFormState] = useState<SignupFormState>({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await setDoc(doc(db, "users", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
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
          Name:
          <input
            type="text"
            name="name"
            value={formState.name}
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
