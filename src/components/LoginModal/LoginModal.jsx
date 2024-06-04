import { ModalOverlay, Modal } from '../../pages/HomePage/HomePage.styles/HomePage.styled';
import { useLoginModal } from '../../Hooks/loginModalHook';
import logo from '../../assets/logo_img.png';

const LoginModal = () => {
  const { close } = useLoginModal();
  return (
    <>
      <ModalOverlay onClick={close}>
        <Modal>
          <p>
            <img src={logo} alt="logo" />
          </p>
          <p>더 많은 정보가 궁금하다면 로그인을 해주세요!</p>
          <button>로그인하기</button>
          <button>회원가입</button>
        </Modal>
      </ModalOverlay>
    </>
  );
};

export default LoginModal;
