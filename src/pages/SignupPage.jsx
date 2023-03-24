import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/Logo.svg';
import { AuthInputContainer, AuthLinkText } from '../components/auth.styled';
import AuthInput from '../components/elements/Input';
import AuthButton from '../components/elements/Button';
import { Container, device } from '../globalStyles';
// Signup Container
const StyedSignupContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 400px;
  margin-top: 3rem;
  background-color: #fff;
  @media screen and (${device.md}) {
    width: 50%;
  }
`;

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


  return (
    <StyedSignupContainer>
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
    </StyedSignupContainer>
  );
}
