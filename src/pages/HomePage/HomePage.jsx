import React, { useEffect } from 'react';
import UpButton from '../../components/common/UpButton/UpButton';
import fetchPosts from '../../mockdatas/postFn';
export default function HomePage() {
  useEffect(() => {
    fetchPosts().then((posts) => {
      console.log(posts);
    });
  }, []);
  return (
    <>
      <div>HomePage: main</div>
      <UpButton />
    </>
  );
}
