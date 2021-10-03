import type { NextPage } from 'next';
import styled from 'styled-components';

const StyledHome = styled.div`
  font-size: 2rem;
`;

const Home: NextPage = () => {
  return <StyledHome>Hello world</StyledHome>;
};

export default Home;