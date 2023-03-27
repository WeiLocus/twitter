import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { GridContainer } from '../../globalStyles';
import { Navbar } from '../Navbar';
import Popular from '../Popular';
import { useUser } from '../../contexts/UserContext';
import { addTweet } from '../../api/tweet';
import { getCurrentUser, getUserFollowings } from '../../api/user';

export default function TweetLayout() {
  const { currentUser, setCurrentUser, setUserFollowings } = useUser();
  const [tweets, setTweets] = useState([]);
  const [tweetInput, setTweetInput] = useState('');
  const { pathname } = useLocation();

  const handleInputChange = (value) => {
    setTweetInput(value);
  };

  const handleAddTweet = async () => {
    try {
      const data = await addTweet({ description: tweetInput });
      if (data === 'error') return;
      console.log(
        `user ${currentUser.id} just submitted a tweet: ${tweetInput}`
      );
      // 重新setTweets
      const nextTweets = [
        {
          id: data.tweetInput.id,
          description: data.tweetInput.description,
          createdAt: data.tweetInput.createdAt,
          replyCounts: 0,
          likeCounts: 0,
          isLiked: 0,
          User: {
            id: currentUser.id,
            account: currentUser.account,
            name: currentUser.name,
            avatar: currentUser.avatar,
          },
        },
        ...tweets,
      ];
      setTimeout(() => {
        setTweets(nextTweets);
        setTweetInput('');
      }, 2000);
      return { status: 'ok' };
    } catch (error) {
      console.log(error);
      return { status: 'error' };
    }
  };

  useEffect(() => {
    const getUserAsync = async () => {
      try {
        const user = await getCurrentUser();
        console.log(`user ${user.id} just logged in`);
        const followings = await getUserFollowings(user.id);
        const followingUsers = followings.map(
          (following) => following.followingId
        );
        // followingUsers = [34, 44]
        console.log('user following list get');
        setCurrentUser(user);
        setUserFollowings(followingUsers);
        console.log('user context loaded');
      } catch {
        console.error(error);
      }
    };
    getUserAsync();
  }, []);

  return (
    <GridContainer>
      <div className="fr1">
        <Navbar
          tweetInput={tweetInput}
          currentUser={currentUser}
          onChange={handleInputChange}
          onAddTweet={handleAddTweet}
        />
      </div>
      <div className="fr2">
        <Outlet
          context={{
            currentUser,
            tweets,
            setTweets,
            tweetInput,
            handleInputChange,
            handleAddTweet,
          }}
        />
      </div>
      <div className="fr3">{!pathname.includes('settings') && <Popular />}</div>
    </GridContainer>
  );
}
