import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Header from '../components/Header';
import TweetInput from '../components/TweetInput';
import { TweetList } from '../components/TweetList';
import { getTweets } from '../api/tweet';

const StyledDiv = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
`;

export default function TweetPage() {
  const [isLoading, setIsLoading] = useState(true);
  const {
    currentUser,
    tweets,
    setTweets,
    tweetInput,
    handleInputChange,
    handleAddTweet,
  } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
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
        <TweetInput
          tweetInput={tweetInput}
          currentUser={currentUser}
          onChange={handleInputChange}
          onAddTweet={handleAddTweet}
        />
        <TweetList user={currentUser} tweets={tweets} type="tweet" />
      </StyledDiv>
    </>
  );
}
