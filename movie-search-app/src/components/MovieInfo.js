import React, { useEffect, useState } from "react";
import { API_KEY } from "./SearchTile";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: white;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfoStyle = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: white;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;
const MovieInfo = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=" + selectedMovie + "&apikey=" + API_KEY)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        setMovieInfo(data)
    });
  }, [selectedMovie]);
  return (
    <Container>
      {movieInfo ? (
        <>
          <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <InfoColumn>
            <MovieName>
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </MovieName>
            <MovieInfoStyle>
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </MovieInfoStyle>
            <MovieInfoStyle>
              Year: <span>{movieInfo?.Year}</span>
            </MovieInfoStyle>
            <MovieInfoStyle>
              Language: <span>{movieInfo?.Language}</span>
            </MovieInfoStyle>
            <MovieInfoStyle>
              Rated: <span>{movieInfo?.Rated}</span>
            </MovieInfoStyle>
            <MovieInfoStyle>
              Released: <span>{movieInfo?.Released}</span>
            </MovieInfoStyle>
            <MovieInfoStyle>
              Runtime: <span>{movieInfo?.Runtime}</span>
            </MovieInfoStyle>
            <MovieInfoStyle>
              Genre: <span>{movieInfo?.Genre}</span>
            </MovieInfoStyle>
            <MovieInfoStyle>
              Director: <span>{movieInfo?.Director}</span>
            </MovieInfoStyle>
            <MovieInfoStyle>
              Actors: <span>{movieInfo?.Actors}</span>
            </MovieInfoStyle>
            <MovieInfoStyle>
              Plot: <span>{movieInfo?.Plot}</span>
            </MovieInfoStyle>
          </InfoColumn>
          <Close onClick={() => props.onMovieSelect()}>X</Close>
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};
export default MovieInfo;