import Button from '../../common/Button';
import { StDiv, StImg } from './ProfileImageEdit.styled';

function ProfileImageEdit({ loginedUser }) {
  const { profileImg } = loginedUser;

  function handleProfileImageEdit() {
    console.log('handleProfileImageEdit =>');
    console.log('loginedUser => ', loginedUser);
  }

  return (
    <StDiv>
      <StImg src={profileImg} />
      <Button onClick={handleProfileImageEdit} text="프로필 수정" />
    </StDiv>
  );
}
export default ProfileImageEdit;
