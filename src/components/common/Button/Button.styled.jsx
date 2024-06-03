import styled from 'styled-components';

export const StBtn = styled.button`
  width: 250px;
  height: 50px;
  background-color: var(--point-color);
  color: var(--text-color);
  border: none;
  border-radius: 30px;
  font-size: 1.5rem;
  padding: 10px;

  margin: 10px;

  &:hover {
    filter: brightness(120%);
  }
`;
