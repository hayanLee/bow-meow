import styled from 'styled-components';

export const StNavbar = styled.nav`
  width: 300px;
`;

// export const StUl = styled.ul`
//   display: flex;
//   justify-content: space-around;
//   gap: 25px;
// `;
export const StText = styled.div`
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;

  &:hover {
    color: var(--point-color);
    transition: 0.2s;
  }
`;
