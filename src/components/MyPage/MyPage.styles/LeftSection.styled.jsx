import styled from 'styled-components';
import { gap, padding } from './common-values';

const LeftSection = styled.section`
  width: 25%;

  display: flex;
  flex-direction: column;
  gap: ${gap};

  padding: ${padding};

  background-color: palegreen; //영역 구분용 컬러

  //프로필 사진 영역
  & > div {
    height: 33%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: skyblue; //영역 구분용 컬러
  }

  //회원정보 수정, 회원탈퇴 버튼 영역
  & > nav {
    background-color: var(--box-color);
    height: 66%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: ${padding};
  }
`;

export default LeftSection;
