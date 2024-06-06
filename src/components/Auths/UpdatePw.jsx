import { useRef } from 'react';
import Input from '../common/Input/Input';
import supabase from '../../supabase/supabaseClient';
import Button from '../common/Button';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';

const UpdatePW = () => {
  const resetRef = useRef(null);
  const verifyRef = useRef(null);

  const resetData = async () => {
    const { data, error } = await supabase.auth.updateUser({
      password: resetRef.current.value,
      nonce: verifyRef.current.value
    });
    console.log(data);
  };

  const getNonce = async () => {
    const { error } = await supabase.auth.reauthenticate();

    console.log(error);
  };

  return (
    <Wrapper>
      <div>
        <AuthsBtn>
          <Button onClick={getNonce} text="인증번호 요청"></Button>
        </AuthsBtn>
        <AuthsInput>
          <Input inputref={verifyRef} placeholder="인증번호" />
          <Input inputref={resetRef} placeholder="새 비밀번호" />
        </AuthsInput>
        <AuthsBtn>
          <Button onClick={resetData} text="변경하기"></Button>
        </AuthsBtn>
      </div>
    </Wrapper>
  );
};

export default UpdatePW;
