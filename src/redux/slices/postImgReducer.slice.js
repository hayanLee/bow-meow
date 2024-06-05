import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// /addPost에서 > PostImg.jsx 사용
const initialState = {
  images: [], // 이미지 파일 및 정보를 저장할 배열
  files: [] // 업로드된 파일을 저장할 배열
};

const PostImgSlice = createSlice({
  initialState,
  name: 'PostImg',
  reducers: {
    addImg: (state, action) => {
      // 전달된 파일들을 기반으로 새로운 이미지 객체 생성 및 상태 업데이트
      const newImages = action.payload.map((file) => ({
        file,
        id: uuidv4()
      }));
      state.files.push(...action.payload); // 전달된 파일을 files 배열에 추가
      state.images.push(...newImages); // 새로운 이미지 정보를 images 배열에 추가
    },
    removeImg: (state, action) => {
      const removedId = action.payload;
      const index = state.images.findIndex((image) => image.id === removedId); // 제거할 이미지의 인덱스 찾기
      if (index !== -1) {
        state.files.splice(index, 1); // files 배열에서 해당 인덱스의 파일 제거
        state.images.splice(index, 1); // images 배열에서 해당 인덱스의 이미지 정보 제거
      }
    },
    // 이미지 초기화 액션
    clearImg: (state) => {
      state.images = [];
      state.files = [];
    }
  }
});

// slice의 리듀서와 액션들을 내보냄
export const postImgReducer = PostImgSlice.reducer; //리듀서
export const { addImg, removeImg, clearImg } = PostImgSlice.actions; //액션
