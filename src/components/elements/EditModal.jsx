import { useEffect } from 'react';
import styled from 'styled-components';
import AuthInput from './Input';
import { ReactComponent as CrossIcon } from '../../assets/Cross.svg';

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

  .close {
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
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;

    .cover {
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: bottom;
      }
    }
  }

  .inputs {
    margin-top: 5rem;
    padding: 1rem;
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

export default function EditModal({ onClose }) {
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
          <div className="close">
            <button className="close-btn" type="button" onClick={onClose}>
              <CrossIcon />
            </button>
            <p>編輯個人資料</p>
            <button className="save-btn" type="submit" onClick={onClose}>
              儲存
            </button>
          </div>
          <div className="content">
            <div className="cover">
              <img src="https://picsum.photos/id/49/700/300" alt="user-cover" />
            </div>
            <div className="inputs">
              <AuthInput type="text" label="名稱" placeholder="John Doe" />
              <AuthInput
                type="text"
                label="自我介紹"
                placeholder="Hello! My name is John Doe"
              />
            </div>
            <img
              className="avatar"
              src="https://placekitten.com/700/700"
              alt="avatar"
            />
          </div>
        </form>
      </StyledModal>
    </StyledDiv>
  );
}
