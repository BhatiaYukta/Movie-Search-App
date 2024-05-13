import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieContainer from "./MovieContainer";
import MovieInfo from "./MovieInfo";

export const API_KEY = "1d7d37bd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// For styling of header part in which we will add search bar
const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
  padding: 15px;
  font-size: 27px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  justify-content: space-between;
  align-items: center;
`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  background-color: white;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
  align-items: center;
`;

const SearchIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SearchTile = () => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [timeoutId, updateTimeoutID] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(6); // Adjusted to display 6 movies per page

  useEffect(() => {
    fetchData(searchQuery);
  }, [currentPage]); // Refetch data when currentPage changes

  const fetchData = (searchString) => {
    fetch(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        updateMovieList(data.Search || []);
      });
  };

  const onTextChange = (event) => {
    onMovieSelect(null);
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => {
      setCurrentPage(1); // Reset to first page when performing new search
      fetchData(event.target.value);
    }, 500);
    updateTimeoutID(timeout);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movieList.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src="/MovieIcon.png" />
          Movie Search App
        </AppName>
        <SearchBox>
          <SearchIcon src="/MovieSearch.png" />
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>
      {selectedMovie && (
        <MovieInfo selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />
      )}
      <MovieListContainer>
        {currentMovies?.length ? (
          currentMovies.map((movie, index) => (
            <MovieContainer
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <span style={{ color: "white" }}>No movie found</span>
        )}
      </MovieListContainer>
      <Pagination>
        {[...Array(Math.ceil(movieList.length / moviesPerPage)).keys()].map(
          (number) => (
            <button key={number} onClick={() => paginate(number + 1)}>
              {number + 1}
            </button>
          )
        )}
      </Pagination>
    </Container>
  );
};

export default SearchTile;
