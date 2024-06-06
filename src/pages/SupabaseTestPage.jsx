// import React, { useState } from 'react';
// import { checkSignIn, forgetPassWord, signOut, signUpWithEmail, singInWithEmail } from '../supabase/auth.login';
// import { getPetsOfUserImage } from '../supabase/post';
// import { checkProfile } from '../supabase/profile';
// import UpdatePW from '../components/Auths/UpdatePw';

// export default function SupabaseTestPage() {
//   const [value, setValue] = useState({ id: '', pw: '' });
//   const onChange = (e) => setValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));

//   const lengthPassword = (password) => {
//     if (password.length !== 6) {
//       alert('비밀번호를 6자리로 입력해주세요');
//       return false;
//     }
//     return true;
//   };

//   const onLogin = () => {
//     singInWithEmail(value.id, value.pw);
//     // resetPassWord(value.id);
//     // insertPost();
//   };

//   const onSignUp = async () => {
//     if (!lengthPassword(value.pw)) return;
//     await signUpWithEmail(value.id, value.pw);
//   };
//   const onLogout = () => signOut();
//   const onClickAuth = () => checkSignIn();
//   // const onClickAuth = () => {
//   //   getUser().then((user) => console.log(user));
//   // };

//   // const onGetPost = async () => {
//   //   const posts = await getImagesFromTable();
//   //   console.log(posts);
//   // };

//   const onGetUserPosts = async (userId) => {
//     const userPosts = await getPetsOfUserImage(userId);
//     console.log(userPosts); // 여기서 userPosts는 해당 사용자의 게시물입니다.
//   };

//   const onUpdatePost = async (id) => {
//     console.log(id);
//     await updatePost(id);
//   };

//   const onCheckProfile = async () => {
//     checkProfile();
//   };

//   const onForgetPassword = async () => await UpdatePW(value.id);

//   return (
//     <div>
//       SupabaseTestPage
//       <input type="text" onChange={onChange} id="id" />
//       <input type="text" onChange={onChange} id="pw" />
//       <button onClick={onSignUp}>회원가입</button>
//       <button onClick={onLogin}>로그인</button>
//       <button onClick={onLogout}>로그아웃</button>
//       <button onClick={onClickAuth}>로그인 여부 확인</button>
//       {/* <button onClick={onGetPost}>글 조회하기</button> */}
//       <button onClick={() => onGetUserPosts('46c9e5cd-7044-414d-a35e-5a84c9bab60e')}>사용자 피드 조회하기</button>
//       {/* <button onClick={() => onCreatePost(files)}>글 작성하기</button> */}
//       {/* <button onClick={() => onDeletePost(id)}>글 삭제하기</button> */}
//       {/* <button onClick={() => onUpdatePost(4)}>글 갱신하기</button> */}
//       <button onClick={onCheckProfile}>기본 이미지 주소</button>
//       <button onClick={onForgetPassword}>비번 갱신 이메일 보내기</button>
//     </div>
//   );
// }
