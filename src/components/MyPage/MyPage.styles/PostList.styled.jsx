import PostList from '../PostList';
import styled from 'styled-components';
import { gap, padding } from './common-values';

const StPostList = styled(PostList)`
  height: 85%;

  display: flex;
  flex-direction: column;
  gap: ${gap};
  padding: ${padding};

  background-color: var(--box-color);
`;

export default StPostList;
