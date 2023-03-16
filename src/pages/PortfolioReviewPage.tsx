import GlobalNav from "components/base/GlobalNav";
import Header from "components/base/Header";
import PageTemplate from "components/base/PageTemplate";
import { UserMenu } from "components/base/UserMenu";
import PortfolioReview from "components/portfolio/PortfolioReview";
import PortfolioTemplate from "components/portfolio/PortfolioTemplate";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import portfolioIndexState from "states/portfolioIndexState";

export default function PortfolioReviewPage() {
  const setPortfolioIndex = useSetRecoilState(portfolioIndexState);
  useEffect(() => {
    setPortfolioIndex(1);
  }, []);
  return (
    <PageTemplate
      header={<Header navbar={<GlobalNav />} usermenu={<UserMenu />} />}
    >
      <PortfolioTemplate>
        <PortfolioReview />
      </PortfolioTemplate>
    </PageTemplate>
  );
}
