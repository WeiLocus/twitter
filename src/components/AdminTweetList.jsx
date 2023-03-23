import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import { StyledListItem } from './TweetList';
import { ReactComponent as Cross } from '../assets/Cross.svg';

// follow StyledListItem style by TweetList.jsx
const StyledTweetContainer = styled(StyledListItem)`
  grid-template-columns: calc(50px + 0.5rem) 1fr calc(10px);
  border: none;
  border-top: 1px solid var(--color-gray-200);
  border-bottom: 1px solid var(--color-gray-200);
`;

const StyledAdminTweetContainer = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
  overflow-x: hidden;
  border-inline: 1px solid var(--color-gray-200);
  background-color: #fff;

  .cross {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    color: var(--color-gray-700);
  }
`;

export default function AdminTweetList() {
  return (
    <>
      <Header headerText="推文清單" />
      <StyledAdminTweetContainer>
        <TweetList />
        <TweetList />
        <TweetList />
        <TweetList />
        <TweetList />
      </StyledAdminTweetContainer>
    </>
  );
}
function TweetList() {
  return (
    <StyledTweetContainer>
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
      </div>
      <div className="cross">
        <Cross />
      </div>
    </StyledTweetContainer>
  );
}
