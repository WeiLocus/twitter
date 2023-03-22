import styled from 'styled-components';
import Header from '../components/Header';
import AuthInput from '../components/elements/Input';

const StyedSettingsContainer = styled.div`
  height: 100vh;
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
  return (
    <>
      <Header headerText="帳戶設定" />
      <StyedSettingsContainer>
        <StyledInputContainer>
          <AuthInput label="帳號" placeholder="請輸入帳號" />
        </StyledInputContainer>
        <StyledInputContainer>
          <AuthInput label="名稱" placeholder="請輸入使用者名稱" />
        </StyledInputContainer>
        <StyledInputContainer>
          <AuthInput label="Email" placeholder="請輸入Email" />
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
