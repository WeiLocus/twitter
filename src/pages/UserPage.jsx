import styled from 'styled-components';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';

const StyledDiv = styled.div`
  height: calc(100vh - 73px);
  overflow-y: scroll;
`;

export default function UserPage() {
  const { id } = useParams();
  const { pathname } = useLocation();
  return (
    <>
      <Header headerText="John Doe" goBack user />
      <StyledDiv>
        {!pathname.includes('follow') && <Profile id={id} />}
        <Outlet />
      </StyledDiv>
    </>
  );
}
