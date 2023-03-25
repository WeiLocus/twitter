/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import TweetInput from '../components/TweetInput';
import { TweetList } from '../components/TweetList';
import { currentUser, tweets } from '../dummyData';
import { getTweets } from '../api/tweet';

const StyledDiv = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
`;
export default function TweetPage() {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const tweets = await getTweets();
        console.log('tweets get!');
        localStorage.setItem('storedTweets', JSON.stringify(tweets));
        setTweets(tweets);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    const storedTweets = JSON.parse(localStorage.getItem('storedTweets'));
    if (storedTweets) {
      setTweets(storedTweets);
      return setIsLoading(false);
    }
    getTweetsAsync();
  }, []);

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
