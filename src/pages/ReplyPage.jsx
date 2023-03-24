import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import TweetContent from '../components/TweetContent';
import TweetList from '../components/TweetList';
import { tweets, replies, loginUser } from '../dummyData';
import { getSingleTweet } from '../api/tweet';

const StyledDiv = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
`;

export default function ReplyPage() {
  // 注意 id 是字串
  const { id } = useParams();
  const selectedTweet = tweets.find((tweet) => tweet.id === parseInt(id));
  // const [tweet, setTweet] = useState(undefined);

  // useEffect(() => {
  //   const getSingleTweetAsync = async () => {
  //     try {
  //       const { tweet } = await getSingleTweet(id);
  //       setTweet(tweet);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getSingleTweetAsync();
  // }, [tweet]);

  return (
    <>
      <Header headerText="推文" goBack />
      <StyledDiv>
        <TweetContent tweet={selectedTweet} user={loginUser} />
        <TweetList type="reply" tweets={replies} />
      </StyledDiv>
    </>
  );
}
