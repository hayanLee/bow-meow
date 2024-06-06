import React from 'react';
import { CommentContainer, CommentContain, CommentWrite, DetailComment, Detailcomments, Comments } from './Comments.styled';

const Comment = () => {
  return (
    <CommentContainer>
      <CommentContain>
        <CommentWrite type="text" placeholder="댓글을 작성해주세요"></CommentWrite>
        <Detailcomments>
          <Comments>
            <DetailComment>초코맘: 너무 귀엽네요 고양이 조하: 고양이가 세상을 구한다</DetailComment>
          </Comments>
          <Comments>
            <DetailComment>고양이 조하: 고양이가 세상을 구한다</DetailComment>
          </Comments>
          <Comments>
            <DetailComment>멍냥: 강아지 고양이 둘다 좋아...</DetailComment>
          </Comments>
        </Detailcomments>
      </CommentContain>
    </CommentContainer>
  );
};
export default Comment;
