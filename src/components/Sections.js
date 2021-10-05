import React from "react";
import styled from "styled-components";

function Sections(props){
    return(
        <Wrap bgImage ={props.backgroundImg}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {props.leftButton}
                </LeftButton>
                {props.rightButton && <RightButton>
                    {props.rightButton}
                </RightButton>}
                
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    );
}

export default Sections;

const Wrap = styled.div `
height: 100vh;
width: 100vw;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center; 
background-image: ${(props) => `url("/images/${props.bgImage}")`} 
`;

const ItemText = styled.div `
padding-top: 15vh;
text-align: center;
`;

const ButtonGroup = styled.div `
display: flex;
margin-bottom: 30px;
@media (max-width: 768px) {
    flex-direction: column;
}
`;
const LeftButton = styled.div `
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor:pointer;
    margin: 8px;
`;
const RightButton = styled(LeftButton) `
background-color: white;
opacity: 0.65;
color: black;
`;
const DownArrow = styled.img `
height: 40px;
animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div `

`;