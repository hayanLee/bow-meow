import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateUserProfile } from '../redux/slices/userReducer';

const dummyLoginedUser = {
  userId: 101,
  nickname: 'John',
  email: 'helloworld@naver.com',
  pwd: '123123123',
  profileImg: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/employee-icon.png',
  introduce: '잘 부탁드려요 '
};

function ReduxTestPage() {
  const loginedUser = dummyLoginedUser;
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  function handleUpdateUserProfile() {
    console.log('테스트1: 유저 프로필 수정');

    const newIntroduce = '새로운 자기소개';
    const newNickname = '새로운 닉네임';
    const updatedUser = { ...loginedUser, introduce: newIntroduce, nickname: newNickname };

    dispatch(updateUserProfile(updatedUser));
  }

  function handleDeleteUser() {
    console.log('테스트2: 유저 삭제 (회원탈퇴)');
  }
  function handleAddUser() {
    console.log('테스트3: 유저 추가 (회원가입)');
  }

  return (
    <StMain>
      <div> 테스트 결과 확인 {'=>'} 콘솔 </div>
      <div>
        <span>테스트1: 유저 프로필 수정</span>
        <button onClick={handleUpdateUserProfile}>RUN</button>
      </div>
      <div>
        <span>테스트2: 유저 삭제 (회원탈퇴)</span>
        <button onClick={handleDeleteUser}>RUN</button>
      </div>
      <div>
        <span>테스트3: 유저 추가 (회원가입)</span>
        <button onClick={handleAddUser}>RUN</button>
      </div>

      <section>
        <span>현재로그인한유저</span>
        <StUserDiv>
          <div>userId: {loginedUser.userId}</div>
          <div>nickname: {loginedUser.nickname}</div>
          <div>email: {loginedUser.email}</div>
          <div>pwd: {loginedUser.pwd}</div>
          <div>introduce: {loginedUser.introduce}</div>
        </StUserDiv>
      </section>
      <section>
        <span>유저리스트</span>
        {users.map((user) => (
          <StUserDiv key={user.userId}>
            <div>userId: {user.userId}</div>
            <div>nickname: {user.nickname}</div>
            <div>email: {user.email}</div>
            <div>pwd: {user.pwd}</div>
            <div>introduce: {user.introduce}</div>
          </StUserDiv>
        ))}
      </section>
    </StMain>
  );
}

const StMain = styled.main`
  font-size: 1.7em;

  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px;

  & button {
    font-size: inherit;
  }
`;

const StUserDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid black;
  margin-bottom: 30px;
`;
export default ReduxTestPage;
