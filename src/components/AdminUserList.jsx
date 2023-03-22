import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Cover from '../assets/Cover.png';
import { ReactComponent as TweetIcon } from '../assets/Mobile-Tweet.svg';
import { ReactComponent as LikeIcon } from '../assets/Like.svg';

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
  margin: 0.5rem auto;
  background-color: var(--color-gray-200);
  border-radius: 10px;

  .cover {
    border-radius: 10px 10px 0 0;
  }

  .avatar {
    position: absolute;
    top: 35%;
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
    margin-top: 1rem;
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
  margin-top: 2rem;

  .title {
    font-size: var(--fs-basic);
    font-weight: bold;
  }

  .account {
    color: var(--color-secondary);
    font-size: var(--fs-secondary);
  }
`;

export default function AdminUserList() {
  return (
    <>
      <Header headerText="使用者列表" />
      <StyledContainer>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </StyledContainer>
    </>
  );
}

function UserCard() {
  return (
    <StyledCardContainer>
      <div className="cover">
        <img src={Cover} alt="user-cover" />
      </div>
      <img
        className="avatar"
        src="https://placekitten.com/700/700"
        alt="avatar"
      />
      <StyledName>
        <div className="title">John Doe</div>
        <div className="account">@heyjohn</div>
      </StyledName>
      <StyledDiv>
        <div className="stats">
          <NavLink to="/tweets/5" className="stat">
            <span>
              <TweetIcon width="1.2rem" height="1.2rem" />
            </span>
            <span>1.5K</span>
          </NavLink>
          <div className="stat">
            <LikeIcon width="1.2rem" height="1.2rem" />
            <span>20K</span>
          </div>
        </div>
        <div className="follow">
          <span>34 </span>個跟隨中
          <span>59 </span>位跟隨者
        </div>
      </StyledDiv>
    </StyledCardContainer>
  );
}
