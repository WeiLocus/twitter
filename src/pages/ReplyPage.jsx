import styled from 'styled-components';
import Header from '../components/Header';
import TweetContent from '../components/TweetContent';
import TweetList from '../components/TweetList';
import { replies } from '../dummyData';

const StyledDiv = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
`;

export default function ReplyPage() {
  return (
    <>
      <Header headerText="推文" goBack />
      <StyledDiv>
        <TweetContent />
        <TweetList type="reply" tweets={replies} />
      </StyledDiv>
    </>
  );
}
