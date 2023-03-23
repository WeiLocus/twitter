import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import Header from '../components/Header';
import TweetInput from '../components/TweetInput';
import TweetList from '../components/TweetList';
import { tweets, loginUser } from '../dummyData';

const StyledDiv = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
`;
const baseURL = `https://murmuring-plains-40389.herokuapp.com/api`;

async function getTweets(token) {
  try {
    const response = await axios.get(`${baseURL}/tweets`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
export default function TweetPage() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getTweets(token);
    }
  }, []);
  return (
    <>
      <Header headerText="首頁" />
      <StyledDiv>
        <TweetInput user={loginUser} />
        <TweetList tweets={tweets} type="tweet" />
      </StyledDiv>
    </>
  );
}
