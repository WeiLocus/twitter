import Header from '../components/Header';
import TweetContent from '../components/TweetContent';
import TweetList from '../components/TweetList';

export default function ReplyPage() {
  return (
    <>
      <Header headerText="推文" goBack />
      <TweetContent />
      <TweetList type="reply" />
    </>
  );
}
