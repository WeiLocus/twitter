import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as CommentIcon } from '../assets/Comment.svg';
import { ReactComponent as LikeIcon } from '../assets/Like.svg';
import { ReactComponent as LikeBlackIcon } from '../assets/Like-black.svg';
import { ReplyModal } from './elements/TweetModal';
import { getConvertedTime } from '../utilities';
import { useUser } from '../contexts/UserContext';

const StyledDiv = styled.div`
  padding: 1rem;
  border: 1px solid var(--color-gray-200);
  background-color: white;

  .user {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;

    img {
      width: 50px;
      aspect-ratio: 1/1;
      margin-right: 0.5rem;
      border-radius: 50%;
      overflow: hidden;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    b {
      margin-right: 0.25rem;
    }

    span {
      color: var(--color-secondary);
      font-size: var(--fs-secondary);
    }
  }

  .content {
    color: var(--color-gray-900);
    font-size: var(--fs-h4);
  }

  .time-stamp {
    padding-block: 0.5rem;
    border-bottom: 1px solid var(--color-gray-200);
    color: var(--color-secondary);
    font-size: var(--fs-secondary);
  }

  .stats {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-block: 1rem;
    border-bottom: 1px solid var(--color-gray-200);
    color: var(--color-secondary);
    font-size: var(--fs-h5);

    span {
      margin-right: 0.25rem;
      color: var(--color-gray-900);
      font-weight: 700;
    }
  }

  .reaction {
    display: flex;
    gap: 9rem;
    padding-top: 1rem;
    color: var(--color-secondary);

    button {
      all: unset;
      cursor: pointer;

      :hover {
        color: var(--color-theme);
      }

      .disabled {
        pointer-events: none;
      }
    }
  }
`;

export default function TweetContent({
  tweet,
  currentUser,
  replyInput,
  onChange,
  onAddReply,
}) {
  const { id, description, createdAt, replyCounts, likeCounts, User } = tweet;
  const { convertedDate, convertedTime } = getConvertedTime(createdAt);
  const { userLikes, handleLike } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const isLiked = userLikes.includes(id);

  const handleShowModal = () => {
    const nextShowModal = !showModal;
    setShowModal(nextShowModal);
  };

  const handleLikeClick = () => {
    console.log(id);
    handleLike(id);
    // setDisabled(true);
    // await handleLike(id);
    // setDisabled(false);
  };

  return (
    <>
      <StyledDiv>
        <div className="user">
          <NavLink to={`/users/${User.id}/tweets`}>
            <img src={User.avatar} alt="avatar" />
          </NavLink>
          <div>
            <b>{User.name}</b>
            <span>@{User.account}</span>
          </div>
        </div>
        <p className="content">{description}</p>
        <div className="time-stamp">
          <span>{convertedTime}</span>
          <span>．</span>
          <span>{convertedDate}</span>
        </div>
        <div className="stats">
          <p>
            <span>{replyCounts}</span>回覆
          </p>
          <p>
            <span>{likeCounts}</span>喜歡次數
          </p>
        </div>
        <div className="reaction">
          <button type="button" onClick={handleShowModal}>
            <CommentIcon className="icon" />
          </button>
          <button type="button" className={disabled ? 'disabled' : 'disabled'}>
            {isLiked ? (
              <LikeBlackIcon onClick={handleLikeClick} />
            ) : (
              <LikeIcon className="icon" onClick={handleLikeClick} />
            )}
          </button>
        </div>
      </StyledDiv>
      {showModal && (
        <ReplyModal
          tweet={tweet}
          currentUser={currentUser}
          replyInput={replyInput}
          onChange={onChange}
          onAddReply={onAddReply}
          onClose={handleShowModal}
        />
      )}
    </>
  );
}
