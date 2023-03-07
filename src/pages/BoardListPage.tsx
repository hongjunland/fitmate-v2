import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import signedInState from "states/signedInState";

export default function BoardListPage() {
  const [signedIn, setSignedIn] = useRecoilState(signedInState);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h2>boardListPage</h2>
      </div>
      <div></div>
      <div>{signedIn && <button onClick={()=>{navigate('/boardWrite')}}>글쓰기</button>}</div>
    </div>
  );
}
