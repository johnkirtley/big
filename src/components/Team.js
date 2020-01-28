import React from 'react'
import Styled from "styled-components";


const TeamContainer = Styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width: 100%;
`

const CardContainer = Styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 5%;

@media(max-width: 800px) {
    display: block;
}

`

const Card = Styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
border: 1px solid black;
height: 20rem;
width: 15rem;


@media (max-width: 800px) {
    margin: 5% 0;
}
`

const Title = Styled.h2`
height: 25vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 0;
`


const Team = (props) => {
    return (
        <>
            <TeamContainer>
                <Title>
                    <h2>Team</h2>
                </Title>

                <CardContainer>
                    {props.attr.map(data => (
                        <Card>
                            <div>{data.imageUrl}</div>
                            <div>{data.name}</div>
                            <div>{data.title}</div>
                        </Card>
                    ))}
                </CardContainer>
            </TeamContainer>
        </>
    )
}


export default Team;