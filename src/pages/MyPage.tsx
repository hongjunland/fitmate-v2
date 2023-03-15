import GlobalNav from "components/base/GlobalNav";
import Header from "components/base/Header";
import PageTemplate from "components/base/PageTemplate";
import { UserMenu } from "components/base/UserMenu";
import { auth } from "firebaseConfig";
import styled from "@emotion/styled";
import { useEffect } from "react";

export default function MyPage() {
  const user = auth.currentUser;
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <PageTemplate
      header={<Header usermenu={<UserMenu />} navbar={<GlobalNav />} />}
    >
      <Wrapper>
        <label>이메일: {user?.email}</label>
        <label>이름: {user?.displayName}</label>
        <label>휴대폰 번호: {user?.phoneNumber}</label>
        {user?.photoURL && <img src={user?.photoURL} alt="이미지 없음" width={'100px'}/>}
      </Wrapper>
    </PageTemplate>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
