import styled from 'styled-components';
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
  return (
    <>
      <Header headerText="帳戶設定" />
      <StyedSettingsContainer>
        <StyledInputContainer>
          <AuthInput label="帳號" placeholder="請輸入帳號" value={account} />
        </StyledInputContainer>
        <StyledInputContainer>
          <AuthInput label="名稱" placeholder="請輸入使用者名稱" value={name} />
        </StyledInputContainer>
        <StyledInputContainer>
          <AuthInput label="Email" placeholder="請輸入Email" value={email} />
        </StyledInputContainer>
        <StyledInputContainer>
          <AuthInput type="password" label="密碼" placeholder="請設定密碼" />
        </StyledInputContainer>
        <StyledInputContainer>
          <AuthInput
            type="password"
            label="密碼確認"
            placeholder="請再次輸入密碼"
          />
        </StyledInputContainer>
        <StyledButtonDiv>
          <button type="button">儲存</button>
        </StyledButtonDiv>
      </StyedSettingsContainer>
    </>
  );
}
