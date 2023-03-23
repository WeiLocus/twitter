import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AuthInput from './Input';
import { ReactComponent as CrossIcon } from '../../assets/Cross.svg';
import { ReactComponent as ChangeImgIcon } from '../../assets/ChangeImg.svg';

const StyledDiv = styled.div`
  position: absolute;
  z-index: 1;
  inset: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  inset: 3.5rem 0;
  width: 634px;
  height: 610px;
  margin: 0 auto;
  border-radius: 1rem;
  background-color: white;

  .content {
    position: relative;
    display: flex;
    flex-direction: column;

    .cover {
      position: relative;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: bottom;
      }
    }
  }

  .avatar {
    position: absolute;
    top: 7.75rem;
    left: 1rem;
    width: 140px;
    aspect-ratio: 1/1;
    border: 4px solid white;
    border-radius: 50%;
    overflow: hidden;
  }
`;

const StyledCloseDiv = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr auto;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--color-gray-200);

  p {
    font-weight: 700;
  }

  .close-btn {
    all: unset;
    cursor: pointer;
    color: var(--color-theme);
  }

  .save-btn {
    all: unset;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-theme);
    border-radius: 3.125rem;
    color: white;
    background-color: var(--color-theme);
  }
`;

const StyledFilterDiv = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);

  .icons {
    display: flex;
    align-items: center;
    gap: 2rem;

    .icon {
      cursor: pointer;
    }
  }
`;

const StyledInputContainer = styled.div`
  margin-top: 5rem;
  padding: 1rem;
  background-color: pink;
  .introduction {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    background-color: var(--color-gray-100);
    label {
      padding: 0.125rem 0.625rem;
      font-size: var(--fs-secondary);
      color: var(--color-gray-700);
    }
  }
`;

const StyledInput = styled.input`
  padding: 0.125rem 0.625rem;
  border: none;
  background-color: var(--color-gray-100);
  line-height: 1.6rem;
  font-size: var(--fs-basic);
  ::-webkit-input-placeholder {
    color: var(--color-gray-500);
  }
  border-bottom: 2px solid var(--color-gray-700);
  :focus {
    border-bottom: 2px solid var(--color-light-blue);
    outline: none;
  }
  :hover {
    border-bottom: 2px solid var(--color-light-blue);
  }
`;

export default function EditModal({ onClose }) {
  const [username, setUsername] = useState('');
  const [introduction, setIntroduction] = useState('');
  const nameLength = username.length;
  const introductionLength = introduction.length;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <StyledDiv>
      <StyledModal>
        <form>
          <StyledCloseDiv>
            <button className="close-btn" type="button" onClick={onClose}>
              <CrossIcon />
            </button>
            <p>編輯個人資料</p>
            <button className="save-btn" type="submit" onClick={onClose}>
              儲存
            </button>
          </StyledCloseDiv>
          <div className="content">
            <div className="cover">
              <img src="https://picsum.photos/id/49/700/300" alt="user-cover" />
              <StyledFilterDiv>
                <div className="icons">
                  <ChangeImgIcon className="icon" />
                  <CrossIcon className="icon" onClick={onClose} />
                </div>
              </StyledFilterDiv>
            </div>
            <StyledInputContainer>
              <AuthInput
                label="名稱"
                placeholder="John Doe"
                value={username}
                onChange={(nameInput) => setUsername(nameInput)}
                InputLength={nameLength}
              />
              <div className="introduction">
                <label>自我介紹</label>
                <StyledInput placeholder="Hello! My name is John Doe" />
              </div>
              {/* <AuthInput
                label="自我介紹"
                placeholder="Hello! My name is John Doe"
                value={introduction}
                onChange={(introductionInput) =>
                  setIntroduction(introductionInput)
                }
                InputLength={introductionLength}
              /> */}
            </StyledInputContainer>
            <div className="avatar">
              <img src="https://placekitten.com/700/700" alt="avatar" />
              <StyledFilterDiv>
                <div className="icons">
                  <ChangeImgIcon className="icon" />
                </div>
              </StyledFilterDiv>
            </div>
          </div>
        </form>
      </StyledModal>
    </StyledDiv>
  );
}
