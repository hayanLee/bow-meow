import { v4 as uuidv4 } from 'uuid';

//Version 2.0 : 피그마 => 객체 구조 섹션에서 수정한 내용 반영

function loadMockData() {
  const userJohn = createUser(
    'John',
    'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/employee-icon.png'
  );

  const mockUserList = [
    userJohn,
    createUser(),
    createUser(),
    createUser(),
    createUser(),
    createUser(),
    createUser(),
    createUser()
  ];

  const mockPostList = [
    createPost(userJohn.userId),
    createPost(userJohn.userId),
    createPost(),
    createPost(),
    createPost(),
    createPost(),
    createPost()
  ];

  const mockLoginedUser = userJohn;

  return { mockUserList, mockPostList, mockLoginedUser };
}

function createPost(userId) {
  const post = {
    postId: uuidv4(),
    userId: userId ?? uuidv4(),
    postCommentsId: uuidv4(),

    date: '2020-02-02',

    title: '제목: ' + uuidv4(),
    images: ['dog.jpg', 'cat.jpg', 'cat2.jpg'],
    content: '내용: ' + uuidv4(),

    likeCount: 10
  };

  return post;
}

function createUser(nickname, imgURL) {
  const user = {
    userId: uuidv4(),
    nickname: nickname ?? uuidv4(),

    email: uuidv4(),
    pwd: uuidv4(),
    profileImg: imgURL ?? uuidv4(),
    introduce: '자기소개: ' + uuidv4()
  };

  return user;
}

export { loadMockData };

/*
//postComment: 포스트 아이디와 댓글 아이디들을 연결하는 객체
postComment1 = {
  postId: 'zzabcdje232'
  commentIds = ['zxczx12', ‘tqsd25’];
}

postComment2 = {
  postId: 'z12wqe232'
  commentIds = ['tqsd25',];
}

//comment: 댓글들을 표현하는 객체
comment = {
  commentId: 'zxczx12',
  nickname: "David",
  date: ‘2024-01-01’,
  content: ‘강아지가 귀엽네요’
}

comment1 = {
  commentId: tqsd25,
  nickname: "John",
  date: ‘2024-01-01’,
  content: ‘고양이 귀여워요’
}

comment2 = {
  commentId: cbq1d5,
  nickname: "Susan",
  date: ‘2024-02-02’,
  content: ‘정보 감사해요’
}

postComments = [postComment1, postComment2, ...];
comments = [comment1, comment2, ...];
*/
