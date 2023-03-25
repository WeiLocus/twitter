// ! 暫時先放這邊
import { useOutletContext } from 'react-router-dom';
import { StyledList, TweetItem, ReplyItem } from './TweetList';
import { tweetsByUser, repliesByUser, likes } from '../dummyData';
// shownUser 是用來取得資料用

function UserTweetList() {
  const { currentUser, shownUser } = useOutletContext();
  const renderedItems = tweetsByUser.map((tweet) => {
    return <TweetItem currentUser={currentUser} tweet={tweet} key={tweet.id} />;
  });
  return <StyledList>{renderedItems}</StyledList>;
}

function UserReplyList() {
  const { currentUser, shownUser } = useOutletContext();
  const renderedItems = repliesByUser.map((reply) => {
    return <ReplyItem currentUser={currentUser} reply={reply} key={reply.id} />;
  });
  return <StyledList>{renderedItems}</StyledList>;
}

function UserLikeList() {
  const { currentUser, shownUser } = useOutletContext();
  const renderedItems = likes.map((tweet) => {
    return <TweetItem currentUser={currentUser} tweet={tweet} key={tweet.id} />;
  });
  return <StyledList>{renderedItems}</StyledList>;
}

export { UserTweetList, UserReplyList, UserLikeList };
