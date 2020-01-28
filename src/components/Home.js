import React from 'react'
import Styled from "styled-components";



const StyledHeader = Styled.div`
background-image: url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
background-size: cover;
background-repeat: no repeat;
height: 60vh;
display: flex;
justify-content: center;
align-items: center;
`

const Title = Styled.h1`
margin: 0;

`


const Home = () => {
    return (
        <StyledHeader>
            <Title>BIG Investment Group</Title>
        </StyledHeader>
    )
}


export default Home;