import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 1rem;
  border: 1px solid var(--color-gray-200);
  border-bottom: 10px solid var(--color-gray-200);
  background-color: white;
`;

const StyledAvatarDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 50px;
    aspect-ratio: 1/1;
    margin-right: 0.5rem;
    border-radius: 50%;
    overflow: hidden;
  }

  p {
    color: var(--color-gray-700);
    font-weight: 700;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: end;

  button {
    cursor: pointer;
    margin: 0.2rem 0;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-theme);
    border-radius: 3.125rem;
    color: white;
    background-color: var(--color-theme);
  }
`;

export default function TweetInput() {
  return (
    <StyledDiv>
      <StyledAvatarDiv>
        <img src="https://placekitten.com/300/300" alt="avatar" />
        <p>有什麼新鮮事？</p>
      </StyledAvatarDiv>
      <StyledButtonDiv>
        <button type="button">推文</button>
      </StyledButtonDiv>
    </StyledDiv>
  );
}
