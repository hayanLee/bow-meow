//기능 컴포넌트
import ProfileImageEdit from '../../components/ProfileEditPage/ProfileImageEdit';
import ProfileInfoInputfields from '../../components/ProfileEditPage/ProfileInfoInputfields';
import ButtonGroup from './../../components/ProfileEditPage/ButtonGroup';

//스타일링 컴포넌트
import {
  Main,
  UpperSection,
  LowerSection
} from '../../components/ProfileEditPage/ProfileEditPage.styles/ProfileEditPage.styled';

//리액트 라이브러리
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

//더미 데이터
const mockLoginedUser = {
  userId: 101
};

//To-be: DB API 사용해서 현재 로그인된 유저 정보 가져오기
function getLoginedUserData(loginedUserId) {
  const users = useSelector((state) => state.users.users);

  const loginedUser = users.find((user) => user.userId === loginedUserId);

  return loginedUser;
}

function ProfileEditPage() {
  const [loginedUser, setLoginedUser] = useState(getLoginedUserData(mockLoginedUser.userId));

  const uploadedImgURLRef = useRef(null);
  const infoInputElemRef = useRef(null);

  return (
    <Main>
      <UpperSection>
        <ProfileImageEdit loginedUser={loginedUser} ref={uploadedImgURLRef} />
      </UpperSection>
      <LowerSection>
        <ProfileInfoInputfields
          loginedUser={loginedUser}
          ref={{ infoInputRef: infoInputElemRef, uploadedImgRef: uploadedImgURLRef }}
        />
        <ButtonGroup loginedUser={loginedUser} ref={infoInputElemRef} />
      </LowerSection>
    </Main>
  );
}

export default ProfileEditPage;
