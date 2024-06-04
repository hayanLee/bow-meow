import React, { useState } from 'react';
import { signUpWithEmail } from '../supabase/auth.login';

export default function SupabaseTestPage() {
  const [value, setValue] = useState({ id: '', pw: '' });
  const onChange = (e) => setValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  const onClick = () => {
    signUpWithEmail(value.id, value.pw);
    // singInWithEmail(value.id, value.pw);
    // signOut();
    // resetPassWord(value.id);
  };

  return (
    <div>
      SupabaseTestPage
      <input type="text" onChange={onChange} id="id" />
      <input type="text" onChange={onChange} id="pw" />
      <button onClick={onClick}>click</button>
    </div>
  );
}
