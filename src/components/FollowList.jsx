import styled from 'styled-components';
import { useState } from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { users } from '../dummyData.js';

const StyledList = styled.ul`
  background-color: white;
`;

const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: calc(50px + 1rem) 1fr;
  padding: 1rem;
  border: 1px solid var(--color-gray-200);
  background-color: white;

  img {
    width: 50px;
    aspect-ratio: 1/1;
    margin-right: 1rem;
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

    :hover {
      border-bottom: 3px solid var(--color-gray-100);
      background-color: var(--color-gray-100);
    }

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

function FollowItem({ user }) {
  const { id, name, avatar, introduction } = user;
  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
  };
  return (
    <StyledListItem>
      <img src={avatar} alt="avatar" />
      <div>
        <div className="user">
          <b>{name}</b>
          <button
            className={`user ${isFollowing && 'active'}`}
            type="button"
            onClick={handleFollow}
          >
            {isFollowing ? '正在跟隨' : '跟隨'}
          </button>
        </div>
        <p className="content">{introduction}</p>
      </div>
    </StyledListItem>
  );
}

export default function FollowList() {
  const shownUser = useOutletContext();
  const renderedFollowItem = users.map((user) => {
    return <FollowItem user={user} key={user.id} />;
  });
  return (
    <>
      <FollowTab id={shownUser.id} />
      <StyledList>{renderedFollowItem}</StyledList>
    </>
  );
}
