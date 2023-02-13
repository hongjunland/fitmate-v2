import { async } from "@firebase/util";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { ChangeEvent, useState } from "react";
interface User {
  userId: number;
  name: string;
  email: string;
  imageUrl: string;
}
function UserInfo() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };
  const onSubmit = async(event: React.MouseEvent<HTMLButtonElement>) => {
    const userInfo : User = {
        userId: 123,
        name: userName,
        email: userEmail,
        imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
    }
    await writeUserData(userInfo);
  }
  return (
    <div>
      <div>
        username<input type="text" value={userName} onChange={onChangeName} />
        email<input type="email" value={userEmail} onChange={onChangeEmail} />
        <button onClick={onSubmit}>등록</button>
      </div>
    </div>
  );
}

function writeUserData({ userId, name, email, imageUrl }: User) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

export default UserInfo;
