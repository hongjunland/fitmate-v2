import { atom } from "recoil";
import { Auth, User } from "firebase/auth";

interface AuthStatusProps {
  loading: boolean;
  error: any;
  data: User | null;
}
const authStatusState = atom<AuthStatusProps>({
  key: "authState",
  default: { loading: true, error: null, data: null },
});

export default authStatusState;
