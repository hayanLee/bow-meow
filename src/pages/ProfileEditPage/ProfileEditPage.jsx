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

function loadLoginedUser(loginedUserId) {
  const users = useSelector((state) => state.users.users);

  const loginedUser = users.find((user) => user.userId === loginedUserId);

  return loginedUser;
}

function ProfileEditPage() {
  const [loginedUser, setLoginedUser] = useState(loadLoginedUser(mockLoginedUser.userId));

  //아래 ref는 컴포넌트 설계 오류를 우회하기 위해 사용했습니다..
  const uploadedImgURLRef = useRef(null); // <= 임시방편
  const infoInputElemRef = useRef(null); // <= 임시방편

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
        <ButtonGroup ref={infoInputElemRef} />
      </LowerSection>
    </Main>
  );
}

export default ProfileEditPage;
