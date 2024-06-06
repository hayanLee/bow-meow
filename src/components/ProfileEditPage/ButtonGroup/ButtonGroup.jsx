//Subcomponents
import { StButtonGroup, StRightGroup, StLeftGroup } from './ButtonGroup.styled';
import Button from './../../common/Button/Button';

//React Lib
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

//SupaBase API
import { forgetPassWord } from './../../../supabase/auth.login';

const ButtonGroup = forwardRef(({ loginedUser }, ref) => {
  const navigate = useNavigate();

  function handleDeleteButtonClick() {
    alert('회원탈퇴 미구현');
  }

  function handleResetButtonClick() {
    console.log('loginedUser ↓');
    console.dir(loginedUser);

    //SupaBase API
    forgetPassWord(loginedUser.email);

    alert('가입 이메일로 비밀번호 초기화 링크를 보내드렸습니다.');
  }

  function handleBackButtonClick() {
    navigate('/');
  }

  function handleEditButtonClick() {
    ref.current.handleEditButtonClick();
  }

  return (
    <StButtonGroup>
      <StLeftGroup>
        <Button onClick={handleDeleteButtonClick} text="회원탈퇴" />
        <Button onClick={handleResetButtonClick} text="비번 초기화" />
      </StLeftGroup>
      <StRightGroup>
        <Button onClick={handleBackButtonClick} text="뒤로가기" />
        <Button onClick={handleEditButtonClick} text="수정하기" />
      </StRightGroup>
    </StButtonGroup>
  );
});

export default ButtonGroup;
