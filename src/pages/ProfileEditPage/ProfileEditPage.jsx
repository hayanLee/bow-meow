//기능 컴포넌트
import ProfileImageEdit from '../../components/ProfileEditPage/ProfileImageEdit';
import ProfileInfoInputfields from '../../components/ProfileEditPage/ProfileInfoInputfields';
import ButtonGroup from './../../components/ProfileEditPage/ButtonGroup';

//스타일링 컴포넌트
import {
  LowerSection,
  Main,
  UpperSection
} from '../../components/ProfileEditPage/ProfileEditPage.styles/ProfileEditPage.styled';

//SupaBase API

//리액트 라이브러리
import { useEffect, useRef, useState } from 'react';
import { getUserRow } from '../../supabase/profile';

function ProfileEditPage() {
  const [loginedUser, setLoginedUser] = useState(null);

  const uploadedImgURLRef = useRef(null);
  const infoInputElemRef = useRef(null);

  useEffect(() => {
    async function loadLoginedUser() {
      const userRow = await getUserRow();
      if (userRow) {
        setLoginedUser(userRow);
      }
    }
    loadLoginedUser();
  }, []);

  //로그인이 되지 않으면 리턴
  if (!loginedUser) {
    return <p>로그인을 해주세요!</p>;
  }

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
