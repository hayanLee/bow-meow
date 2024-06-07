import styled from 'styled-components';

const StInputField = styled.input`
  width: 80%;
  border: 2px solid var(--point-color);
  border-radius: 30px;
  padding: 20px 20px;
  outline: none;
  font-size: 1.5rem;

  &:focus {
    outline: 1px solid var(--bg-color);
  }
  color: black;
`;

export default StInputField;
