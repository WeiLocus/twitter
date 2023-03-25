import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CrossIcon } from '../../assets/Cross.svg';
import { countTimeDiff } from '../../utilities';

const StyledDiv = styled.div`
  position: absolute;
  z-index: 1;
  inset: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  inset: 3.5rem 0;
  width: 650px;
  height: ${(props) => (props.reply ? '450px' : '300px')};
  margin: 0 auto;
  border-radius: 1rem;
  background-color: white;

  .close {
    padding: 1rem;
    border-bottom: 1px solid var(--color-gray-200);

    button {
      all: unset;
      cursor: pointer;
      color: var(--color-theme);
    }
  }
`;

const StyledTextarea = styled.div`
  flex: 1;
  padding: 1rem;
  display: grid;
  grid-template-columns: calc(50px + 0.75rem) 1fr;

  img {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 0.75rem;

    textarea {
      all: unset;
      flex: 1;
      align-self: flex-start;
      width: calc(100% - 1rem);
    }

    .submit {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    span {
      color: var(--color-secondary);
      &.error {
        color: var(--color-error);
      }
    }

    button {
      all: unset;
      cursor: pointer;
      padding: 0.5rem 1rem;
      margin-left: 1rem;
      border: 1px solid var(--color-theme);
      border-radius: 3.125rem;
      color: white;
      background-color: var(--color-theme);
      font-size: var(--fs-basic);

      :hover {
        border: 1px solid var(--color-light-orange);
        background-color: var(--color-light-orange);
      }
    }
  }
`;

const StyledTweetContent = styled.div`
  display: grid;
  grid-template-columns: calc(50px + 0.75rem) 1fr;
  padding: 1rem;

  img {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }

  .user {
    b {
      margin-right: 0.25rem;
    }
    span {
      color: var(--color-secondary);
      font-size: var(--fs-secondary);
    }
  }

  .content {
    margin-block: 0.5rem;
    color: var(--color-gray-900);
    position: relative;

    &::after {
      content: '';
      width: 2px;
      height: 125%;
      position: absolute;
      top: calc((50px / 2) + 0.5rem);
      left: calc(-0.75rem - 25px);
      background-color: var(--color-gray-500);
    }
  }

  .reply-to {
    color: var(--color-secondary);

    .account {
      margin-left: 0.25rem;
      color: var(--color-theme);
    }
  }
`;

export function TweetModal({
  tweetInput,
  currentUser,
  onClose,
  onChange,
  onAddTweet,
}) {
  const { avatar } = currentUser;
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tweetInput.length) {
      setErrorMessage('內容不可空白');
      return;
    }
    if (tweetInput.length > 140) {
      setErrorMessage('字數不可超過 140 字');
      return;
    }
    // 這邊要發送修改請求
    const { status } = await onAddTweet();
    if (status === 'ok') {
      setErrorMessage(null);
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <StyledDiv>
      <StyledModal>
        <div className="close">
          <button type="button" onClick={onClose}>
            <CrossIcon />
          </button>
        </div>
        <StyledTextarea>
          <img src={avatar} alt="avatar" />
          <form>
            <textarea
              name="tweet"
              id="tweet-input"
              type="text"
              placeholder="有什麼新鮮事？"
              value={tweetInput}
              onChange={(event) => {
                onChange?.(event.target.value);
              }}
            />
            <div className="submit">
              <span>{`${tweetInput.length}/140`}</span>
              <div>
                <span className={errorMessage ? 'error' : undefined}>
                  {errorMessage}
                </span>
                <button type="submit" onClick={handleSubmit}>
                  推文
                </button>
              </div>
            </div>
          </form>
        </StyledTextarea>
      </StyledModal>
    </StyledDiv>
  );
}

export function ReplyModal({ currentUser, tweet, onClose }) {
  const { id, avatar } = currentUser;
  const { User, createdAt, description } = tweet;
  const timeAgo = countTimeDiff(createdAt);
  const [replyComment, setReplyComment] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleCommentChange = (e) => {
    setReplyComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!replyComment.length) {
      setErrorMessage('內容不可空白');
      return;
    }
    if (replyComment.length > 140) {
      setErrorMessage('字數不可超過 140 字');
      return;
    }
    // 這邊要發送修改請求
    console.log(
      `user ${id} just submitted a reply to user @${User.account}: ${replyComment}`
    );
    setErrorMessage(null);
    setReplyComment('');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <StyledDiv>
      <StyledModal reply>
        <div className="close">
          <button type="button" onClick={onClose}>
            <CrossIcon />
          </button>
        </div>
        <StyledTweetContent>
          <img src={User.avatar} alt="avatar" />
          <div>
            <div className="user">
              <b>{User.name}</b>
              <span>@{User.account}</span>
              <span>．</span>
              <span>{timeAgo}</span>
            </div>
            <p className="content">{description}</p>
            <div className="reply-to">
              <span>回覆給</span>
              <span className="account">@{User.account}</span>
            </div>
          </div>
        </StyledTweetContent>
        <StyledTextarea>
          <img src={avatar} alt="avatar" />
          <form>
            <textarea
              name="reply"
              id="reply-content"
              value={replyComment}
              placeholder="推你的回覆"
              onChange={handleCommentChange}
            />
            <div className="submit">
              <span>{`${replyComment.length}/140`}</span>
              <div>
                <span className={errorMessage ? 'error' : undefined}>
                  {errorMessage}
                </span>
                <button type="submit" onClick={handleSubmit}>
                  回覆
                </button>
              </div>
            </div>
          </form>
        </StyledTextarea>
      </StyledModal>
    </StyledDiv>
  );
}
