import supabase from './supabaseClient';

// 닉네임 저장 안함
export const signUpWithEmail = async (email, password) => {
  console.log('회원가입', email, password);
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (data) console.log(data);
  if (error) console.log(error);
};

export const singInWithEmail = async (email, password) => {
  console.log('로그인', email, password);
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (data) console.log(data);
  if (error) console.log(error);
};

export const signOut = async () => {
  console.log('로그아웃');
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
};

// 비밀번호 찾기
export const resetPassWord = async (email) => {
  // 1. 비번 리셋
  const { data, error } = await supabase.auth.resetPasswordForEmail(email); // 해당 이메일 비번 초기화
  if (data) {
    // 2. 새로운 비번 입력
    console.log('비번 리셋 완료');
    const newPassword = prompt('새로운 비번 입력');
    if (newPassword.length < 6) alert('최소 6자리 이상');
    const { data, error } = await supabase.auth.updateUser({ password: newPassword });
    if (data) console.log('비번 변경 완료', data);
    if (error) console.log('비번 변경 실패', error);
  }
  if (error) console.log('비번 리셋 실패', error);
};

export const forgetPassWord = async (email) => {
  let { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (data) console.log(data);
  if (error) console.log(error);
};

export const checkSignIn = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (data) console.log(data);
  if (error) console.log(error);
};

// 이벤트리스너
const { data } = supabase.auth.onAuthStateChange((event, session) => {
  // console.log(data, event, session);
  if (event === 'INITIAL_SESSION') {
    // console.log('첫번째 세션');
    // handle initial session
  } else if (event === 'SIGNED_IN') {
    console.log('로그인 이벤트');
    // handle sign in event
  } else if (event === 'SIGNED_OUT') {
    console.log('로그아웃 이벤트');
    // handle sign out event
  } else if (event === 'PASSWORD_RECOVERY') {
    console.log('비밀번호 초기화됨');
    // handle password recovery event
  } else if (event === 'TOKEN_REFRESHED') {
    // handle token refreshed event
  } else if (event === 'USER_UPDATED') {
    // handle user updated event
  }
});
