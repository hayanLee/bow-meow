import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// /addPost에서 > PostImg.jsx 사용
const initialState = {
  images: [],
  files: []
};

const PostImgSlice = createSlice({
  initialState,
  name: 'PostImg',
  reducers: {
    addImg: (state, action) => {
      const newImages = action.payload.map((file) => ({
        file,
        id: uuidv4()
      }));
      state.files.push(...action.payload);
      state.images.push(...newImages);
    },
    removeImg: (state, action) => {
      const removedId = action.payload;
      const index = state.images.findIndex((image) => image.id === removedId);
      if (index !== -1) {
        state.files.splice(index, 1); // files
        state.images.splice(index, 1); // images
      }
    },
    clearImg: (state) => {
      state.images = [];
      state.files = [];
    }
  }
});

export const postImgReducer = PostImgSlice.reducer;
export const { addImg, removeImg, clearImg } = PostImgSlice.actions;
