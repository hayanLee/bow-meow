import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

export const StHeader = styled.header`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin: 20px auto 0 auto;
  width: 80%;
  height: 50px;
`;

export const StContainer = styled(StHeader)`
  justify-content: flex-end;
  gap: 30px;
`;

export const StLogo = styled.img`
  /* height: inherit; */
  margin-top: 20px;
  cursor: pointer;
`;

export const StTitle = styled.div`
  font-size: 2rem;
  width: auto;
  background-color: red;
`;

export const StSearchWrapper = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;

export const StSearchIcon = styled(FiSearch)`
  position: absolute;
  font-size: 1.2rem;
  top: 25%;
  right: 20px;
  cursor: pointer;
`;

export const StLogin = styled.div`
  color: var(--write-color);
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: var(--point-color);
    transition: 0.2s;
  }
`;
