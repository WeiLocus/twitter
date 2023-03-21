import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';
import TweetList from '../components/TweetList';

export default function UserPage() {
  const { id } = useParams();
  return (
    <>
      <Header headerText="John Doe" goBack user />
      <Profile id={id} />
      <TweetList />
    </>
  );
}
