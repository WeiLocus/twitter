import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import Header from './Header';
import { StyledListItem } from './TweetList';
import { ReactComponent as Cross } from '../assets/Cross.svg';
import { adminGetTweets, deleteTweet } from '../api/admin';
import { countTimeDiff } from '../utilities';

// follow StyledListItem style by TweetList.jsx
const StyledTweetContainer = styled(StyledListItem)`
  grid-template-columns: calc(50px + 0.5rem) 1fr calc(10px);
  border: none;
  border-top: 1px solid var(--color-gray-200);
  border-bottom: 1px solid var(--color-gray-200);
`;

const StyledAdminTweetContainer = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
  overflow-x: hidden;
  border-inline: 1px solid var(--color-gray-200);
  background-color: #fff;

  .cross {
    width: 1rem;
    height: 1rem;
    padding-left: 0.25rem;
    color: var(--color-gray-700);
  }
`;

const StyledMessage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  border-inline: 2px solid var(--color-gray-200);
  color: var(--color-secondary);
`;

export default function AdminTweetList() {
  const [allTweets, setAllTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllTweets = async () => {
      try {
        const allTweets = await adminGetTweets();
        setAllTweets(allTweets);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getAllTweets();
  }, []);

  const handleDeleteClick = async (id) => {
    try {
      await deleteTweet(id);
      setAllTweets((prevAllTweets) =>
        prevAllTweets.filter((tweet) => {
          return tweet.id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const renderedItems = allTweets.map((tweet) => {
    if (!isLoading) {
      return (
        <TweetList key={tweet.id} tweet={tweet} onDelete={handleDeleteClick} />
      );
    }
  });

  return (
    <>
      <Header headerText="推文清單" />
      <StyledAdminTweetContainer>
        {renderedItems}
        {isLoading && (
          <StyledMessage>
            <div>
              <BeatLoader color="var(--color-theme)" />
            </div>
          </StyledMessage>
        )}
      </StyledAdminTweetContainer>
    </>
  );
}
function TweetList({ tweet, onDelete }) {
  const { id, description, createdAt, User } = tweet;
  const { account, name, avatar } = User;
  const timeAgo = countTimeDiff(createdAt);
  const tweetDescription =
    description.length > 50 ? `${description.slice(0, 50)}...` : description;

  return (
    <StyledTweetContainer>
      <img src={avatar} alt="avatar" />
      <div>
        <div className="user">
          <b>{name}</b>
          <span>@{account}</span>
          <span>．</span>
          <span>{timeAgo}</span>
        </div>
        <p className="content">{tweetDescription}</p>
      </div>
      <div className="cross">
        <Cross onClick={() => onDelete(id)} />
      </div>
    </StyledTweetContainer>
  );
}
