import styled from 'styled-components';
import ProfileImg from './ProfileImg';

const StProfileImg = styled(ProfileImg)`
  aspect-ratio: 1/1;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: skyblue; //영역 구분용 컬러

  & > img {
    width: 75%;
    aspect-ratio: 1 / 1;

    border: black solid 1px;
    border-radius: 100%;
  }
`;

export default StProfileImg;