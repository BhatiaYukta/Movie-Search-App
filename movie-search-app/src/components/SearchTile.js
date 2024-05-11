import React, { useState } from "react";
import styled from "styled-components"
import MovieContainer from "./MovieContainer";
import MovieInfo2 from "./MovieInfo2";


export const API_KEY = "1d7d37bd"


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
box-shadow: 0 3px 6px 0 #555;
justify-content:space-between;
align-items:center;
`
const AppName = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`
const MovieImage = styled.img`
width:48px;
height:48px;
margin:15px;
`

const SearchBox = styled.div`
display:flex;
flex-direction:row;
padding: 10px 10px;
background-color:white;
border-radius:6px;
margin-left:20px;
width:50%;
background-color:white;
align-items:center;
`
const SearchIcon = styled.img`
width:50px;
height:50px;
`

const SearchInput = styled.input`
color:black;
font-size:16px;
font-weight:bold;
border:none;
outline:none;
margin-left:15px;
`
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;
const SearchTile = () => {
    const [searchQuery, updateSearchQuery] = useState();
    const [timeoutId, updateTimeoutID] = useState();
    const [movieList, updateMovieList] = useState([]);
    const [selectedMovie, onMovieSelect] = useState();

    const fetchData = (searchString) => {
        fetch("https://www.omdbapi.com/?s=" + searchString + "&apikey=" + API_KEY)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                updateMovieList(data.Search)
            });

    }

    const onTextChange = (event) => {
        onMovieSelect("")
        clearTimeout(timeoutId)
        updateSearchQuery(event.target.value)
        const timeout = setTimeout(() => {
            fetchData(event.target.value)
        }, 500);
        updateTimeoutID(timeout)
    }

    return (
        <Container>
            <Header>
                <AppName>
                    <MovieImage src="/MovieIcon.png"></MovieImage>
                    Movie Search App</AppName>
                <SearchBox >
                    <SearchIcon src="/MovieSearch.png"></SearchIcon>
                    <SearchInput placeholder="Search Movie" value={searchQuery} onChange={onTextChange}></SearchInput>
                </SearchBox>



            </Header>
            {selectedMovie && <MovieInfo2 selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
            <MovieListContainer>
                {movieList?.length
                    ? movieList.map((movie, index) => (<MovieContainer key={index} movie={movie} onMovieSelect={onMovieSelect}/>)
                    ) : <span style={{ color: "white" }}>"No movie Search"</span>}

            </MovieListContainer>
        </Container>
    )
}

export default SearchTile;