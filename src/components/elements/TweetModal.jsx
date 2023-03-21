import styled from 'styled-components';
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
  width: 650px;
  height: 300px; // or 500px
  margin: 0 auto;
  border-radius: 1rem;
  background-color: white;

  .close {
    padding: 1rem;
    border-bottom: 1px solid var(--color-gray-200);

    button {
      all: unset;
      cursor: pointer;
      color: var(--color-theme);
    }
  }
`;

const StyledContent = styled.div`
  flex: 1;
  padding: 1rem;
  display: grid;
  grid-template-columns: calc(50px + 0.75rem) 1fr;

  img {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 0.75rem;

    textarea {
      all: unset;
      flex: 1;
      align-self: flex-start;
      width: calc(100% - 1rem);
    }

    button {
      all: unset;
      cursor: pointer;
      padding: 0.5rem 1rem;
      margin-top: 1rem;
      border: 1px solid var(--color-theme);
      border-radius: 3.125rem;
      color: white;
      background-color: var(--color-theme);
      font-size: var(--fs-basic);
    }
  }
`;

export default function TweetModal({ onClose }) {
  return (
    <StyledDiv>
      <StyledModal>
        <div className="close">
          <button type="button" onClick={onClose}>
            <CrossIcon />
          </button>
        </div>
        <StyledContent>
          <img src="https://placekitten.com/700/700" alt="avatar" />
          <form>
            <textarea placeholder="有什麼新鮮事？" />
            <button type="submit" onClick={onClose}>
              推文
            </button>
          </form>
        </StyledContent>
      </StyledModal>
    </StyledDiv>
  );
}
