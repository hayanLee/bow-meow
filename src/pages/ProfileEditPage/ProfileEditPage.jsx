//기능 컴포넌트
import InputFields from './../../components/ProfileEditPage/InputFields';
import ButtonGroup from './../../components/ProfileEditPage/ButtonGroup';
import ProfileImg from './../../components/ProfileEditPage/ProfileImg';

//스타일링 컴포넌트
import {
  Main,
  UpperSection,
  LowerSection
} from '../../components/ProfileEditPage/ProfileEditPage.styles/ProfileEditPage.styled';

//공용 컴포넌트
import Button from './../../components/common/Button';

//리액트 라이브러리
import { useState } from 'react';

//개발용 가짜 데이터
import { loadMockData } from '../../mockdatas/devutil';

const { mockLoginedUser } = loadMockData();

function ProfileEditPage() {
  const [loginedUser, setLoginedUser] = useState(mockLoginedUser);

  return (
    <Main>
      <UpperSection>
        <ProfileImg src={mockLoginedUser.profileImg} />
        <Button text="프로필 수정" />
      </UpperSection>
      <LowerSection>
        <InputFields />
        <ButtonGroup />
      </LowerSection>
    </Main>
  );
}
export default ProfileEditPage;
