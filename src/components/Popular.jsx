import styled from 'styled-components';

const StyledPopularAside = styled.aside`
  margin: 1rem;
  border-radius: 1rem;
  background-color: var(--color-gray-100);

  h2 {
    padding: 1.5rem;
    border-bottom: 1px solid var(--color-gray-300);
    font-size: var(--fs-h4);
  }
`;

const StyledLi = styled.li`
  padding: 1rem;
  display: grid;
  grid-template-columns: 50px auto auto;
  align-items: center;

  .avatar {
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }

  .user {
    margin-left: 0.5rem;
    width: 8rem;

    &.active {
      width: 7rem;
    }

    b {
      width: 100%;
      margin-bottom: -0.35rem;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      color: var(--color-gray-600);
    }
  }

  button {
    cursor: pointer;
    margin: 0.2rem 0;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-theme);
    border-radius: 3.125rem;
    color: var(--color-theme);
    background-color: var(--color-gray-100);

    &.active,
    &:hover {
      color: white;
      background-color: var(--color-theme);
    }
  }
`;

export default function Popular() {
  return (
    <StyledPopularAside>
      <h2>推薦跟隨</h2>
      <ul>
        <PopularItem isFollowing />
        <PopularItem isFollowing />
        <PopularItem />
        <PopularItem />
        <PopularItem />
      </ul>
    </StyledPopularAside>
  );
}

function PopularItem({ isFollowing }) {
  return (
    <StyledLi isFollowing>
      <div className="avatar">
        <img src="https://placekitten.com/300/300" alt="avatar" />
      </div>
      <div className={`user ${isFollowing && 'active'}`}>
        <b>Meowwwwww</b>
        <p>@Meow</p>
      </div>
      <button className={isFollowing && 'active'} type="button">
        {isFollowing ? '正在跟隨' : '跟隨'}
      </button>
    </StyledLi>
  );
}
