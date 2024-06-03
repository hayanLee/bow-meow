import React from 'react';
import Button from '../../components/common/Button/Button';
import CustomLink from '../../components/common/CustomLink';
import UpButton from './UpButton';

export default function HomePage() {
  return (
    <>
      <Button text="버튼입니다" onClick={() => console.log('첫번째 버튼 클릭함')} />
      <Button text="두번째 버튼" onClick={() => console.log('두번째 버튼 클릭함')} />
      <CustomLink to="/MyPage">마이페이지 이동</CustomLink>
      <CustomLink to="/posts">안녕하세요</CustomLink>
      <div style={{ height: '2000px' }}>HomePage: main</div>
      <UpButton />
    </>
  );
}
