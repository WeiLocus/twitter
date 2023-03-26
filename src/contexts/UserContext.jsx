import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentUser } from '../api/user';

const UserContext = createContext(null);

function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
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
  });
  const { pathname } = useLocation();

  useEffect(() => {
    const getUserAsync = async () => {
      try {
        const user = await getCurrentUser();
        if (user === 'error') return;
        console.log(user);
        console.log('user context loaded');
        localStorage.setItem('storedCurrentUser', JSON.stringify(user));
        setCurrentUser(user);
      } catch {
        console.error(error);
      }
    };
    const storedUser = JSON.parse(localStorage.getItem('storedCurrentUser'));
    if (storedUser) {
      return setCurrentUser(storedUser);
    }
    getUserAsync();
  }, [pathname]);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { useUser, UserProvider };
