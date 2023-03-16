import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import portfolioIndexState from "states/portfolioIndexState";

export default function PortfolioMenu() {
  const tabIndex = useRecoilValue(portfolioIndexState);
  const navagate = useNavigate();
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    const links = ['','reviews','schedules','about'];
    navagate('/portfolio/'+links[newValue]);
  };
  return (
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
  );
}

const ContentTabs = styled(Tabs)`
  width: 100%;
`;
