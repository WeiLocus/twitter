import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import TweetContent from '../components/TweetContent';
import { ReplyList } from '../components/TweetList';
import { currentUser } from '../dummyData';
import { getSingleTweet, getReplies } from '../api/tweet';

const StyledDiv = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
  border-inline: 1px solid var(--color-gray-200);
`;

const StyledMessage = styled.div`
  padding: 2rem 0;
  text-align: center;
  color: var(--color-secondary);
`;

export default function ReplyPage() {
  // 注意 id 是字串
  const { id } = useParams();
  const [selectedTweet, setSelectedTweet] = useState({});
  const [tweetReplies, setTweetReplies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSingleTweetAsync = async () => {
      try {
        const tweet = await getSingleTweet(id);
        console.log(`tweet ${id} get!`);
        const replies = await getReplies(id);
        if (replies !== undefined) {
          console.log(`tweet ${id} replies get!`);
          localStorage.setItem(
            `storedTweetReplies${id}`,
            JSON.stringify(replies)
          );
          setTweetReplies(replies);
        }

        localStorage.setItem(`storedTweet${id}`, JSON.stringify(tweet));

        setSelectedTweet(tweet);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    const storedSelectedTweet = JSON.parse(
      localStorage.getItem(`storedTweet${id}`)
    );
    const storedSelectedTweetReplies = JSON.parse(
      localStorage.getItem(`storedTweetReplies${id}`)
    );
    if (storedSelectedTweet && storedSelectedTweetReplies) {
      setSelectedTweet(storedSelectedTweet);
      setTweetReplies(storedSelectedTweetReplies);
      return setIsLoading(false);
    }
    getSingleTweetAsync();
  }, []);

  return (
    <>
      <Header headerText="推文" goBack />
      <StyledDiv>
        {isLoading && <StyledMessage>貼文載入中</StyledMessage>}
        {!isLoading && (
          <TweetContent tweet={selectedTweet} user={currentUser} />
        )}
        {!isLoading && tweetReplies !== null && (
          <ReplyList replies={tweetReplies} replyTo={selectedTweet} />
        )}
        {!isLoading && tweetReplies.length === 0 && (
          <StyledMessage>該貼文目前沒有回覆</StyledMessage>
        )}
      </StyledDiv>
    </>
  );
}
