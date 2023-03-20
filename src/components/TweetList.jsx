import styled from 'styled-components';

const StyledList = styled.ul`
  height: calc(100vh - 225px);
  background-color: aliceblue;
  overflow-y: scroll;
`;

const StyledListItem = styled.li`
  height: 150px;
  background-color: aqua;
  border-bottom: 5px solid tomato;
`;

export default function TweetList() {
  return (
    <StyledList>
      <StyledListItem />
      <StyledListItem />
      <StyledListItem />
      <StyledListItem />
      <StyledListItem />
    </StyledList>
  );
}
