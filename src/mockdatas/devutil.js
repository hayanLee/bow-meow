import { v4 as uuidv4 } from 'uuid';

/* 설명: loadMockData()
 다음 데이터를 반환
  -John 유저와 John 유저가 작성한 포스트들
  -기타 유저들과 기타 유저들이 작성한 포스트들
  -로그인된 유저 = John 유저
 
 사용 케이스
  -로그인된 유저가 쓴 포스팅을 추출하거나
  글을 작성해서 저장할 때 사용
  -단순히 포스트를 보여주려고 할 때에는
  postFn.js 사용  
*/

//Version 3.0
// 포스트에 더미 사진 이미지 추가
// 댓글 개수 프로퍼티 추가 (임시)

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
    images: [
      'https://cdn.pixabay.com/photo/2023/04/28/14/35/dog-7956828_960_720.jpg',
      'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg'
    ],
    content: '내용: ' + uuidv4(),

    likeCount: 10,
    commentCount: 3
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
