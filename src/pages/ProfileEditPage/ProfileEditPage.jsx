//기능 컴포넌트
import StInputFields from './../../components/ProfileEditPage/InputFields/InputFields.styled';
import StButtonGroup from '../../components/ProfileEditPage/ButtonGroup/ButtonGroup.styled';

//스타일링 컴포넌트
import Main from './../../components/ProfileEditPage/ProfileEditPage.styles/Main.styled';
import UpperSection from './../../components/ProfileEditPage/ProfileEditPage.styles/UpperSection.styled';
import LowerSection from './../../components/ProfileEditPage/ProfileEditPage.styles/LowerSection.styled';
import Button from './../../components/ProfileEditPage/ProfileEditPage.styles/Button.styled';

//리액트 라이브러리
import { useState } from 'react';

//개발용 가짜 데이터
import { loadMockData } from '../../mockdatas/devutil';

const { mockUserList, mockPostList, mockLoginedUser } = loadMockData();

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
