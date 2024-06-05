import React, { useEffect, useState } from 'react';
import UpButton from '../../components/common/UpButton/UpButton';
import fetchPosts from '../../mockdatas/postFn';
import WriteButton from '../../components/common/WriteButton/WriteButton';
import ImageMasonry from '../../layout/Masonry';


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
      <ImageMasonry />
      <UpButton />
      <WriteButton />
    </>
  );
}
