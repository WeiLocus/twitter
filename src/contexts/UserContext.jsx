import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentUser, getUserFollowings } from '../api/user';

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

function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(dummyUser);
  const [userFollowings, setUserFollowings] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const getUserAsync = async () => {
      if (token === undefined) return;
      try {
        const user = await getCurrentUser();
        console.log(`user ${user.id} just logged in`);
        const followings = await getUserFollowings(user.id);
        const followingUsers = followings.map(
          (following) => following.followingId
        );
        console.log('user following list get');
        setCurrentUser(user);
        setUserFollowings(followingUsers);
        console.log('user context loaded');
      } catch {
        console.error(error);
      }
    };
    getUserAsync();
  }, [token]);

  return (
    <UserContext.Provider value={{ currentUser, userFollowings }}>
      {children}
    </UserContext.Provider>
  );
}

export { useUser, UserProvider };
