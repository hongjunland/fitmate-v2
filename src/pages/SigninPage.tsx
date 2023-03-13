import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import signedInState from "states/signedInState";
import { Box, Button, Input, MenuItem, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Container } from "@mui/system";
import PageTemplate from "components/base/PageTemplate";
import Header from "components/base/Header";
import GlobalNav from "components/base/GlobalNav";
import { UserMenu } from "components/base/UserMenu";
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
    <PageTemplate
      header={<Header usermenu={<UserMenu />} navbar={<GlobalNav />} />}
    >
      <Container>
        <Main>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Box width={"30%"}>
              <Box margin={"1rem"}>
                <Typography
                  variant={"h3"}
                  fontFamily={"LeferiPoint-WhiteObliqueA"}
                >
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
                  <Box margin={"1rem"} marginTop={"2rem"}>
                    <SignButton type="submit">Sign in</SignButton>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Main>
      </Container>
    </PageTemplate>
  );
}
const Main = styled.main`
  font-family: "LeferiPoint-WhiteObliqueA";
`;
const SignButton = styled(Button)`
  background-color: #8763fb;
  color: white;
`;
