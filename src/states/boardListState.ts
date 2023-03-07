import { atom } from "recoil";
import { Board } from "types/board";

const boardListState = atom<Board[]>({
  key: "boardList",
  default: [],
});

export default boardListState;
