import GlobalNav from "components/base/GlobalNav";
import Header from "components/base/Header";
import PageTemplate from "components/base/PageTemplate";
import { UserMenu } from "components/base/UserMenu";

export default function Home() {
  return (
    <PageTemplate
      header={<Header usermenu={<UserMenu />} navbar={<GlobalNav />} />}
    >
      <div>home</div>
    </PageTemplate>
  );
}
