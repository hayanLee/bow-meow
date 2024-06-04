import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StLayout = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;
  border-radius: 20px;
  width: 500px;
  height: 800px;
  background-color: var(--box-color);
`;

export const StLogo = styled.img`
  width: 200px;
  height: auto;
  margin: 0 auto;
  cursor: pointer;
  /* position: absolute; */
  top: 5%;
`;
