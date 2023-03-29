import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as LogoIcon } from '../assets/Logo.svg';
import {
  AuthContainer,
  AuthInputContainer,
  AuthLinkText,
} from '../components/auth.styled';
import AuthInput from '../components/elements/Input';
import AuthButton from '../components/elements/Button';
import { register } from '../api/auth';
import Alert from '../components/elements/Alert';
import { breakpoint } from '../globalStyles';

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
  const [showErrorMsg, setShowErrorMsg] = useState('');
  const [linkText, setLinkText] = useState('取消重填');
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const nameLength = name.length;
  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoint.md} )` });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobile) {
      setLinkText('取消');
    } else {
      setLinkText('取消重填');
    }
  }, [isMobile]);

  // 註冊後導引至登入
  const handleClick = async () => {
    if (
      account.length === 0 ||
      name.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      checkPassword.length === 0
    ) {
      setShowErrorMsg('欄位不可空白!');
      setTimeout(() => {
        setShowErrorMsg(false);
      }, 1000);
      return;
    }
    if (password !== checkPassword) {
      setShowErrorMsg('密碼與確認密碼不符!');
      setTimeout(() => {
        setShowErrorMsg(false);
      }, 1000);
      return;
    }
    const { status, message } = await register({
      account,
      name,
      email,
      password,
      checkPassword,
    });
    if (status !== 'error') {
      setShowSuccessMsg(true);
      setTimeout(() => {
        setShowSuccessMsg(false);
        navigate('/login');
      }, 1000);
    }
    if (status === 'error' && message) {
      setShowErrorMsg(message);
      setTimeout(() => {
        setShowErrorMsg(false);
      }, 1000);
    }
  };

  const handleBehavior = () => {
    if (!isMobile) {
      navigate('/login');
    } else {
      setAccount('');
      setName('');
      setEmail('');
      setPassword('');
      setCheckPassword('');
    }
  }
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
      <AuthLinkText onClick={handleBehavior}>{linkText}</AuthLinkText>
      {showSuccessMsg && <Alert type="success" message="註冊成功 請登入" />}
      {showErrorMsg && <Alert type="error" message={showErrorMsg} />}
    </AuthContainer>
  );
}
