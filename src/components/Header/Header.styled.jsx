import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

export const StHeader = styled.header`
  display: flex;
  align-items: center;
  margin: 20px auto 0 auto;
  width: 80%;
  height: 50px;
`;

export const StContainer = styled(StHeader)`
  /* justify-content: flex-end; */
  width: 100%;
`;

// export const StHeadLogo = styled.div`

// `;

export const StLogo = styled.img`
  /* height: inherit; */
  cursor: pointer;
`;

export const StTitle = styled.div`
  white-space: nowrap;
  font-size: 2rem;
  width: auto;
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
  white-space: nowrap;
  color: var(--write-color);
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: var(--point-color);
    transition: 0.2s;
  }
`;

export const StLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
`;

export const ProfileMyPageBtn = styled.div`
  width: 50px;
  height: 50px;
  font-size: 0;
  border-radius: 50px;
  border: 1px solid red;
  cursor: pointer;
`;
