import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/Logo.svg';
import { login } from '../api/auth';
import {
  AuthContainer,
  AuthInputContainer,
  AuthLinkText,
  AuthLinkContainer,
} from '../components/auth.styled';
import AuthInput from '../components/elements/Input';
import AuthButton from '../components/elements/Button';
import Alert from '../components/elements/Alert';

// title style
const StyledTitle = styled.div`
  margin-top: 1rem;
  font-size: var(--fs-h3);
  font-weight: 700;
`;
export default function LoginPage() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const navigate = useNavigate();

  // 確認登入狀況
  const handelClick = async () => {
    if (account.length === 0) return;
    if (password.length === 0) return;
    const { token } = await login({ account, password });

    if (token) {
      localStorage.setItem('token', token);
      if (localStorage.getItem('token')) {
        setShowSuccessMsg(true);
      }
    }
  };

  useEffect(() => {
    if (showSuccessMsg) {
      setTimeout(() => {
        setShowSuccessMsg(false);
        navigate('/tweets');
      }, 1000);
    }
  }, [showSuccessMsg, navigate]);

  return (
    <AuthContainer>
      <div>
        <LogoIcon />
      </div>
      <StyledTitle>登入 Alphitter</StyledTitle>
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
          type="password"
          label="密碼"
          value={password}
          placeholder="請輸入密碼"
          onChange={(passwordInput) => setPassword(passwordInput)}
        />
      </AuthInputContainer>
      <AuthButton name="登入" onClick={handelClick} />
      <AuthLinkContainer>
        <Link to="/signup">
          <AuthLinkText>註冊</AuthLinkText>
        </Link>
        <div>・</div>
        <Link to="/admin">
          <AuthLinkText>後台登入</AuthLinkText>
        </Link>
      </AuthLinkContainer>
      {showSuccessMsg && <Alert type="success" message="登入成功" />}
      {console.log(showSuccessMsg)}
    </AuthContainer>
  );
}
