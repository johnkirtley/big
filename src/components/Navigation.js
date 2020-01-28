import React from 'react';
import { Link } from "react-router-dom";
import Styled from "styled-components";



const NavContainer = Styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
font-size: 1.5rem;
background-color: lightgrey;
`

const Image = Styled.img`
height: 2rem;
justify-content: flex-start;
margin-right: 45%;
`

const NavLink = Styled.div`
padding: 2% 3%;
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
            </NavContainer>
        </div>
    )
}

export default Navigation;