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

//더미 데이터
const mockLoginedUser = {
  userId: 101,
  nickname: 'John',
  email: 'helloworld@naver.com',
  pwd: '123123123',
  profileImg: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/employee-icon.png',
  introduce: '자기소개: 잘 부탁드려요 '
};

function ProfileEditPage() {
  const [loginedUser, setLoginedUser] = useState(mockLoginedUser);
  const inputFieldRef = useRef(null);

  return (
    <Main>
      <UpperSection>
        <ProfileImageEdit loginedUser={loginedUser} />
      </UpperSection>
      <LowerSection>
        <ProfileInfoInputfields loginedUser={loginedUser} ref={inputFieldRef} />
        <ButtonGroup ref={inputFieldRef} />
      </LowerSection>
    </Main>
  );
}

export default ProfileEditPage;
