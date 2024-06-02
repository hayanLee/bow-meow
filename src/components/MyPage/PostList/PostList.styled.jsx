import PostList from './PostList';
import styled from 'styled-components';
import { gap, padding } from '../MyPage.styles/style-common-values';

const StPostList = styled(PostList)`
  height: 85%;

  display: flex;
  flex-direction: column;
  gap: ${gap}px;
  padding: ${padding}px;

  background-color: var(--box-color);
`;

export default StPostList;
