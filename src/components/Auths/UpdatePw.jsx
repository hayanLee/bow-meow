import React, { useState } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import supabase from '../../supabase/supabaseClient';

export default function UpdatePW() {
  const [changePW, setChangePW] = useState();
  const [checkPW, setCheckPW] = useState();

  const handleChangePW = async () => {
    const user = supabase.auth.user();
    if (!user) {
      console.log('사용자 정보를 가져올 수 없습니다.');
      return;
    }

    if (changePW !== checkPW) {
      console.log('비밀번호가 일치하지 않습니다.');
      return;
    }

    const { error } = await supabase.auth.updateUser(user.id, { password: changePW });

    if (error) {
      console.log('비밀번호 변경 중 오류가 발생했습니다.', error.message);
    } else {
      console.log('비밀번호가 성공적으로 변경되었습니다.');
    }
  };

  return (
    <div>
      UpdatePW
      <Input type="text" placeholder="바꿀 비밀번호" value={changePW} onChange={(e) => setChangePW(e.target.value)} />
      <Input
        type="text"
        placeholder="바꿀 비밀번호 확인 "
        value={checkPW}
        onChange={(e) => setCheckPW(e.target.value)}
      />
      <Button onClick={handleChangePW} text="확인"></Button>
    </div>
  );
}
