import styled from 'styled-components';

const StyledPopularAside = styled.aside`
  margin: 1rem;
  /* padding: 1rem; */
  border-radius: 1rem;
  background-color: var(--color-gray-100);

  h2 {
    padding: 1.5rem;
    border-bottom: 1px solid var(--color-gray-300);
    font-size: var(--fs-h4);
  }
`;

export default function Popular() {
  return (
    <StyledPopularAside>
      <h2>推薦跟隨</h2>
      <div>
        <PopularItem />
      </div>
    </StyledPopularAside>
  );
}

function PopularItem() {
  return <div>popular item</div>;
}
