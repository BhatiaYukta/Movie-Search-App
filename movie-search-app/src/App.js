import styled from "styled-components"

const Container = styled.div`
display: flex,
flex-direction:column;
`;

//For styling of header part in which we will add search bar
const Header = styled.div`
display:flex;
flex-direction: row;
background-color: black;
color: white;
padding: 15px;
font-size:27px;
font-weight:bold;
box-shadow: 0 4px 8px 0 #556;
`
const AppName=styled.div`
display:flex;
flex-direction:row;
align-items:center;
`
const MovieImage=styled.div`
width:48px;
height:48px;
margin:15px;
`

function App() {
  return (
    <Container >
      <Header>
       <AppName>
        <MovieImage src="/image.png"></MovieImage>
        Movie Search App</AppName> 
      </Header>
     
    </Container>
  );
}

export default App;
