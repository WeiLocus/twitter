import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { users } from '../dummyData.js';

const StyledPopularAside = styled.aside`
  overflow-y: scroll;
  margin: 1rem;
  border-radius: 1rem;
  background-color: var(--color-gray-100);

  h2 {
    padding: 1.5rem;
    border-bottom: 1px solid var(--color-gray-300);
    font-size: var(--fs-h4);
  }
`;

const StyledPopularItem = styled.li`
  padding: 1rem;
  display: grid;
  grid-template-columns: 50px auto auto;
  align-items: center;

  :hover {
    background-color: var(--color-gray-200);
  }

  .avatar {
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }

  .user {
    margin-left: 0.5rem;
    width: 8rem;

    &.active {
      width: 7rem;
    }

    b {
      width: 100%;
      margin-bottom: -0.35rem;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      color: var(--color-gray-600);
    }
  }

  button {
    cursor: pointer;
    margin: 0.2rem 0;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-theme);
    border-radius: 3.125rem;
    color: var(--color-theme);
    background-color: var(--color-gray-100);

    &.active,
    &:hover {
      color: white;
      background-color: var(--color-theme);
    }
  }
`;

export default function Popular() {
  const asideRef = useRef(null);
  const renderedPopularUsers = users.map((user) => {
    return <PopularItem key={user.id} user={user} />;
  });

  useEffect(() => {
    if (asideRef.current.offsetHeight > window.innerHeight) {
      asideRef.current.style.height = `calc(100vh - 2rem)`;
    }
  }, []);

  return (
    <StyledPopularAside ref={asideRef}>
      <h2>推薦跟隨</h2>
      <ul>{renderedPopularUsers}</ul>
    </StyledPopularAside>
  );
}

function PopularItem({ user }) {
  const { id, name, account, avatar } = user;
  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
  };
  return (
    <StyledPopularItem isFollowing>
      <div className="avatar">
        <NavLink to={`users/${id}/tweets`}>
          <img src={avatar} alt="avatar" />
        </NavLink>
      </div>
      <div className={`user ${isFollowing ? 'active' : undefined}`}>
        <b>{name}</b>
        <p>@{account}</p>
      </div>
      <button
        className={isFollowing ? 'active' : undefined}
        type="button"
        onClick={handleFollow}
      >
        {isFollowing ? '正在跟隨' : '跟隨'}
      </button>
    </StyledPopularItem>
  );
}
