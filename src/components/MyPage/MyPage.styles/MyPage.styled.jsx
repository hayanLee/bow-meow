import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gap, padding } from './style-common-values';

//{StMain, StUpperSection, StLowerSection, StLabel, StLink, StSide, StPost }

export const StMain = styled.main`
  height: 80vh;
  min-width: 1200px;
  max-width: 1500px;

  display: flex;
  flex-direction: column;
  gap: ${gap}px;
  padding: ${padding}px;

  background-color: var(--bg-color);
  background-color: green; //영역 구분용 컬러
  color: var(--text-color);
`;

export const StUpperSection = styled.section`
  height: 20%;

  display: flex;
  gap: ${gap}px;
  padding: ${padding}px;

  background-color: palegreen; //영역 구분용 컬러
`;

export const StLowerSection = styled.section`
  height: 80%;

  display: flex;
  flex-direction: column;
  gap: ${gap}px;
  padding: ${padding}px;

  background-color: palevioletred; //영역 구분용 컬러
`;

export const StLabel = styled.label`
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--point-color);
  color: var(--text-color);
`;

export const StLink = styled(Link)`
  background-color: var(--point-color);
  color: var(--text-color);

  border-radius: 30px;
`;

export const StPost = styled.article`
  background-color: var(--bg-color);
  color: black;
  border-radius: 30px;
  padding: 0px 10px;
`;

export const StSide = styled.nav`
  background-color: var(--box-color);
  height: 66%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: ${padding};
`;
