import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/Logo.svg';
import {
  AuthContainer,
  AuthInputContainer,
  AuthLinkText,
  AuthLinkContainer,
} from '../components/auth.styled';
import AuthInput from '../components/elements/Input';
import AuthButton from '../components/elements/Button';

// title style
const StyledTitle = styled.div`
  margin-top: 1rem;
  font-size: var(--fs-h3);
  font-weight: 700;
`;
export default function AdminPage() {
  return (
    <AuthContainer>
      <div>
        <LogoIcon />
      </div>
      <StyledTitle>後台登入</StyledTitle>
      <AuthInputContainer>
        <AuthInput label="帳號" placeholder="請輸入帳號" />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput type="password" label="密碼" placeholder="請輸入密碼" />
      </AuthInputContainer>
      <AuthButton name="登入" />
      <AuthLinkContainer>
        <Link to="/login">
          <AuthLinkText>前台登入</AuthLinkText>
        </Link>
      </AuthLinkContainer>
    </AuthContainer>
  );
}
