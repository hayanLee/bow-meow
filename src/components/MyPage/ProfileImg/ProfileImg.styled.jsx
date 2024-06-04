import styled from 'styled-components';

const StProfileImg = styled.div`
  width: 200px;
  aspect-ratio: 1/1;

  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 75%;
    aspect-ratio: 1 / 1;

    border: black solid 1px;
    border-radius: 100%;
  }
`;

export default StProfileImg;
