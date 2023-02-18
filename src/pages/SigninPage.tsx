import { useState } from "react";

interface SigninFormState {
  email: string;
  password: string;
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
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
