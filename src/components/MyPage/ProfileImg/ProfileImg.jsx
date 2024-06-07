import StProfileImg from './ProfileImg.styled';

function ProfileImg(props) {
  const { profileImg } = props;

  return (
    <StProfileImg>
      <img src={profileImg} alt="프로필 사진" />
    </StProfileImg>
  );
}

export default ProfileImg;
