import styled from 'styled-components';
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
export default function LoginPage() {
  return (
    <AuthContainer>
      <div>
        <LogoIcon />
      </div>
      <StyledTitle>登入 Alphitter</StyledTitle>
      <AuthInputContainer>
        <AuthInput label="帳號" placeholder="請輸入帳號" />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthInput type="password" label="密碼" placeholder="請輸入密碼" />
      </AuthInputContainer>
      <AuthButton>登入</AuthButton>
      <AuthLinkContainer>
        <AuthLinkText>註冊</AuthLinkText>
        <div>・</div>
        <AuthLinkText>後台登入</AuthLinkText>
      </AuthLinkContainer>
    </AuthContainer>
  );
}
