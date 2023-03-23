/* eslint-disable operator-assignment */
import { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CommentIcon } from '../assets/Comment.svg';
import { ReactComponent as LikeIcon } from '../assets/Like.svg';
import { ReactComponent as LikeBlackIcon } from '../assets/Like-black.svg';
import { ReplyModal } from './elements/TweetModal';

function convertMsToTime(milliseconds) {
  // source: https://bobbyhadz.com/blog/javascript-convert-milliseconds-to-hours-minutes-seconds
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  if (days > 0) {
    return `${days} 天`;
  }
  if (hours > 0) {
    return `${hours} 小時`;
  }
  if (minutes > 0) {
    return `${minutes} 分鐘`;
  }
  return `${seconds} 秒`;

  // return `${days} 天 ${hours} 小時 ${minutes} 分鐘 ${seconds} 秒前`;
}

const StyledList = styled.ul`
  background-color: white;
`;

const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: calc(50px + 0.5rem) 1fr;
  padding: 1rem;
  border: 1px solid var(--color-gray-200);
  background-color: white;

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
    }
  }
`;

function TweetItem({ tweet }) {
  const { id, description, createdAt, replyCounts, likeCounts, isLiked, User } =
    tweet;
  const [showModal, setShowModal] = useState(false);
  const [currentIsLiked, setCurrentIsLiked] = useState(isLiked); // todo to be fixed
  // * 需要另外計算時間

  const createdTime = new Date(Date.parse(createdAt));
  const now = new Date();
  const timeDiff = now - createdTime;
  // console.log(createdTime);
  // console.log(now);
  // console.log(timeDiff);
  // console.log(convertMsToTime(timeDiff));

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
            <span>{convertMsToTime(timeDiff)}</span>
          </div>
          <NavLink to={`/tweets/${id}`}>
            <p className="content">{description}</p>
          </NavLink>
          <div className="stats">
            <NavLink onClick={handleShowModal} className="stat">
              <span>
                <CommentIcon width="15px" height="15px" />
              </span>
              <span>{replyCounts}</span>
            </NavLink>
            <div className="stat">
              {isLiked ? (
                <LikeBlackIcon className="icon" onClick={handleLike} />
              ) : (
                <LikeIcon className="icon" onClick={handleLike} />
              )}
              <span>{likeCounts}</span>
            </div>
          </div>
        </div>
      </StyledListItem>
      {showModal && <ReplyModal onClose={handleShowModal} />}
    </>
  );
}

function ReplyItem({ tweet }) {
  const { description, createdAt, User } = tweet;
  const createdTime = new Date(Date.parse(createdAt));
  const now = new Date();
  const timeDiff = now - createdTime;
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
          <span>{convertMsToTime(timeDiff)}</span>
        </div>
        <p className="reply">
          回覆
          <span>@Apple</span>
        </p>
        <p className="content">{description}</p>
      </div>
    </StyledListItem>
  );
}

export default function TweetList({ type, tweets }) {
  const renderedItems = tweets.map((tweet) => {
    if (type === 'reply') {
      return <ReplyItem tweet={tweet} key={tweet.id} />;
    }
    return <TweetItem tweet={tweet} key={tweet.id} />;
  });

  return <StyledList>{renderedItems}</StyledList>;
}

export { StyledListItem };
