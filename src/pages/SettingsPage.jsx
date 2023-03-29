import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AuthInput from '../components/elements/Input';
import { useUser } from '../contexts/UserContext';
import { changeUserInformation } from '../api/user';
import Alert from '../components/elements/Alert';
import { AuthLinkText } from '../components/auth.styled';
import { device } from '../globalStyles';

const StyledDiv = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  display: grid;
  place-items: center;
`;

const StyedSettingsContainer = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
  padding: 1.6rem;
  border: 1px solid var(--color-gray-200);
  border-bottom: none;
  background-color: #fff;

  .logout {
    margin-top: 1rem;
    text-align: end;
  }
  @media screen and (${device.md}) {
    .logout {
      display: none;
    }
  }
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
    :hover {
      border: 1px solid var(--color-light-orange);
      background-color: var(--color-light-orange);
    }
  }
`;

export default function SettingsPage() {
  const { currentUser, handleUserUpdate } = useUser();
  const nextUser = { ...currentUser };
  const { account: userAccount, name: userName, email: userEmail } = nextUser;
  const [account, setAccount] = useState(userAccount);
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [showErrorMsg, setShowErrorMsg] = useState('');
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const nameLength = name.length;
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

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
    const token = localStorage.getItem('token');
    if (!token) {
      setShowErrorMsg('unauthorized');
      setTimeout(() => {
        setShowErrorMsg(false);
      }, 1000);
      return;
    }

    const { data, status } = await changeUserInformation({
      id: currentUser.id,
      account,
      name,
      email,
      password,
      checkPassword,
    });
    console.log(status);
    if (data && status === 200) {
      setShowSuccessMsg(true);
      setTimeout(() => {
        setShowSuccessMsg(false);
      }, 1000);
    }
    // 將新data修正至 currentUser
    const newCurrentUser = {
      ...currentUser,
      account: data.account,
      name: data.name,
      email: data.email,
    };
    handleUserUpdate(newCurrentUser);
  };
  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <Header headerText="帳戶設定" />
      <StyedSettingsContainer>
        {showErrorMsg && (
          <StyledDiv>
            <Alert type="error" message={showErrorMsg} />
          </StyledDiv>
        )}
        {showSuccessMsg && (
          <StyledDiv>
            <Alert type="success" message="修改成功" />
          </StyledDiv>
        )}
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
        <div className="logout">
          <AuthLinkText onClick={handleLogoutClick}>登出</AuthLinkText>
        </div>
      </StyedSettingsContainer>
    </>
  );
}
