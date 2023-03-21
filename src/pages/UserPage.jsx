import { useParams, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';

export default function UserPage() {
  const { id } = useParams();
  return (
    <>
      <Header headerText="John Doe" goBack user />
      <Profile id={id} />
      <Outlet />
    </>
  );
}
