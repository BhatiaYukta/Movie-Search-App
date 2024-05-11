import styled from "styled-components"
import SearchTile from "./components/SearchTile";


import MovieContainer from "./components/MovieContainer";

const Container = styled.div`
display: flex,
flex-direction:column;
`;


function App() {
  return (
    <Container >
      <SearchTile />
      <MovieContainer />
      <MovieContainer />
      <MovieContainer />
      <MovieContainer />
    </Container>
  );
}

export default App;
