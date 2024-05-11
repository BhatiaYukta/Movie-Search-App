import React from "react"
import styled from "styled-components"



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
const MovieInfo = styled.span`
font-size: 16px;
font-weight: 500;
color: white;
white-space: nowrap;
overflow: hidden;
text-transform: capitalize;
text-overflow: ellipsis;
`
const MovieContainer = (props) => {
    const { Title, Year, imdID, Type, Poster } = props.movie;
    return (

        <MovieDiv onClick={()=>{
            props.onMovieSelect(imdID)
        }}>
            <CoverImage src={Poster}></CoverImage>
            <MovieName>{Title}</MovieName>
            <InfoMovie>
                <MovieInfo>Year: {Year}</MovieInfo>
                <MovieInfo>Type: {Type}</MovieInfo>
            </InfoMovie>
        </MovieDiv>
    )
}

export default MovieContainer;