import PostList from './PostList';
import styled from 'styled-components';
import { gap, padding } from '../MyPage.styles/style-common-values';

const StPostList = styled(PostList)`
  height: 85%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${gap}px;
  padding: ${padding}px;

  background-color: var(--box-color);
`;

export default StPostList;
