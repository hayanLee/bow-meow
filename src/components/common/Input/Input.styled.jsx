import styled from 'styled-components';

export const StSearchInput = styled.input`
  width: 100%;
  height: 20%;
  border: 2px solid var(--point-color);
  border-radius: 30px;
  padding: 10px 20px;
  outline: none;
  font-size: 1rem;

  &:focus {
    outline: 1px solid var(--bg-color);
  }
`;
