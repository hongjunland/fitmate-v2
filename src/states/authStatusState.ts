import { atom } from "recoil";
import { User } from "firebase/auth";

interface AuthStatusProps {
  loading: boolean;
  error: boolean;
  data: User | null;
}
const authStatusState = atom<AuthStatusProps>({
  key: "authState",
  default: { loading: true, error: false, data: null },
});

export default authStatusState;
