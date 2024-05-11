import styled from "styled-components"
import SearchTile from "./components/SearchTile";

const Container = styled.div`
display: flex,
flex-direction:column;
`;


function App() {
  return (
    <Container >
      <SearchTile />
    </Container>
  );
}

export default App;
