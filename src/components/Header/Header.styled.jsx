import { FiSearch } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
export const StHeader = styled.header`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  width: 100%;
  height: 100px;
  padding: 0 20px;
`;

export const StContainer = styled(StHeader)`
  justify-content: flex-end;
  gap: 30px;
`;

export const StLogo = styled.img`
  height: inherit;
  cursor: pointer;
`;

export const StSearchWrapper = styled.div`
  width: 350px;
  position: relative;
`;

export const StSearchIcon = styled(FiSearch)`
  position: absolute;
  font-size: 1.2rem;
  top: 25%;
  right: 20px;
  cursor: pointer;
`;

export const StHamburger = styled(GiHamburgerMenu)`
  color: var(--text-color);
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: var(--point-color);
    transition: 0.2s;
  }
`;
