import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

export default function AdminTweetList() {
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    const getAllTweets = async () => {
      try {
        const allTweets = await adminGetTweets();
        console.log('check');
        setAllTweets(allTweets);
        console.log('get tweets');
      } catch (error) {
        console.log(error);
      }
    };
    getAllTweets();
  }, []);
  const renderedItems = allTweets.map((tweet) => {
    return <TweetList key={tweet.id} tweet={tweet} />;
  });

  return (
    <>
      <Header headerText="推文清單" />
      <StyledAdminTweetContainer>{renderedItems}</StyledAdminTweetContainer>
    </>
  );
}
function TweetList({tweet}) {
  const { id, description, createdAt, User } = tweet;
  const { account, name, avatar } = User;
  const timeAgo = countTimeDiff(createdAt);
  return (
    <StyledTweetContainer id={id}>
      <NavLink to={`/users/${User.id}`}>
        <img src={avatar} alt="avatar" />
      </NavLink>
      <div>
        <div className="user">
          <b>{name}</b>
          <span>@{account}</span>
          <span>．</span>
          <span>{timeAgo}</span>
        </div>
        <p className="content">{description}</p>
      </div>
      <div className="cross">
        <Cross />
      </div>
    </StyledTweetContainer>
  );
}
