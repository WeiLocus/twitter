import { createContext, useContext, useState } from 'react';
import { followUser, unfollowUser } from '../api/followship';
import { likeTweet, unLikeTweet } from '../api/like.js';

const UserContext = createContext(null);
const dummyUser = {
  id: 125,
  name: 'user125',
  email: 'user125@example.com',
  account: 'user125',
  introduction:
    'Reach out if you want to talk about emerging tech, creating software products, or baseball.',
  avatar:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/268.jpg',
  cover: 'https://loremflickr.com/640/480/nature?lock=27430',
  isAdmin: false,
  createdAt: '2023-03-20T15:44:34.000Z',
  updatedAt: '2023-03-20T15:44:34.000Z',
};
const dummyArray = [1, 2, 3];

function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(dummyUser);
  const [userFollowings, setUserFollowings] = useState(dummyArray);
  const [userLikes, setUserLikes] = useState(dummyArray);

  const handleFollow = async (id) => {
    if (userFollowings.includes(id)) {
      await unfollowUser(id);
      const newFollowings = userFollowings.filter(
        (followingId) => followingId !== id
      );
      console.log(newFollowings);
      setUserFollowings(newFollowings);
    } else {
      await followUser(id);
      const newFollowings = [...userFollowings, id];
      setUserFollowings(newFollowings);
      console.log(newFollowings);
    }
  };

  const handleLike = async (id) => {
    if (userLikes.includes(id)) {
      await unLikeTweet(id);
      const newLikes = userLikes.filter((tweetId) => tweetId !== id);
      setUserLikes(newLikes);
      console.log(newLikes);
    } else {
      await likeTweet(id);
      console.log(id);
      const newLikes = [...userLikes, id];
      setUserLikes(newLikes);
      console.log(newLikes);
    }
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        userFollowings,
        userLikes,
        setCurrentUser,
        setUserFollowings,
        setUserLikes,
        handleFollow,
        handleLike,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { useUser, UserProvider };
