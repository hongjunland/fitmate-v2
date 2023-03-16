import GlobalNav from "components/base/GlobalNav";
import Header from "components/base/Header";
import PageTemplate from "components/base/PageTemplate";
import { UserMenu } from "components/base/UserMenu";
import PortfolioTemplate from "components/portfolio/PortfolioTemplate";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import portfolioIndexState from "states/portfolioIndexState";

export default function PortfolioStylePage() {
  const setPortfolioIndex = useSetRecoilState(portfolioIndexState);
  useEffect(() => {
    setPortfolioIndex(0);
  }, []);
  return (
    <PageTemplate
      header={<Header navbar={<GlobalNav />} usermenu={<UserMenu />} />}
    >
      <PortfolioTemplate>PortfolioStylePage</PortfolioTemplate>
    </PageTemplate>
  );
}
