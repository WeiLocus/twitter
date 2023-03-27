import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';
import { useUser } from '../contexts/UserContext.jsx';
import { getTopUsers } from '../api/user.js';

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

const StyledLoadingDiv = styled.div`
  height: 25rem;
  display: grid;
  place-items: center;
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
  const [isLoading, setIsLoading] = useState(true);
  const [popularUsers, setPopularUsers] = useState([]);
  const renderedPopularUsers = popularUsers.map((user) => {
    return <PopularItem key={user.followingId} user={user} />;
  });

  useEffect(() => {
    if (asideRef.current.offsetHeight > window.innerHeight) {
      asideRef.current.style.height = `calc(100vh - 2rem)`;
    }
  }, []);

  useEffect(() => {
    const getPopularUsersAsync = async () => {
      try {
        const users = await getTopUsers();
        console.log('top users get!');
        setPopularUsers(users);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getPopularUsersAsync();
  }, []);

  return (
    <StyledPopularAside ref={asideRef}>
      <h2>推薦跟隨</h2>
      {isLoading ? (
        <StyledLoadingDiv>
          <div>
            <BeatLoader color="var(--color-theme)" />
          </div>
        </StyledLoadingDiv>
      ) : (
        <ul>{renderedPopularUsers}</ul>
      )}
    </StyledPopularAside>
  );
}

function PopularItem({ user }) {
  const { userFollowings } = useUser();
  const { followingId, name, account, avatar } = user;
  const isFollowed = userFollowings.includes(followingId);

  const handleFollow = () => {
    // setIsFollowing((prev) => !prev);
  };

  return (
    <StyledPopularItem isFollowing>
      <div className="avatar">
        <NavLink to={`users/${followingId}/tweets`}>
          <img src={avatar} alt="avatar" />
        </NavLink>
      </div>
      <div className={`user ${isFollowed ? 'active' : undefined}`}>
        <b>{name}</b>
        <p>@{account}</p>
      </div>
      <button
        className={isFollowed ? 'active' : undefined}
        type="button"
        onClick={handleFollow}
      >
        {isFollowed ? '正在跟隨' : '跟隨'}
      </button>
    </StyledPopularItem>
  );
}
