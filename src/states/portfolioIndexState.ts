import { atom } from "recoil";

const portfolioIndexState = atom<number>({
  key: "portfolioIndex",
  default: 0,
});

export default portfolioIndexState;
