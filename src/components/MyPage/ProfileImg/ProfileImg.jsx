import StProfileImg from './ProfileImg.styled';

function ProfileImg(props) {
  const { src } = props;

  return (
    <StProfileImg>
      <img src={src} alt="프로필 사진" />
    </StProfileImg>
  );
}

export default ProfileImg;
