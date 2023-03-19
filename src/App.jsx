import { GlobalStyle, GridContainer } from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <GridContainer>
        <h1 className="fr1">
          Vite + React 1234 Vite + React Vite + React Vite + React
        </h1>
        <h2 className="fr2">這是包含數字 123456 和一般的文字</h2>
        <h3 className="fr3">
          english and number have different font 345445 三四五六七
        </h3>
      </GridContainer>
    </>
  );
}

export default App;
