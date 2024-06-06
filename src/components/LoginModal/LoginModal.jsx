import {
  ModalOverlay,
  Modal,
  ModalLoginBtn,
  ModalSginUpBtn
} from '../../pages/HomePage/HomePage.styles/HomePage.styled';
import logo from '../../assets/logo_img.png';
import Button from '../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useLoginModal } from '../../hooks/useLoginModal';

const LoginModal = () => {
  const navigate = useNavigate();
  const { close } = useLoginModal();

  const goLogIn = () => {
    navigate('/auth/logIn');
    close();
  };

  const goSignUp = () => {
    navigate('/auth/signUp');
    close();
  };
  return (
    <>
      <ModalOverlay>
        <Modal>
          <p>
            <img src={logo} alt="logo" />
          </p>
          <p>
            더 많은 정보가 궁금하다면
            <br /> 로그인을 해주세요!
          </p>

          <ModalLoginBtn>
            <Button onClick={goLogIn} text="로그인" />
          </ModalLoginBtn>
          <ModalSginUpBtn>
            <Button onClick={goSignUp} text="회원가입" />
          </ModalSginUpBtn>
        </Modal>
      </ModalOverlay>
    </>
  );
};

export default LoginModal;
