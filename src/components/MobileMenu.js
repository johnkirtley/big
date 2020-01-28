import React from 'react'
import Styled from 'styled-components';


const StyledMenu = Styled.i`
display: none;

@media(max-width: 800px) {
    display: block;
    padding: 3%;
}
`
const test = () => {
    console.log('working')
}


const MobileMenu = () => {
    return (
        <StyledMenu onClick={test}>
            <i class="fas fa-bars"></i>
        </StyledMenu >
    )
}

export default MobileMenu;