import styled from 'styled-components';
import { ReactComponent as CommentIcon } from '../assets/Comment.svg';
import { ReactComponent as LikeIcon } from '../assets/Like.svg';

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
    font-family: 'Noto sans tc';
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
  }
`;

export default function TweetContent() {
  return (
    <StyledDiv>
      <div className="user">
        <img src="https://placekitten.com/325/325" alt="avatar" />
        <div>
          <b>Apple</b>
          <span>@apple</span>
        </div>
      </div>
      <p className="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
        excepturi corrupti velit vitae quasi. Ad corrupti laudantium qui
      </p>
      <div className="time-stamp">
        <span>上午 10:05</span>
        <span>．</span>
        <span>2021年11月10日</span>
      </div>
      <div className="stats">
        <p>
          <span>34</span>回覆
        </p>
        <p>
          <span>808</span>喜歡次數
        </p>
      </div>
      <div className="reaction">
        <CommentIcon />
        <LikeIcon />
      </div>
    </StyledDiv>
  );
}
