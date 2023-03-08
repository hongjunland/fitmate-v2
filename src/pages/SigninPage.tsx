import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import signedInState from "states/signedInState";
import { Box, Button, Container, Input, Typography } from "@mui/material";
import styled from "@emotion/styled";

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
    <Container>
      <Box display={"flex"} justifyContent={"center"} alignContent={"center"}>
        <Box>
          <Box>
            <Typography variant={"h3"}>Sign In</Typography>
          </Box>
          <Box>
            <form onSubmit={handleFormSubmit}>
              <Box>
                <Input
                  type="text"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
              </Box>
              <Box>
                <Input
                  type="password"
                  name="password"
                  value={formState.password}
                  onChange={handleInputChange}
                  required
                />
              </Box>
              <SignButton type="submit">Sign in</SignButton>
            </form>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

const SignButton = styled(Button)`
  background-color: #8763FB;
  color: white;
`