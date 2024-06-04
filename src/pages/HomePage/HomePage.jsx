import React, { useEffect, useState } from 'react';
import UpButton from '../../components/common/UpButton/UpButton';
import fetchPosts from '../../mockdatas/postFn';


export default function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  console.log(posts);
  return (
    <>
      <UpButton />
    </>
  );
}
