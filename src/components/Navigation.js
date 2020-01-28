import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import { Link } from "react-router-dom";
import Styled from "styled-components";



const NavContainer = Styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
font-size: 1.5rem;
background-color: lightgrey;

@media(max-width: 800px) {
    
}
`

const Image = Styled.img`
height: 2rem;
justify-content: flex-start;
margin-right: auto;
`

const NavLink = Styled.div`
padding: 2% 3%;

@media(max-width: 800px) {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    transform: translate3d(-100vw, 0, 0);
    transition: transform .3s cubic-bezier(0, .52, 0, 1);

    width: 100vw;
    height: 100vh;
}
`

const StyledLink = Styled(Link)`
text-decoration: none;
color: darkblue;

&:hover {
    color: white;
}
`

const Navigation = () => {
    return (
        <div>
            <NavContainer>
                <Image src="http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-BlackRock-Logo-PNG-Transparent.png" alt="blackrock logo" />
                <NavLink>
                    <StyledLink to="/">Home</StyledLink>
                </NavLink>
                <NavLink>
                    <StyledLink to="/about">About</StyledLink>
                </NavLink>
                <NavLink>
                    <StyledLink to="/team">Team</StyledLink>
                </NavLink>
                <NavLink>
                    <StyledLink to="/contact">Contact</StyledLink>
                </NavLink>
                <MobileMenu />
            </NavContainer>
        </div>
    )
}

export default Navigation;