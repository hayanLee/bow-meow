//기능 컴포넌트
import ProfileImageEdit from '../../components/ProfileEditPage/ProfileImageEdit';
import ProfileInfoEdit from '../../components/ProfileEditPage/ProfileInfoInputfields';
import ButtonGroup from './../../components/ProfileEditPage/ButtonGroup';

//스타일링 컴포넌트
import {
  Main,
  UpperSection,
  LowerSection
} from '../../components/ProfileEditPage/ProfileEditPage.styles/ProfileEditPage.styled';

//리액트 라이브러리
import { useRef, useState } from 'react';

//개발용 가짜 데이터
import { loadMockData } from '../../mockdatas/devutil';

const { mockLoginedUser } = loadMockData();

function ProfileEditPage() {
  const [loginedUser, setLoginedUser] = useState(mockLoginedUser);
  const inputFieldRef = useRef(null);

  return (
    <Main>
      <UpperSection>
        <ProfileImageEdit loginedUser={loginedUser} />
      </UpperSection>
      <LowerSection>
        <ProfileInfoEdit loginedUser={loginedUser} ref={inputFieldRef} />
        <ButtonGroup ref={inputFieldRef} />
      </LowerSection>
    </Main>
  );
}

export default ProfileEditPage;
