import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as GoBackIcon } from '../assets/GoBack.svg';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-inline: 1px solid var(--color-gray-200);
  background-color: white;

  h1 {
    font-size: var(--fs-h4);
  }

  p {
    display: none;
  }

  .small {
    h1 {
      font-size: var(--fs-basic);
    }

    p {
      display: block;
      margin-top: -0.25rem;
      color: var(--color-secondary);
      font-size: var(--fs-secondary);

      span {
        margin-right: 0.25rem;
      }
    }
  }
`;
export default function Header({ headerText, goBack, user }) {
  // todo 需要計算該使用者貼文總數
  const tweetsCount = undefined ?? 25;
  return (
    <StyledHeader>
      {goBack && (
        <NavLink to={user ? `users/${user.id}/tweets` : '/tweets'}>
          <GoBackIcon />
        </NavLink>
      )}
      <div className={user && 'small'}>
        <h1>{headerText}</h1>
        <p>
          <span>{tweetsCount}</span>推文
        </p>
      </div>
    </StyledHeader>
  );
}
