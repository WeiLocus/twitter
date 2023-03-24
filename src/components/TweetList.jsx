/* eslint-disable operator-assignment */
import { useState } from 'react';
import styled from 'styled-components';
import { NavLink, useOutletContext } from 'react-router-dom';
import { ReactComponent as CommentIcon } from '../assets/Comment.svg';
import { ReactComponent as LikeIcon } from '../assets/Like.svg';
import { ReactComponent as LikeBlackIcon } from '../assets/Like-black.svg';
import { ReplyModal } from './elements/TweetModal';
import { countTimeDiff } from '../utilities';

const StyledList = styled.ul`
  background-color: white;
`;

const StyledListItem = styled.li`
  cursor: pointer;
  display: grid;
  grid-template-columns: calc(50px + 0.5rem) 1fr;
  padding: 1rem;
  border: 1px solid var(--color-gray-200);
  background-color: white;

  :hover {
    background-color: var(--color-gray-100);
  }

  img {
    width: 50px;
    aspect-ratio: 1/1;
    margin-right: 0.5rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .user {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  .user b {
    margin-right: 0.25rem;
  }

  .user span {
    color: var(--color-secondary);
    font-size: var(--fs-secondary);
  }

  .reply {
    margin-block: 0.25rem;
    color: var(--color-secondary);
    font-size: var(--fs-secondary);

    span {
      margin-left: 0.25rem;
      color: var(--color-theme);
    }
  }

  .content {
    color: var(--color-gray-900);
  }

  .stats {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    margin-top: 0.5rem;
    color: var(--color-secondary);
    font-size: var(--fs-small);

    .stat {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .icon {
      cursor: pointer;
      width: 15px;
      height: 15px;

      &:hover {
        color: var(--color-theme);
      }
    }
  }
`;

function TweetItem({ user, tweet }) {
  const { id, description, createdAt, replyCounts, likeCounts, isLiked, User } =
    tweet;
  const [showModal, setShowModal] = useState(false);
  const [currentIsLiked, setCurrentIsLiked] = useState(isLiked); // todo to be fixed
  const timeAgo = countTimeDiff(createdAt);

  const handleShowModal = () => {
    const nextShowModal = !showModal;
    setShowModal(nextShowModal);
  };

  const handleLike = () => {
    const nextCurrentIsLiked = !currentIsLiked;
    setCurrentIsLiked(nextCurrentIsLiked);
  };

  return (
    <>
      <StyledListItem>
        <NavLink to={`/users/${User.id}/tweets`}>
          <img src={User.avatar} alt="avatar" />
        </NavLink>
        <div>
          <div className="user">
            <b>{User.name}</b>
            <span>@{User.account}</span>
            <span>．</span>
            <span>{timeAgo}</span>
          </div>
          <NavLink to={`/tweets/${id}`}>
            <p className="content">{description}</p>
          </NavLink>
          <div className="stats">
            <NavLink onClick={handleShowModal} className="stat">
              <span>
                <CommentIcon className="icon" />
              </span>
              <span>{replyCounts}</span>
            </NavLink>
            <NavLink className="stat">
              {likeCounts > 0 ? (
                <LikeBlackIcon className="icon" onClick={handleLike} />
              ) : (
                <LikeIcon className="icon" onClick={handleLike} />
              )}
              <span>{likeCounts}</span>
            </NavLink>
          </div>
        </div>
      </StyledListItem>
      {showModal && (
        <ReplyModal user={user} tweet={tweet} onClose={handleShowModal} />
      )}
    </>
  );
}

function ReplyItem({ tweet }) {
  const { comment, createdAt, User } = tweet;
  const timeAgo = countTimeDiff(createdAt);

  return (
    <StyledListItem>
      <NavLink to={`/users/${User.id}/tweets`}>
        <img src={User.avatar} alt="avatar" />
      </NavLink>
      <div>
        <div className="user">
          <b>{User.name}</b>
          <span>@{User.account}</span>
          <span>．</span>
          <span>{timeAgo}</span>
        </div>
        <p className="reply">
          回覆
          <span>@Apple</span>
        </p>
        <p className="content">{comment}</p>
      </div>
    </StyledListItem>
  );
}

function TweetList({ type, user, tweets }) {
  const renderedItems = tweets.map((tweet) => {
    if (type === 'reply') {
      return <ReplyItem tweet={tweet} key={tweet.id} />;
    }
    return <TweetItem user={user} tweet={tweet} key={tweet.id} />;
  });

  return <StyledList>{renderedItems}</StyledList>;
}

function UserTweetList({ type }) {
  const { currentUser, shownUser, tweets, replies, likes } = useOutletContext();
  let renderedItems;
  if (type === 'reply') {
    renderedItems = replies.map((reply) => {
      return <ReplyItem tweet={reply} key={reply.id} />;
    });
  } else if (type === 'like') {
    renderedItems = likes.map((tweet) => {
      return <TweetItem user={currentUser} tweet={tweet} key={tweet.id} />;
    });
  } else {
    renderedItems = tweets.map((tweet) => {
      return <TweetItem user={currentUser} tweet={tweet} key={tweet.id} />;
    });
  }
  return <StyledList>{renderedItems}</StyledList>;
}

export { StyledListItem, TweetList, UserTweetList };
