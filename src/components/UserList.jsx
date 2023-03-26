// ! 暫時先放這邊
import { useOutletContext } from 'react-router-dom';
import { StyledList, TweetItem, ReplyItem } from './TweetList';
import { tweetsByUser, repliesByUser, likes } from '../dummyData';

function UserTweetList() {
  const { shownUser, shownUserTweets } = useOutletContext();
  const renderedItems = shownUserTweets.map((tweet) => {
    return <TweetItem key={tweet.id} tweet={tweet} shownUser={shownUser} />;
  });
  return <StyledList>{renderedItems}</StyledList>;
}

function UserReplyList() {
  const { currentUser, shownUser } = useOutletContext();
  const renderedItems = repliesByUser.map((reply) => {
    return (
      <ReplyItem
        currentUser={currentUser}
        reply={reply}
        shownUser={shownUser}
        key={reply.id}
      />
    );
  });
  return <StyledList>{renderedItems}</StyledList>;
}

function UserLikeList() {
  const { currentUser, shownUser } = useOutletContext();
  const renderedItems = likes.map((tweet) => {
    return (
      <TweetItem
        currentUser={currentUser}
        tweet={tweet}
        shownUser={shownUser}
        key={tweet.id}
      />
    );
  });
  return <StyledList>{renderedItems}</StyledList>;
}

export { UserTweetList, UserReplyList, UserLikeList };
