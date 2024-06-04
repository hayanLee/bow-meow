import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  posts: [
    {
      postId: 1,
      userId: 101,
      postCommentId: 1001,
      title: 'First Post',
      content: 'This is the content of the first post.',
      images: ['https://cdn.pixabay.com/photo/2023/04/28/14/35/dog-7956828_960_720.jpg']
    },
    {
      postId: 2,
      userId: 102,
      postCommentId: 1002,
      title: 'Second Post',
      content: 'This is the content of the second post.',
      images: [
        'https://cdn.pixabay.com/photo/2023/04/27/10/22/cat-7954262_1280.jpg',
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg'
      ]
    },
    {
      postId: 3,
      userId: 103,
      postCommentId: 1003,
      title: 'Third Post',
      content: 'This is the content of the third post.',
      images: [
        'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/06/29/12/28/cats-8096304_960_720.jpg',
        'https://cdn.pixabay.com/photo/2023/07/15/15/41/dog-8129106_1280.jpg'
      ]
    }
  ]
};

// 이런 방식으로 접근하시면 됩니다!
// 처음 posts는 reducer, 나중 posts는 state의 posts 이름입니다

// const posts = useSelector((state) => console.log(state.posts.posts));
// const testDis = () => dispatch(createPost(1, 2));

const postSlice = createSlice({
  initialState,
  name: 'post',
  reducers: {
    createPost: (state, action) => {
      console.log(action);
    },
    deletePost: (state, action) => {
      console.log(action);
    },
    updatePost: (state, action) => {
      console.log(action);
    }
  }
});

export const postReducer = postSlice.reducer;
export const { createPost, deletePost, updatePost } = postSlice.actions;