import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CommentIcon } from '../assets/Comment.svg';
import { ReactComponent as LikeIcon } from '../assets/Like.svg';

const StyledList = styled.ul`
  height: calc(100vh - 225px);
  background-color: aliceblue;
  overflow-y: scroll;
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
  }
`;

function TweetItem() {
  return (
    <StyledListItem>
      <NavLink to="/users/3">
        <img src="https://placekitten.com/350/350" alt="avatar" />
      </NavLink>
      <div>
        <div className="user">
          <b>Apple</b>
          <span>@apple</span>
          <span>．</span>
          <span>3 小時</span>
        </div>
        <p className="content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          excepturi corrupti velit vitae quasi. Ad corrupti laudantium qui,
          molestiae inventore maiores architecto quasi possimus ut accusamus,
          enim, neque consequuntur ea?
        </p>
        <div className="stats">
          <NavLink to="/tweets/5" className="stat">
            <span>
              <CommentIcon width="14px" height="14px" />
            </span>
            <span>13</span>
          </NavLink>
          <div className="stat">
            <LikeIcon width="14px" height="14px" />
            <span>76</span>
          </div>
        </div>
      </div>
    </StyledListItem>
  );
}

function ReplyItem() {
  return (
    <StyledListItem>
      <NavLink to="/users/3">
        <img src="https://placekitten.com/600/600" alt="avatar" />
      </NavLink>
      <div>
        <div className="user">
          <b>Apple</b>
          <span>@apple</span>
          <span>．</span>
          <span>3 小時</span>
        </div>
        <p className="reply">
          回覆
          <span>@Apple</span>
        </p>
        <p className="content">
          Molestiae inventore maiores architecto quasi possimus ut accusamus,
          enim, neque consequuntur ea?
        </p>
      </div>
    </StyledListItem>
  );
}

export default function TweetList({ reply }) {
  const renderedItem = reply ? <ReplyItem /> : <TweetItem />;

  return (
    <StyledList>
      {renderedItem}
      {renderedItem}
      {renderedItem}
      {renderedItem}
      {renderedItem}
    </StyledList>
  );
}
