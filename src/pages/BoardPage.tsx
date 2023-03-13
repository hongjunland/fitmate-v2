import GlobalNav from "components/base/GlobalNav";
import Header from "components/base/Header";
import PageTemplate from "components/base/PageTemplate";
import { UserMenu } from "components/base/UserMenu";
import { doc, getDoc } from "firebase/firestore";
import { db } from "firebaseConfig";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Board } from "types/board";

export default function BoardPage() {
  const boardId = useParams().id;
  const [board, setBoard] = useState<Board>();
  const getBoard = async () => {
    console.log(boardId);
    if (boardId) {
      const docSnap = await getDoc(doc(db, "posts", boardId));
      const data: Board = {
        id: boardId,
        title: docSnap.data()?.title,
        content: docSnap.data()?.content,
        author: docSnap.data()?.author,
        createdAt: docSnap.data()?.createdAt,
      };
      setBoard(data);
      console.log(data);
    }
  };
  useEffect(() => {
    getBoard();
  }, []);
  return (
    <PageTemplate
    header={<Header usermenu={<UserMenu />} navbar={<GlobalNav />} />}>
      <div>
        <p>제목: {board?.title}</p>
        <p>작성자: {board?.author}</p>
        <p>작성일: {board?.createdAt}</p>
      </div>
      <h4>내용</h4>
      <hr />
      <p>{board?.content}</p>
      <hr />
      <p>{boardId}</p>
    </PageTemplate>
  );
}
