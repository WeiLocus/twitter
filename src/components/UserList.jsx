import { useOutletContext } from 'react-router-dom';
import { StyledList, TweetItem, ReplyItem } from './TweetList';
import { likes } from '../dummyData';

function UserTweetList() {
  const { shownUser, shownUserTweets } = useOutletContext();
  const renderedItems = shownUserTweets.map((tweet) => {
    return <TweetItem key={tweet.id} tweet={tweet} shownUser={shownUser} />;
  });
  return <StyledList>{renderedItems}</StyledList>;
}

function UserReplyList() {
  const { shownUser, shownUserReplies } = useOutletContext();
  const renderedItems = shownUserReplies.map((reply) => {
    return (
      <ReplyItem
        reply={reply}
        shownUser={shownUser}
        key={reply.id}
        replyTo={reply.replyTo}
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
