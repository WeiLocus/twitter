import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';
import Header from '../components/Header';
import TweetContent from '../components/TweetContent';
import { ReplyList } from '../components/TweetList';
import { useUser } from '../contexts/UserContext';
import { getSingleTweet, getReplies } from '../api/tweet';

const StyledDiv = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
  border-inline: 1px solid var(--color-gray-200);
`;

const StyledMessage = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  text-align: center;
  color: var(--color-secondary);
`;

export default function ReplyPage() {
  // 注意 id 是字串
  const { id } = useParams();
  const { currentUser } = useUser();
  const [selectedTweet, setSelectedTweet] = useState({});
  const [tweetReplies, setTweetReplies] = useState([]);
  const [replyInput, setReplyInput] = useState('');
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
        } else {
          localStorage.setItem(`storedTweetReplies${id}`, JSON.stringify([]));
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

  const handleInputChange = (value) => {
    setReplyInput(value);
  };

  const handleAddReply = async () => {
    try {
      // const data = await addTweet({ description: tweetInput });
      // if (data === 'error') return;
      console.log(
        `user ${currentUser.id} just submitted a reply to tweet ${selectedTweet.id}: ${replyInput}`
      );
      // 重新setTweets
      const nextTweetReplies = [
        {
          id: 999, // data.id
          comment: replyInput, // data.comment
          createdAt: '2023-03-25T05:24:29.000Z', // data.createdAt
          User: {
            id: currentUser.id,
            account: currentUser.account,
            name: currentUser.name,
            avatar: currentUser.avatar,
          },
        },
        ...tweetReplies,
      ];
      setTweetReplies(nextTweetReplies);
      setReplyInput('');
      localStorage.setItem(
        `storedTweetReplies${id}`,
        JSON.stringify(nextTweetReplies)
      );
      return { status: 'ok' };
    } catch (error) {
      console.log(error);
      return { status: 'error' };
    }
  };

  return (
    <>
      <Header headerText="推文" goBack />
      <StyledDiv>
        {isLoading && (
          <StyledMessage>
            <BeatLoader color="var(--color-theme)" />
          </StyledMessage>
        )}
        {!isLoading && (
          <TweetContent
            tweet={selectedTweet}
            currentUser={currentUser}
            replyInput={replyInput}
            onChange={handleInputChange}
            onAddReply={handleAddReply}
          />
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
