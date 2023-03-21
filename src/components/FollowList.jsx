import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledList = styled.ul`
  height: 100vh; /* 需再調整 */
  background-color: white;
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
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    div {
      display: flex;
      align-items: center;
    }
  }

  button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-theme);
    border-radius: 3.125rem;
    color: var(--color-theme);
    background-color: white;
    font-size: var(--fs-basic);

    :hover,
    &.active {
      color: white;
      background-color: var(--color-theme);
    }
  }

  .content {
    color: var(--color-gray-900);
  }
`;

function FollowItem() {
  return (
    <StyledListItem>
      <img src="https://placekitten.com/800/800" alt="avatar" />
      <div>
        <div className="user">
          <b>Apple</b>
          <button className="active" type="button">
            正在跟隨
          </button>
        </div>
        <p className="content">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </p>
      </div>
    </StyledListItem>
  );
}

const StyledTab = styled.div`
  display: flex;
  justify-content: start;
  border: 1px solid var(--color-gray-200);
  color: var(--color-secondary);
  background-color: white;
  font-weight: 700;

  .category {
    width: 8em;
    display: grid;
    place-items: center;
    border-bottom: 3px solid white;
    line-height: 3em;

    &.active {
      border-bottom: 3px solid var(--color-theme);
      color: var(--color-theme);
    }
  }
`;

function FollowTab({ id }) {
  return (
    <StyledTab>
      <NavLink className="category" to={`/users/${id}/followers`}>
        <p>追隨者</p>
      </NavLink>
      <NavLink className="category" to={`/users/${id}/followings`}>
        <p>正在追蹤</p>
      </NavLink>
    </StyledTab>
  );
}

export default function FollowList() {
  const user = { id: 5 };
  return (
    <>
      <FollowTab id={user.id} />
      <StyledList>
        <FollowItem />
        <FollowItem />
        <FollowItem />
        <FollowItem />
        <FollowItem />
        <FollowItem />
        <FollowItem />
      </StyledList>
    </>
  );
}
