import { collection, getDocs, query } from "firebase/firestore";
import { db } from "firebaseConfig";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import boardListState from "states/boardListState";
import signedInState from "states/signedInState";
import { Board } from "types/board";

export default function BoardListPage() {
  const signedIn = useRecoilValue(signedInState);
  const [boardList, setBoardList] = useRecoilState(boardListState);
  const navigate = useNavigate();
  const getList = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const data: Board[] = [];
    querySnapshot.forEach((doc) => {
      const item: Board = {
        title: doc.data().title,
        content: doc.data().content,
        author: doc.data().author,
        createdAt: doc.data().createdAt,
        id: doc.id,
      };
      data.push(item);
    });
    setBoardList(data);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <div>
        <h2>boardListPage</h2>
      </div>
      <div>
        <BoardLIst boards={boardList} />
      </div>
      <div>
        {signedIn && (
          <button
            onClick={() => {
              navigate("/boardWrite");
            }}
          >
            글쓰기
          </button>
        )}
      </div>
    </div>
  );
}
interface BoardListProps {
  boards: Board[];
}
function BoardLIst({ boards }: BoardListProps) {
  const navigate = useNavigate();
  const handleOnClick = (id: string) => {
    navigate(`/board/${id}`, {state: id});
  };
  return (
    <div>
      <ul>
        {boards.map((board) => (
          <li key={board.id} onClick={() => handleOnClick(board.id)}>
            {board.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
