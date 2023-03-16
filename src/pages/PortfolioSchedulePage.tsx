import GlobalNav from "components/base/GlobalNav";
import Header from "components/base/Header";
import PageTemplate from "components/base/PageTemplate";
import { UserMenu } from "components/base/UserMenu";
import PortfolioTemplate from "components/portfolio/PortfolioTemplate";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import portfolioIndexState from "states/portfolioIndexState";

export default function PortfolioSchedulePage() {
  const setPortfolioIndex = useSetRecoilState(portfolioIndexState);
  useEffect(() => {
    setPortfolioIndex(2);
  }, []);
  return (
    <PageTemplate
      header={<Header navbar={<GlobalNav />} usermenu={<UserMenu />} />}
    >
      <PortfolioTemplate>PortfolioSchedulePage</PortfolioTemplate>
    </PageTemplate>
  );
}
