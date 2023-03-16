import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";
import GlobalNav from "components/base/GlobalNav";
import Header from "components/base/Header";
import PageTemplate from "components/base/PageTemplate";
import { UserMenu } from "components/base/UserMenu";
import Profile from "components/portfolio/Profile";
import { MouseEvent, useState } from "react";

export default function PortfolioPage() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };
  return (
    <PageTemplate
      header={<Header navbar={<GlobalNav />} usermenu={<UserMenu />} />}
    >
      <Container>
        <ProfileWrapper>
          <Profile />
        </ProfileWrapper>
        <ContentWrapper>
          <ContentTabs
            value={tabIndex}
            onChange={handleChangeTab}
            variant="fullWidth"
          >
            <Tab label="Style" />
            <Tab label="Review" />
            <Tab label="Schedule" />
            <Tab label="About" />
          </ContentTabs>
        </ContentWrapper>
      </Container>
    </PageTemplate>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
  padding-bottom: 5rem;
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
const ProfileWrapper = styled.div`
  flex-basis: 25%;
`;
const ContentWrapper = styled.div`
  flex-basis: 75%;
  button {
    font-family: "GangwonEdu_OTFBoldA";
    font-size: 1.3rem;
  }
`;

const ContentTabs = styled(Tabs)`
  width: 100%;
`;
