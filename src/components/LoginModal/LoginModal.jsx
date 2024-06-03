import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  width: 300px;
  height: 350px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--modal-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginModal = () => {
  return (
    <>
      <Modal>
        <h1>제목</h1>
        <p>더 많은 정보가 궁금하다면 로그인을 해주세요!</p>
        <button>로그인하기</button>
        <button>회원가입</button>
      </Modal>
    </>
  );
};

export default LoginModal;
