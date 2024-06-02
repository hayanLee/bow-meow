//사용 컴포넌트
import Main from './../../components/ProfileEditPage/ProfileEditPage.styles/Main.styled';
import UpperSection from './../../components/ProfileEditPage/ProfileEditPage.styles/UpperSection.styled';
import LowerSection from './../../components/ProfileEditPage/ProfileEditPage.styles/LowerSection.styled';
import StInputFields from '../../components/ProfileEditPage/ProfileEditPage.styles/InputFields.styled';
import StButtonGroup from './../../components/ProfileEditPage/ProfileEditPage.styles/ButtonGroup.styled';
import Button from './../../components/ProfileEditPage/ProfileEditPage.styles/Button.styled';

//리액트 라이브러리
import { useState } from 'react';

//개발용 가짜 데이터
import { loadProfileEditPageMockData } from '../../components/ProfileEditPage/devutil';

const { mockUserList, mockPostList, mockLoginedUser } = loadProfileEditPageMockData();

function ProfileEditPage() {
  const [userList, setUserList] = useState(mockUserList);

  return (
    <Main>
      <UpperSection>
        <div>
          <img src="..." alt="프로필 사진" />
        </div>
        <Button>프로필 수정</Button>
      </UpperSection>
      <LowerSection>
        <StInputFields />
        <StButtonGroup />
      </LowerSection>
    </Main>
  );
}
export default ProfileEditPage;
