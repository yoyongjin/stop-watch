import styled from "styled-components";
import StopWatch from "./components/Stopwatch";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <StopWatch />
    </AppContainer>
  );
};

export default App;
