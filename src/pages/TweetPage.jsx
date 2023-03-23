import styled from 'styled-components';
import Header from '../components/Header';
import TweetInput from '../components/TweetInput';
import TweetList from '../components/TweetList';

const StyledDiv = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
`;

export default function TweetPage() {
  return (
    <>
      <Header headerText="首頁" />
      <StyledDiv>
        <TweetInput />
        <TweetList />
      </StyledDiv>
    </>
  );
}
