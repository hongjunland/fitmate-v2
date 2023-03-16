import styled from "@emotion/styled";
import GlobalNav from "components/base/GlobalNav";
import Header from "components/base/Header";
import PageTemplate from "components/base/PageTemplate";
import { UserMenu } from "components/base/UserMenu";

export default function PortfolioPage() {
  return (
    <PageTemplate
      header={<Header navbar={<GlobalNav />} usermenu={<UserMenu />} />}
    >
      <Container>
        <ProfileWrapper>profile</ProfileWrapper>
        <ContentWrapper>content</ContentWrapper>
      </Container>
    </PageTemplate>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
const ProfileWrapper = styled.div`
  flex-basis: 25%;
`;
const ContentWrapper = styled.div`
  flex-basis: 75%;
`;
