import styled from "@emotion/styled";
import { ReactNode } from "react";
import PortfolioMenu from "./PortfolioMenu";
import Profile from "./Profile";

interface Props {
  children: ReactNode;
}
export default function PortfolioTemplate({children}: Props) {
  return (
    <Container>
      <ProfileSection>
        <Profile />
      </ProfileSection>
      <ContentSection>
        <PortfolioMenu />
        {children}
      </ContentSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
  padding-bottom: 5rem;
  max-width: 1200px;
`;
const ProfileSection = styled.section`
  flex-basis: 25%;
  max-width: calc(25%);
`;
const ContentSection = styled.section`
  flex-basis: 75%;
  max-width: calc(75%);
  button {
    font-family: "GangwonEdu_OTFBoldA";
    font-size: 1.3rem;
  }
`;
