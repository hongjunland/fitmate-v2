import GlobalNav from "components/base/GlobalNav";
import Header from "components/base/Header";
import PageTemplate from "components/base/PageTemplate";
import { UserMenu } from "components/base/UserMenu";
import Landing from "components/landing/Landing";

export default function LandingPage() {
  return (
    <PageTemplate
      header={<Header usermenu={<UserMenu />} navbar={<GlobalNav />} />}
    >
      <Landing/>
    </PageTemplate>
  );
}
