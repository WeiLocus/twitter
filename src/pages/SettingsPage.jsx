import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import AuthInput from '../components/elements/Input';
import { useUser } from '../contexts/UserContext';
import { changeUserInformation } from '../api/user';

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
  const { currentUser, setCurrentUser } = useUser();
  const nextUser = { ...currentUser };
  const { account: userAccount, name: userName, email: userEmail } = nextUser;
  const [account, setAccount] = useState(userAccount);
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const nameLength = name.length;

  const handleClick = async () => {
    console.log(`users ${currentUser.id}`);
    if (
      account.length === 0 ||
      name.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      checkPassword.length === 0
    ) {
      console.log('不可空白');
    }
    if (password !== checkPassword) return;
    const data = await changeUserInformation({
      id: currentUser.id,
      account,
      name,
      email,
      password,
      checkPassword,
    });
    // 將新data修正至 currentUser
    const newCurrentUser = {
      account: data.account,
      name: data.name,
      email: data.email,
      ...currentUser,
    };
    setCurrentUser(newCurrentUser);
  };
  return (
    <>
      <Header headerText="帳戶設定" />
      <StyedSettingsContainer>
        <StyledInputContainer>
          <AuthInput
            label="帳號"
            placeholder="請輸入帳號"
            value={account}
            onChange={(accountInput) => setAccount(accountInput)}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <AuthInput
            label="名稱"
            placeholder="請輸入使用者名稱"
            value={name}
            onChange={(nameInput) => setName(nameInput)}
            InputLength={nameLength}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <AuthInput
            label="Email"
            placeholder="請輸入Email"
            value={email}
            onChange={(emailInput) => setEmail(emailInput)}
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
          <button type="button" onClick={handleClick}>
            儲存
          </button>
        </StyledButtonDiv>
      </StyedSettingsContainer>
    </>
  );
}
