import GlobalNav from "components/base/GlobalNav";
import Header from "components/base/Header";
import PageTemplate from "components/base/PageTemplate";
import { UserMenu } from "components/base/UserMenu";
import PortfolioTemplate from "components/portfolio/PortfolioTemplate";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import portfolioIndexState from "states/portfolioIndexState";

export default function PortfolioAboutPage() {
  const setPortfolioIndex = useSetRecoilState(portfolioIndexState);
  useEffect(() => {
    setPortfolioIndex(3);
  }, []);
  return (
    <PageTemplate
      header={<Header navbar={<GlobalNav />} usermenu={<UserMenu />} />}
    >
      <PortfolioTemplate>PortfolioAboutPage</PortfolioTemplate>
    </PageTemplate>
  );
}
