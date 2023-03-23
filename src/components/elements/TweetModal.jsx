import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CrossIcon } from '../../assets/Cross.svg';

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
      height: 110%;
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

export function TweetModal({ user, onClose }) {
  const { id, avatar } = user;
  const [tweetContent, setTweetContent] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  // let errorMessage = '';

  const handleContentChange = (e) => {
    setTweetContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tweetContent.length) {
      setErrorMessage('內容不可空白');
      setTweetContent(tweetContent);
      return;
    }
    if (tweetContent.length > 140) {
      setErrorMessage('字數不可超過 140 字');
      return;
    }
    // 這邊要發送修改請求
    console.log(`user ${id} just submitted a tweet: ${tweetContent}`);
    setErrorMessage(null);
    setTweetContent('');
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
              id="tweet-content"
              value={tweetContent}
              placeholder="有什麼新鮮事？"
              onChange={handleContentChange}
            />
            <div className="submit">
              <span>{`${tweetContent.length}/140`}</span>
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

export function ReplyModal({ onClose }) {
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
          <img src="https://placekitten.com/1000/1000" alt="avatar" />
          <div>
            <div className="user">
              <b>Apple</b>
              <span>@apple</span>
              <span>．</span>
              <span>3 小時</span>
            </div>
            <p className="content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              excepturi corrupti velit vitae quasi. Ad corrupti laudantium qui
              Lorem ipsum dolor sit.
            </p>
            <div className="reply-to">
              <span>回覆給</span>
              <span className="account">@Mitsubishi</span>
            </div>
          </div>
        </StyledTweetContent>
        <StyledTextarea>
          <img src="https://placekitten.com/700/700" alt="avatar" />
          <form>
            <textarea placeholder="推你的回覆" />
            <button type="submit" onClick={onClose}>
              回覆
            </button>
          </form>
        </StyledTextarea>
      </StyledModal>
    </StyledDiv>
  );
}
