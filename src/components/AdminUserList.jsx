import styled from 'styled-components';
import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import Header from './Header';
import { ReactComponent as TweetIcon } from '../assets/Mobile-Tweet.svg';
import { ReactComponent as LikeIcon } from '../assets/Like.svg';
import { adminGetAllUsers } from '../api/admin';

// List container
const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  height: calc(100vh - 68px);
  overflow-y: scroll;
  padding: 1rem;
  background-color: #fff;
  border-top: 1px solid var(--color-gray-200);
  border-inline: 1px solid var(--color-gray-200);
`;

// Card container
const StyledCardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  margin: 0.5rem 0.5rem;
  background-color: var(--color-gray-200);
  border-radius: 10px;

  .cover {
    border-radius: 10px 10px 0 0;

    img {
      border-radius: 10px 10px 0 0;
    }
  }

  .avatar {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    aspect-ratio: 1/1;
    border: 4px solid white;
    border-radius: 50%;
    z-index: 1;
    overflow: hidden;
  }

  .stats {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 0.6rem;
    color: var(--color-secondary);
    font-size: var(--fs-basic);

    .stat {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    span {
      color: var(--color-gray-900);
    }
  }
`;

const StyledDiv = styled.div`
  .follow {
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    padding: 0.6rem;
    color: var(--color-secondary);
    font-size: var(--fs-secondary);

    span {
      color: var(--color-gray-900);
    }
  }
`;

// title、account
const StyledName = styled.div`
  text-align: center;
  margin-top: 1.6rem;

  .title {
    font-size: var(--fs-basic);
    font-weight: bold;
  }

  .account {
    color: var(--color-secondary);
    font-size: var(--fs-secondary);
  }
`;

const StyledMessage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  border-inline: 2px solid var(--color-gray-200);
  color: var(--color-secondary);
`;

export default function AdminUserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await adminGetAllUsers();
        setUsers(users);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const renderedItems = users.map((user) => {
    if (!isLoading) {
      return <UserCard key={user.id} user={user} />;
    }
  });
  return (
    <>
      <Header headerText="使用者列表" />
      <StyledContainer>
        {renderedItems}
        {isLoading && (
          <StyledMessage>
            <div>
              <BeatLoader color="var(--color-theme)" />
            </div>
          </StyledMessage>
        )}
      </StyledContainer>
    </>
  );
}

function UserCard({ user }) {
  const {
    account,
    name,
    avatar,
    cover,
    tweetCounts,
    followerCounts,
    followingCounts,
    userTweetLikeCounts,
  } = user;
  return (
    <StyledCardContainer>
      <div className="cover">
        <img src={cover} alt="user-cover" />
      </div>
      <img className="avatar" src={avatar} alt="avatar" />
      <StyledName>
        <div className="title">{name}</div>
        <div className="account">@{account}</div>
      </StyledName>
      <StyledDiv>
        <div className="stats">
          <div className="stat">
            <span>
              <TweetIcon width="1.2rem" height="1.2rem" />
            </span>
            <span>{tweetCounts}</span>
          </div>
          <div className="stat">
            <LikeIcon width="1.2rem" height="1.2rem" />
            <span>{userTweetLikeCounts}</span>
          </div>
        </div>
        <div className="follow">
          <span>{followingCounts} </span>個跟隨中
          <span>{followerCounts} </span>位跟隨者
        </div>
      </StyledDiv>
    </StyledCardContainer>
  );
}
