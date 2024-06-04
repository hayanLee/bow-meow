import styled from 'styled-components';
import { gap, padding } from './style-common-values';

//{StMain, StUpperSection, StLowerSection, StLabel, StLink, StSide, StPost }

export const StMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${gap * 3}px;
  padding: ${padding}px;
`;

export const StUpperSection = styled.section`
  height: 200px;

  display: flex;
  justify-content: center;
  gap: ${gap}px;
  padding: ${padding}px;

  background-color: white;
`;

export const StLowerSection = styled.section`
  min-height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${gap}px;
  padding: ${padding}px;

  background-color: white;
`;

export const StSideGroup = styled.div`
  width: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px 0px;

  & > :is(a, button) {
    line-height: 24px;
    width: 80%;
    height: 33%;
    margin: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${gap}px;
  font-size: 1.5rem;
`;

export const StPost = styled.article`
  width: 200px;
  height: 200px;

  display: flex;
  justify-content: center;

  background-color: var(--bg-color);
  border-radius: 30px;
  padding: 10px 10px;
`;

export const StPostImg = styled.img`
  width: 80%;
`;

export const StSide = styled.nav`
  height: 66%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: ${padding};
`;
