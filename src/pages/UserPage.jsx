import Header from '../components/Header';
import Profile from '../components/Profile';
import TweetList from '../components/TweetList';

export default function UserPage() {
  return (
    <>
      <Header headerText="John Doe" goBack user />
      <Profile />
      <TweetList />
    </>
  );
}
