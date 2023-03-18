import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // css reset
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
  // reset over

  :root {
    /* font-family */
    --ff-basic: 'Montserrat','Noto Sans TC', sans-serif;

    /* font-size */
    --fs-basic: 1rem; 
    --fs-secondary: 0.875rem;
    --fs-small: 0.75rem;
    --fs-h1: 4.25rem;
    --fs-h2: 2.625rem;
    --fs-h3: 1.75rem;
    --fs-h4: 1.6rem;
    --fs-h5: 1.125rem;

    /* colors */
    --color-theme: #FF6600;
    --color-primary: #0062FF;
    --color-secondary: #6C757D;
    --color-success: #3DD598;
    --color-warning: #FFC542;
    --color-error: #FC5A5A;

    --color-light-orange: #FF974A;
    --color-light-blue: #50B5FF;
    --color-light-green: #82C43C;
    --color-purple: #A461D8;
    --color-pink: #FF9AD5;

    --color-gray-100: #FAFAFB;
    --color-gray-200: #F1F1F5;
    --color-gray-300: #E2E2EA;
    --color-gray-400: #D5D5DC;
    --color-gray-500: #B5B5BE;
    --color-gray-600: #92929D;
    --color-gray-700: #696974;
    --color-gray-800: #44444F;
    --color-gray-900: #171725;
  }

  body {
    font-family: var(--ff-basic);
    font-variant-numeric: tabular-nums;
    font-size: var(--fs-basic);
  }
`;

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 1rem 0;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

// export const GridContainer = styled(Container)`
//   @media screen and (min-width: 768px) {
//   }
// `;
