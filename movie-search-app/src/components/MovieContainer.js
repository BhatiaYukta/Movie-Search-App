import React from "react"
import styled from "styled-components"


const MovieListContainer = styled.div`
display:flex;
flex-direction: row;
flex-wrap:wrap;
padding:30px;
justify-content:space-evenly;
gap:25px;
`
const MovieDiv = styled.div`
display:flex;
flex-direction:column;
padding:10px;
width:280px;
box-shadow:0 3px 10px 0 #aaa;
cursor:pointer;
`

const CoverImage = styled.img`
height:362px;
object-fit:cover; 
`

const MovieName = styled.span`
font-size:18px;
font-weight:600;
color:white;
margin: 15px 0;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
`
const InfoMovie = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
color:white;
`
const MovieInfo=styled.span`
font-size: 16px;
font-weight: 500;
color: white;
white-space: nowrap;
overflow: hidden;
text-transform: capitalize;
text-overflow: ellipsis;
`
const MovieContainer = (props) => {
    return (
        <MovieListContainer>
            <MovieDiv>
                <CoverImage src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"></CoverImage>
                <MovieName>Guardians of the Galaxy Vol. 2</MovieName>
                <InfoMovie>
                    <MovieInfo>Year: 2012</MovieInfo>
                    <MovieInfo>Type: Movie</MovieInfo>
                </InfoMovie>
            </MovieDiv>
        </MovieListContainer>
    )
}

export default MovieContainer;