import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // 현재 로그인 유저 id, 닉네임
  isLogin: false,
  userId: '',
  nickname: '',
  profileImg: ''
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    updateUserProfile: (state, action) => {
      console.log('>>>>>>', action);
      const { isLogin, userId, nickname, profileImg } = action.payload;
      state.isLogin = isLogin;
      state.userId = userId !== undefined ? userId : state.userId;
      state.nickname = nickname !== undefined ? nickname : state.nickname;
      state.profileImg = profileImg !== undefined ? profileImg : state.profileImg;
    },
    clearUser: (state, action) => {
      console.log('>>>>>>', action);
      state.isLogin = false;
      state.userId = initialState.userId;
      state.nickname = initialState.nickname;
      state.profileImg = initialState.profileImg;
    }
  }
});

export const userReducer = userSlice.reducer;
export const { updateUserProfile, clearUser } = userSlice.actions;
