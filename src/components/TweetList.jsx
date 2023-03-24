/* eslint-disable operator-assignment */
import { useState } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
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

    &.disable {
      pointer-events: none;
    }

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

function TweetItem({ currentUser, tweet }) {
  const { pathname } = useLocation();
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
        <NavLink to={`/users/${User ? User.id : currentUser.id}/tweets`}>
          <img src={User ? User.avatar : currentUser.avatar} alt="avatar" />
        </NavLink>
        <div>
          <div className="user">
            <b>{User ? User.name : currentUser.name}</b>
            <span>@{User ? User.account : currentUser.account}</span>
            <span>．</span>
            <span>{timeAgo}</span>
          </div>
          <NavLink to={`/tweets/${id}`}>
            <p className="content">{description}</p>
          </NavLink>
          <div className={`stats ${pathname.includes('users') && 'disable'}`}>
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
        <ReplyModal
          currentUser={currentUser}
          tweet={tweet}
          onClose={handleShowModal}
        />
      )}
    </>
  );
}

function ReplyItem({ currentUser, reply, replyTo }) {
  const { comment, createdAt, User } = reply;
  const timeAgo = countTimeDiff(createdAt);

  return (
    <StyledListItem>
      <NavLink to={`/users/${User ? User.id : currentUser.id}/tweets`}>
        <img src={User ? User.avatar : currentUser.avatar} alt="avatar" />
      </NavLink>
      <div>
        <div className="user">
          <b>{User ? User.name : currentUser.name}</b>
          <span>@{User ? User.account : currentUser.account}</span>
          <span>．</span>
          <span>{timeAgo}</span>
        </div>
        <p className="reply">
          回覆
          <span>@{replyTo || 'user'}</span>
        </p>
        <p className="content">{comment}</p>
      </div>
    </StyledListItem>
  );
}

function TweetList({ user, tweets }) {
  const renderedItems = tweets.map((tweet) => {
    return <TweetItem key={tweet.id} currentUser={user} tweet={tweet} />;
  });

  return <StyledList>{renderedItems}</StyledList>;
}

function ReplyList({ user, replies, replyTo }) {
  const renderedItems = replies.map((reply) => {
    return (
      <ReplyItem key={reply.id} user={user} reply={reply} replyTo={replyTo} />
    );
  });
  return <StyledList>{renderedItems}</StyledList>;
}

export {
  StyledListItem,
  StyledList,
  TweetList,
  ReplyList,
  TweetItem,
  ReplyItem,
};
