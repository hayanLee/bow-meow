import React from 'react';
import UpButton from '../../components/common/UpButton/UpButton';
import WriteButton from '../../components/common/WriteButton/WriteButton';
import ImageMasonry from '../../layout/Masonry';
import FilterContainer from '../../components/FilterContainer/FilterContainer';


export default function HomePage() {
  return (
    <>
      <FilterContainer />
      <ImageMasonry />
      <UpButton />
      <WriteButton />
    </>
  );
}
