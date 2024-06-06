import supabase from './supabaseClient';

// 닉네임 저장 안함
export const signUpWithEmail = async (email, password) => {
  console.log('회원가입', email, password);
  // user_metadata;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nickname: '테스트닉네임'
      }
    }
  });
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
export const resetPassWord = async () => {
  // 1. 비번 리셋
  // 2. 새로운 비번 입력
  console.log('비번 리셋 완료');
  const newPassword = prompt('새로운 비번 입력');
  const { data, error } = await supabase.auth.updateUser({ password: newPassword }); //
  if (data) console.log('비번 변경 완료', data);
  if (error) console.log('비번 변경 실패', error);
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

export const getUser = async () => {
  const { data: authUser, error } = await supabase.auth.getUser();
  // console.log(user);
  if (authUser) return authUser;
  if (error) {
    console.log('로그인한 유저를 찾을 수 없음', error);
    return;
  }
};

// 이벤트리스너
// const { data } = supabase.auth.onAuthStateChange((event, session) => {
//   // console.log(data, event, session);
//   if (event === 'INITIAL_SESSION') {
//     // console.log('첫번째 세션');
//     // handle initial session
//   } else if (event === 'SIGNED_IN') {
//     console.log('로그인 이벤트');
//     // handle sign in event
//   } else if (event === 'SIGNED_OUT') {
//     console.log('로그아웃 이벤트');
//     // handle sign out event
//   } else if (event === 'PASSWORD_RECOVERY') {
//     console.log('비밀번호 초기화됨');
//     // handle password recovery event
//   } else if (event === 'TOKEN_REFRESHED') {
//     // handle token refreshed event
//   } else if (event === 'USER_UPDATED') {
//     // handle user updated event
//   }
// });
