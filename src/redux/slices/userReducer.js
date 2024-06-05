import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //현재: 더미데이터
  //Todo: DB에서 유저리스트를 불러와서 initialState를 초기화
  users: [
    {
      userId: 101,
      nickname: 'John',
      email: 'helloworld@naver.com',
      pwd: '123123123',
      profileImg: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/employee-icon.png',
      introduce: '잘 부탁드려요'
    },
    {
      userId: 102,
      nickname: 'Mary',
      email: 'marryplace@naver.com',
      pwd: 'abcabcabc',
      profileImg: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/employee-icon.png',
      introduce: '반가워요'
    }
  ]
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    updateUserProfile: (state, action) => {
      const newUserProfile = action.payload;

      const loginedUserIdx = state.users.findIndex((user) => user.userId === newUserProfile.userId);

      if (loginedUserIdx !== -1) {
        state.users[loginedUserIdx] = newUserProfile;
      }
    }
  }
});

export const userReducer = userSlice.reducer;
export const { updateUserProfile } = userSlice.actions;
