import Header from '../components/Header';
import TweetInput from '../components/TweetInput';
import TweetList from '../components/TweetList';

export default function TweetPage() {
  return (
    <>
      <Header headerText="首頁" />
      <TweetInput />
      <TweetList />
    </>
  );
}
