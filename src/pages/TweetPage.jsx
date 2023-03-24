/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import TweetInput from '../components/TweetInput';
import TweetList from '../components/TweetList';
import { currentUser, tweets } from '../dummyData';
import { getTweets } from '../api/tweet';

const StyledDiv = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
`;
export default function TweetPage() {
  // const [tweets, setTweets] = useState([]);
  // useEffect(() => {
  //   const getTweetsAsync = async () => {
  //     try {
  //       const { tweets } = await getTweets();
  //       setTweets(tweets);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getTweetsAsync();
  // }, [tweets]);

  return (
    <>
      <Header headerText="首頁" />
      <StyledDiv>
        <TweetInput user={currentUser} />
        <TweetList user={currentUser} tweets={tweets} type="tweet" />
      </StyledDiv>
    </>
  );
}
