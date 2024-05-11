import React from "react";
import styled from "styled-components"

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


const SearchTile = () => {
    return (
        // <div>
            <Header>
                <AppName>
                    <MovieImage src="/MovieIcon.png"></MovieImage>
                    Movie Search App</AppName>
                <SearchBox >
                    <SearchIcon src="/MovieSearch.png"></SearchIcon>
                    <SearchInput placeholder="Search Movie"></SearchInput>
                </SearchBox>
            </Header>
        // </div>
    )
}

export default SearchTile;