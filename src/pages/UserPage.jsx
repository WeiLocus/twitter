import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';
import Header from '../components/Header';
import Profile from '../components/Profile';
import { useUser } from '../contexts/UserContext';
import { device } from '../globalStyles';
import {
  getUserData,
  getUserTweets,
  getUserReplies,
  getUserLikes,
} from '../api/user';

const StyledDiv = styled.div`
  height: calc(100vh - 56px);
  overflow-y: scroll;
  padding-top: 73px;

  @media screen and (${device.md}) {
    height: calc(100vh - 73px);
    padding-top: unset;
  }
`;

const StyledMessage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  border-inline: 2px solid var(--color-gray-200);
  color: var(--color-secondary);
`;

export default function UserPage() {
  // 從網址取得要顯示的 user id
  const { id } = useParams();
  const { pathname } = useLocation();
  const { currentUser } = useUser();
  const [shownUser, setShownUser] = useState(currentUser);
  const [shownUserTweets, setShownUserTweets] = useState([]);
  const [shownUserReplies, setShownUserReplies] = useState([]);
  const [shownUserLikes, setShownUserLikes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUserPageDataAsync = async () => {
    try {
      const user = await getUserData(id);
      console.log(`user ${id} profile get!`);
      const userTweets = await getUserTweets(id);
      console.log(`user ${id} tweets get!`);
      const userReplies = await getUserReplies(id);
      console.log(`user ${id} replies get!`);
      const userLikes = await getUserLikes(id);
      console.log(`user ${id} likes get!`);
      setShownUser(user);
      setShownUserTweets(userTweets);
      setShownUserReplies(userReplies);
      setShownUserLikes(userLikes);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getUserPageDataAsync();
  }, [id]);

  return (
    <>
      {isLoading && (
        <StyledMessage>
          <div>
            <BeatLoader color="var(--color-theme)" />
          </div>
        </StyledMessage>
      )}
      {!isLoading && (
        <>
          <Header
            headerText={shownUser.name}
            user={shownUser}
            goBack
            shownUserTweets={shownUserTweets}
          />
          <StyledDiv>
            {!pathname.includes('follow') && (
              <Profile
                user={shownUser}
                key={shownUser.id}
                onProfileChange={getUserPageDataAsync}
              />
            )}
            <Outlet
              context={{
                currentUser,
                shownUser,
                shownUserTweets,
                shownUserReplies,
                shownUserLikes,
              }}
            />
          </StyledDiv>
        </>
      )}
    </>
  );
}
