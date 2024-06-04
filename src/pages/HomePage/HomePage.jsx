import React from 'react';
import UpButton from '../../components/common/UpButton/UpButton';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function HomePage() {
  return (
    <>
      <Skeleton />
      <Skeleton count={5} />
      <div>HomePage: main</div>
      <UpButton />
    </>
  );
}
