import { onAuthStateChanged, User } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "firebaseConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface BoardWriteFormState {
  title: string;
  content: string;
  author: any;
  createdAt: string;
}

export function BoardWritePage() {
  const [formState, setFormState] = useState<BoardWriteFormState>({
    title: "",
    content: "",
    author: "",
    createdAt: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(auth.currentUser?.email);
    const board = {
      ...formState,
      author: auth.currentUser?.email,
      createdAt: new Date().getTime().toString(),
    };
    await addDoc(collection(db, "posts"), board);
    console.log(board);
    navigate("/boardList");
  };
  return (
    <div>
      <div>
        <h3>게시판 쓰기</h3>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            value={formState.title}
            name="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <textarea
            value={formState.content}
            name="content"
            onChange={handleTextAreaChange}
          />
        </div>
        <button type="submit">쓰기</button>
      </form>
    </div>
  );
}
