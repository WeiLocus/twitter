import styled from 'styled-components';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';
import { currentUser, users, tweets, replies, likes } from '../dummyData';

const StyledDiv = styled.div`
  height: calc(100vh - 73px);
  overflow-y: scroll;
`;

export default function UserPage() {
  // 從網址取得要顯示的 user id
  const { id } = useParams();
  const { pathname } = useLocation();
  const shownUser = users.find((user) => user.id === parseInt(id, 10));

  return (
    <>
      <Header headerText={shownUser.name} user={shownUser} goBack />
      <StyledDiv>
        {!pathname.includes('follow') && <Profile user={shownUser} />}
        <Outlet context={{ currentUser, shownUser, tweets, replies, likes }} />
      </StyledDiv>
    </>
  );
}
