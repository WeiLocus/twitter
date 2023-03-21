import { useParams, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';

export default function UserPage() {
  const { id } = useParams();
  const { pathname } = useLocation();
  return (
    <>
      <Header headerText="John Doe" goBack user />
      {!pathname.includes('follow') && <Profile id={id} />}
      <Outlet />
    </>
  );
}
