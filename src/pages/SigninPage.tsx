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
  return (<div>
    <div>signinPage</div>
  </div>)
}
