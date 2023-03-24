import styled from 'styled-components';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';
import { users } from '../dummyData';

const StyledDiv = styled.div`
  height: calc(100vh - 73px);
  overflow-y: scroll;
`;

export default function UserPage() {
  // 從網址取得要顯示的 user id
  const { id } = useParams();
  const { pathname } = useLocation();
  const shownUser = users.find((user) => user.id === parseInt(id));
  console.log(shownUser);

  return (
    <>
      <Header headerText={shownUser.name} user={shownUser} goBack />
      <StyledDiv>
        {!pathname.includes('follow') && <Profile user={shownUser} />}
        <Outlet context={shownUser} />
      </StyledDiv>
    </>
  );
}
