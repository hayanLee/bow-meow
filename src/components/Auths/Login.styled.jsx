import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const AuthsInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  input {
    border-radius: 5px;
    width: 250px;
    height: 40px;
    margin: 10px;
    border: 0;
  }
`;

export const AuthsBtn = styled.div`
  display: flex;
  justify-content: center;
  button {
    border-radius: 5px;
    width: 100px;
    height: 35px;
    margin: 10px;
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
    cursor: pointer;
  }
`;
