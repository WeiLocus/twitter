import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../assets/Logo.svg';

const StyledNav = styled.nav`
  height: 100vh;
  background-color: white;
`;

export default function Navbar() {
  const { pathname } = useLocation();
  const user = { id: 5 }; // 暫時假定

  return (
    <StyledNav>
      <div>Navbar</div>
      <div>
        <LogoIcon />
      </div>
      <ul>
        <li>
          <NavLink to="/tweets">首頁</NavLink>
        </li>
        <li>
          <NavLink
            to={`/users/${user.id}/tweets`}
            className={pathname.includes(`users/${user.id}`) && 'active'}
          >
            個人資料
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">設定</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}
