import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import TweetContent from '../components/TweetContent';
import { ReplyList } from '../components/TweetList';
import { tweets, replies, currentUser } from '../dummyData';
import { getSingleTweet } from '../api/tweet';

const StyledDiv = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
`;

export default function ReplyPage() {
  // 注意 id 是字串
  const { id } = useParams();
  const [selectedTweet, setSelectedTweet] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSingleTweetAsync = async () => {
      try {
        const tweet = await getSingleTweet(id);
        console.log(`tweet ${id} get!`);
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
    console.log(storedSelectedTweet);
    if (storedSelectedTweet) {
      setSelectedTweet(storedSelectedTweet);
      return setIsLoading(false);
    }
    getSingleTweetAsync();
  }, []);

  return (
    <>
      <Header headerText="推文" goBack />
      <StyledDiv>
        {!isLoading && (
          <>
            <TweetContent tweet={selectedTweet} user={currentUser} />
            <ReplyList replies={replies} replyTo={selectedTweet} />
          </>
        )}
      </StyledDiv>
    </>
  );
}
