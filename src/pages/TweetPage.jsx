import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import TweetInput from '../components/TweetInput';
import { TweetList } from '../components/TweetList';
import { currentUser } from '../dummyData';
import { getTweets } from '../api/tweet';

const StyledDiv = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
`;

export default function TweetPage() {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tweetInput, setTweetInput] = useState('');

  const handleInputChange = (value) => {
    setTweetInput(value);
  };

  const handleAddTweet = async () => {
    try {
      // const data = await addTweet({ description: tweetInput });
      console.log(
        `user ${currentUser.id} just submitted a tweet: ${tweetInput}`
      );
      // 重新setTweets
      const nextTweets = [
        {
          id: 802,
          description: tweetInput,
          createdAt: '2023-03-25T15:58:29.000Z',
          replyCounts: 0,
          likeCounts: 0,
          isLiked: 0,
          User: {
            id: currentUser.id,
            account: currentUser.account,
            name: currentUser.name,
            avatar: currentUser.avatar,
          },
        },
        ...tweets,
      ];
      setTweets(nextTweets);
      setTweetInput('');
      localStorage.setItem('storedTweets', JSON.stringify(nextTweets));
      return { status: 'ok' };
    } catch (error) {
      console.log(error);
      return { status: 'error' };
    }
  };

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
