/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 3000);
  }, [navigate]);
  return (
    <StyledDiv>
      <div>{isLoading && <BeatLoader color="var(--color-theme)" />}</div>
    </StyledDiv>
  );
}
