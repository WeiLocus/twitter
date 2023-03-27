import styled from 'styled-components';
import { useState } from 'react';
import Header from '../components/Header';
import AuthInput from '../components/elements/Input';
import { useUser } from '../contexts/UserContext';

const StyedSettingsContainer = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
  padding: 1.6rem;
  border: 1px solid var(--color-gray-200);
  border-bottom: none;
  background-color: #fff;
`;

const StyledInputContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: end;

  button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-theme);
    border-radius: 3.125rem;
    color: white;
    background-color: var(--color-theme);
  }
`;

export default function SettingsPage() {
  const { currentUser } = useUser();
  const { account, name, email } = currentUser;
  const [changeAccount, setChangeAccount] = useState(account);
  const [changeName, setChangeName] = useState(name);
  const [changeEmail, setChangeEmail] = useState(email);
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  return (
    <>
      <Header headerText="帳戶設定" />
      <StyedSettingsContainer>
        <StyledInputContainer>
          <AuthInput
            label="帳號"
            placeholder="請輸入帳號"
            value={changeAccount}
            onChange={(accountInput) => setChangeAccount(accountInput)}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <AuthInput
            label="名稱"
            placeholder="請輸入使用者名稱"
            value={changeName}
            onChange={(nameInput) => setChangeName(nameInput)}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <AuthInput
            label="Email"
            placeholder="請輸入Email"
            value={changeEmail}
            onChange={(emailInput) => setChangeEmail(emailInput)}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <AuthInput
            type="password"
            label="密碼"
            placeholder="請設定密碼"
            value={password}
            onChange={(passwordInput) => setPassword(passwordInput)}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <AuthInput
            type="password"
            label="密碼確認"
            placeholder="請再次輸入密碼"
            value={checkPassword}
            onChange={(pwdConfirmValue) => setCheckPassword(pwdConfirmValue)}
          />
        </StyledInputContainer>
        <StyledButtonDiv>
          <button type="button">儲存</button>
        </StyledButtonDiv>
      </StyedSettingsContainer>
    </>
  );
}
