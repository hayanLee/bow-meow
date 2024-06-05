import React from 'react';
import UpButton from '../../components/common/UpButton/UpButton';
import WriteButton from '../../components/common/WriteButton/WriteButton';
import ImageMasonry from '../../layout/Masonry';

export default function HomePage() {
  return (
    <>
      <ImageMasonry />
      <UpButton />
      <WriteButton />
    </>
  );
}
