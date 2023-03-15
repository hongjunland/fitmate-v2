import styled from "@emotion/styled";
import GlobalNav from "components/base/GlobalNav";
import Header from "components/base/Header";
import PageTemplate from "components/base/PageTemplate";
import { UserMenu } from "components/base/UserMenu";

export default function NotFoundPage() {
  return (
    <PageTemplate
      header={<Header usermenu={<UserMenu />} navbar={<GlobalNav />} />}
    >
      <Wrapper>
        <h1>해당 페이지가 존재하지 않습니다!</h1>
      </Wrapper>
    </PageTemplate>
  );
}

const Wrapper = styled.div`
  text-align: center;
  padding: 10%;
`;
