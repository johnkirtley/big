import React from 'react'
import Styled from 'styled-components';


const StyledMenu = Styled.i`
display: none;

@media(max-width: 800px) {
    display: block;
    padding: 3%;
}
`


const MobileItems = Styled.div`
display: none;
`


const MobileMenu = () => {
    return (
        <StyledMenu>
            <i class="fas fa-bars"></i>
            <MobileItems>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
            </MobileItems>
        </StyledMenu>
    )
}

export default MobileMenu;