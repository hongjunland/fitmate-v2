import React, { ChangeEvent, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { ref, set } from "firebase/database";

interface User {
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
  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    const userInfo: User = {
      name: userName,
      email: userEmail,
      imageUrl: "asdasd",
    };
    console.log(userInfo);
    writeUserData(userInfo);
    setUserName("");
    setUserEmail("");
  };
  const seachAll = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
    // console.log(querySnapshot);
  };
  const writeUserData = async ({ name, email, imageUrl }: User) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        imageUrl: imageUrl,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <div>
        username
        <input type="text" value={userName} onChange={onChangeName} />
        email
        <input type="email" value={userEmail} onChange={onChangeEmail} />
        <button onClick={onSubmit}>등록</button>
        <button onClick={seachAll}>조회</button>
      </div>
    </div>
  );
}

// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

export default UserInfo;
