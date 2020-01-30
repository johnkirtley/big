import React, { useEffect } from 'react'
import Styled from "styled-components";
import { Link } from 'react-router-dom';



const StyledHeader = Styled.div`
background-image: url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
background-size: cover;
background-repeat: no repeat;
height: 60vh;
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
`

const Title = Styled.h1`
margin: 0;
`

const TitleContainer = Styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
`

const CallToAction = Styled.button`
font-size: 1.25rem;
border-radius: 10px;
padding: 7% 10%;
border: none;
margin-top: 5%;
width: 12rem;

&:hover {
    background-color: red;
}
`

const StyledLink = Styled(Link)`
font-size: 1.25rem;
border-radius: 10px;
border: none;
margin-top: 5%;
`

const Counter = Styled.div`
font-size: 3rem;
`

const CountContainer = Styled.div`
display: flex;
`


const Home = () => {

    const counter = useEffect(() => {
        let current = 0;
        let increment = 1;
        const num = document.querySelector('.counter');
        const timer = setInterval(function () {
            current += increment;
            num.innerHTML = current;
            if (current === 25) {
                clearInterval(timer);
            }
        }, 125)
    })


    return (
        <>
            <StyledHeader>
                <Title>HEADLINE</Title>
                <StyledLink to="/about">
                    <CallToAction>Call To Action</CallToAction>
                </StyledLink>
            </StyledHeader>
            <div>
                <TitleContainer>
                    <h2>Why Us</h2>
                    <CountContainer>
                        <Counter onClick={counter} className="counter"></Counter>
                        <p>Years of experience</p>
                    </CountContainer>
                </TitleContainer>
            </div>
            <div>
                <TitleContainer>
                    <h2>Our Strategy</h2>
                </TitleContainer>
            </div>
            <div>
                <TitleContainer>
                    <h2>Work With Us</h2>
                </TitleContainer>
            </div>
        </>
    )
}


export default Home;