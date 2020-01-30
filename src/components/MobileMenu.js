import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Styled from 'styled-components';


const StyledMenu = Styled.i`
display: none;

@media(max-width: 800px) {
    display: block;
    padding: 3%;
}
`

const StyledLinks = Styled(Link)`
display: block;
text-decoration: none;
padding: 8% 0;
`



const MobileMenu = () => {

    useEffect(() => {
        const menu = document.querySelector('.mobile-menu');
        const hamburger = document.querySelector('.hamburger-menu');
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('mobile-menu');
        })
    })




    return (
        <StyledMenu className='hamburger-menu'>
            <i class="fas fa-bars"></i>
            <div className='mobile-menu' >
                <StyledLinks to="/">Home</StyledLinks>
                <StyledLinks to='/about'>About</StyledLinks>
                <StyledLinks to='/team'>Team</StyledLinks>
                <StyledLinks to='/contact'>Contact</StyledLinks>
            </div>
        </StyledMenu>
    )
}

export default MobileMenu;