import React from 'react'
import styled from 'styled-components'
import women from '../img/women.png'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
height: calc(100vh - 50px);
display: flex;
padding: 20px;
`;

const Left = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`
width: 60%;
font-size: 60px;
`;

const Desc = styled.p`
width: 60%;
font-size: 20px;
margin-top: 10px;
`;

const Info = styled.div`
width:60%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 50px;
`
const Button = styled.button`
padding: 15px;
background-color: darkblue;
color: white;
border-radius: 10px;
font-weight: bold;
letter-spacing: 2px;
cursor: pointer;
`;

const Contact = styled.div`
display:flex;
flex-direction:column;
 `;

const Phone = styled.span`
color:#f0667d;
font-weight: bold;
`;


const ContactText = styled.span`
color:gray;
margin-top: 5px;
`;

const Right = styled.div`
width: 40%;
`;
const Image = styled.img`
width: 100%;
`

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title> Adventures in Creative Age</Title>
                <Desc>
                    We believe that designing products and services in close partnership
                    with our clients is the only way to have a real impact on their
                    business.
                </Desc>
                <Info>
                    <Button> Start Project </Button>
                    <Contact>
                        <Phone>Call us - 9737626491</Phone>
                        <ContactText> for any question and concern </ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right> <Image src={women} ></Image> </Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Intro
