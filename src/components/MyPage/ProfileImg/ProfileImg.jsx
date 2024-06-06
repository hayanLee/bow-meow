import StProfileImg from './ProfileImg.styled';

const DEFAULT_PROFILE_URL = 'https://cdn-icons-png.flaticon.com/512/880/880539.png';

function ProfileImg(props) {
  const { profileImg } = props;

  return (
    <StProfileImg>
      <img src={profileImg || DEFAULT_PROFILE_URL} />
    </StProfileImg>
  );
}

export default ProfileImg;
