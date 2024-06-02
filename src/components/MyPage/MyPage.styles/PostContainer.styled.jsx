import styled from 'styled-components';
import { gap, padding } from './common-values';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: ${gap};
  padding: ${padding};
  height: 15%;
`;

export default PostContainer;
