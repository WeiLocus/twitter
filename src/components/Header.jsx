import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as GoBackIcon } from '../assets/GoBack.svg';

const StyledHeader = styled.header`
  padding: 1rem;
  border-inline: 1px solid var(--color-gray-200);
  background-color: white;

  h1 {
    font-size: var(--fs-h4);
  }
`;
export default function Header() {
  const { pathname } = useLocation();

  // todo not finished
  const headerText = () => {
    if (pathname.includes('users')) {
      return 'John Doe';
    }
    if (pathname.includes('tweets')) {
      return '首頁';
    }
    if (pathname.includes('replies')) {
      return '推文';
    }
    if (pathname.includes('settings')) {
      return '帳戶設定';
    }
    return undefined;
  };

  return (
    <StyledHeader>
      {['users', 'replies'].includes(pathname) && <GoBackIcon />}
      <h1>{headerText()}</h1>
    </StyledHeader>
  );
}
