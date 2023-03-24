import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/Logo.svg';
import {
  AuthContainer,
  AuthInputContainer,
  AuthLinkText,
} from '../components/auth.styled';
import AuthInput from '../components/elements/Input';
import AuthButton from '../components/elements/Button';
import { register } from '../api/auth';

// title style
const StyledTitle = styled.div`
  margin-top: 1rem;
  font-size: var(--fs-h3);
  font-weight: 700;
`;

export default function SignupPage() {
  const [account, setAccount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  // 確認名稱長度
  const nameLength = name.length;
  const navigate = useNavigate();

  // 註冊後導引至登入
  const handleClick = async () => {
    if (account.length === 0) return;
    if (name.length === 0) return;
    if (email.length === 0) return;
    if (password.length === 0) return;
    if (checkPassword.length === 0) return;

    await register({
      account,
      name,
      email,
      password,
      checkPassword,
    });
    navigate('/login');
  };

  return (
    <AuthContainer>
      <div>
        <LogoIcon />
      </div>
      <StyledTitle>建立你的帳號</StyledTitle>
      <AuthInputContainer>
        <AuthInput
          label="帳號"
          placeholder="請輸入帳號"
          value={account}
          onChange={(accountInput) => setAccount(accountInput)}
        />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput
          label="名稱"
          placeholder="請輸入使用者名稱"
          value={name}
          InputLength={nameLength}
          onChange={(nameInput) => setName(nameInput)}
        />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput
          label="Email"
          placeholder="請輸入Email"
          value={email}
          onChange={(emailInput) => setEmail(emailInput)}
        />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput
          type="password"
          label="密碼"
          placeholder="請設定密碼"
          value={password}
          onChange={(passwordInput) => setPassword(passwordInput)}
        />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput
          type="password"
          label="密碼確認"
          placeholder="請再次輸入密碼"
          value={checkPassword}
          onChange={(pwdConfirmValue) => setCheckPassword(pwdConfirmValue)}
        />
      </AuthInputContainer>
      <AuthButton name="註冊" onClick={handleClick} />
      <Link to="/login">
        <AuthLinkText>取消</AuthLinkText>
      </Link>
    </AuthContainer>
  );
}
