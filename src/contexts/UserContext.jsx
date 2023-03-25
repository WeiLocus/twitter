import { createContext, useContext, useEffect, useState } from 'react';

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
  // console.log(currentUser);

  useEffect(() => {
    const getUserAsync = async () => {
      const user = await getCurrentUser();
      console.log('user context loaded');
    };
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { useUser, UserProvider };
