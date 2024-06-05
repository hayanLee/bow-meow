import React from 'react';
import { LikeListBtn, NewListBtn, StFilter } from '../../pages/HomePage/HomePage.styles/HomePage.styled';

const FilterContainer = () => {
  return (
    <>
      <StFilter>
        <NewListBtn>최신순 |</NewListBtn>
        <LikeListBtn>인기순</LikeListBtn>
      </StFilter>
    </>
  );
};

export default FilterContainer;
