import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import signedInState from "states/signedInState";
import { Box, Button, Input, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Container } from "@mui/system";
import PageTemplate from "components/base/PageTemplate";
import Header from "components/base/Header";
import GlobalNav from "components/base/GlobalNav";
import { UserMenu } from "components/base/UserMenu";
import { GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";

interface SigninFormState {
  email: string;
  password: string;
}
export default function SigninPage() {
  const provider = new GoogleAuthProvider();
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
      // let user = userCredential.user;
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSigninWithGoogle = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      console.log(user);
      navigate('/');
    } catch (error: any) {
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error);
    }
  };
  return (
    <PageTemplate
      header={<Header usermenu={<UserMenu />} navbar={<GlobalNav />} />}
    >
      <Container>
        <Wrapper>
          <Box width={"30%"}>
            <Box margin={"1rem"}>
              <Typography variant={"h3"} textAlign="center">
                Sign In
              </Typography>
            </Box>
            <Box margin={"1rem"}>
              <form onSubmit={handleFormSubmit}>
                <Box marginTop={"2rem"}>
                  <Input
                    fullWidth={true}
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                  />
                </Box>
                <Box>
                  <Input
                    fullWidth={true}
                    type="password"
                    name="password"
                    value={formState.password}
                    onChange={handleInputChange}
                    required
                  />
                </Box>
                <Box marginTop={"2rem"}>
                  <SignButton type="submit">Sign in</SignButton>
                </Box>
              </form>
              <Box marginTop={"0.5rem"}>
                <GoogleButton type="button" onClick={handleSigninWithGoogle}>
                  <GoogleIcon/>
                  &nbsp; Sign in with Google
                </GoogleButton>
              </Box>
            </Box>
          </Box>
        </Wrapper>
      </Container>
    </PageTemplate>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10% 5% 20% 5%;
  h3 {
    font-family: "LeferiPoint-WhiteObliqueA";
  }
  button {
    text-transform: none;
  }
`;
const SignButton = styled(Button)`
  background-color: #8763fb;
  color: white;
  width: 100%;
`;
const GoogleButton = styled(Button)`
  width: 100%;
  font-weight: bold;
  background-color: white;
  border: #b9b9b9 solid 1px;
  color: #000;
`;
