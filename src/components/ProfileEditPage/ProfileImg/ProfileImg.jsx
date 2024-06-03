import { StDiv, StImg } from './ProfileImg.styled';

function ProfileImg(props) {
  const { src } = props;
  return (
    <StDiv>
      <StImg src={src} />
    </StDiv>
  );
}
export default ProfileImg;
