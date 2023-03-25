import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { UserProvider } from './contexts/UserContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminPage from './pages/AdminPage';
import AdminTweetList from './components/AdminTweetList';
import AdminUserList from './components/AdminUserList';
import SettingsPage from './pages/SettingsPage';
import AdminLayout from './components/layouts/AdminLayout';
import TweetLayout from './components/layouts/TweetLayout';
import TweetPage from './pages/TweetPage';
import ReplyPage from './pages/ReplyPage';
import UserPage from './pages/UserPage';
import {
  UserReplyList,
  UserTweetList,
  UserLikeList,
} from './components/UserList';
import FollowList from './components/FollowList';

const basename = import.meta.env.VITE_PUBLIC_URL;

function App() {
  return (
    <BrowserRouter basename={basename}>
      <UserProvider>
        <GlobalStyle />
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="admin">
            <Route index element={<AdminPage />} />
            <Route element={<AdminLayout />}>
              <Route path="tweets" element={<AdminTweetList />} />
              <Route path="users" element={<AdminUserList />} />
            </Route>
          </Route>
          <Route element={<TweetLayout />}>
            <Route path="tweets">
              <Route index element={<TweetPage />} />
              <Route path=":id" element={<ReplyPage />} />
            </Route>
            <Route element={<UserPage />}>
              <Route path="users/:id">
                <Route path="tweets" element={<UserTweetList />} />
                <Route path="replies" element={<UserReplyList />} />
                <Route path="likes" element={<UserLikeList />} />
                <Route
                  path="followers"
                  element={<FollowList type="followers" />}
                />
                <Route
                  path="followings"
                  element={<FollowList type="followings" />}
                />
              </Route>
            </Route>
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
