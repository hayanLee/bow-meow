import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: var(--box-color);
  border-radius: 20px;

  p {
    margin-bottom: 10px;
  }
`;

export const AuthsInput = styled.div`
  background-color: var(--box-color);
  display: flex;
  justify-content: center;
  flex-direction: column;
  input {
    border-radius: 5px;
    width: 270px;
    height: 50px;
    margin: 20px;
    border: 0;
  }
`;

export const AuthsBtn = styled.div`
  display: flex;
  justify-content: center;
  button {
    border-radius: 5px;
    width: 120px;
    height: 40px;
    margin: 15px;
    margin-top: 20px;
    font-size: 1rem;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const SearchIdPw = styled.div`
  display: flex;
  justify-content: center;

  div {
    padding: 5px;
    margin: 5px;
    cursor: pointer;
  }
`;
