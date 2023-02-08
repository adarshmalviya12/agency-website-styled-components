import React from 'react'
import styled from 'styled-components'
import App from '../img/app.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div` 
display: flex;
`

//--left side --
const Left = styled.div` 
width:50%;

`
const Image = styled.img` 
width: 70%;
margin-top: 20px;
`
// --right side --
const Right = styled.div` 
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
`
const Title = styled.span`
font-size: 70px;
`
const SubTitle = styled.span`
font-size: 24px;
color: #333;
font-style: italic;
margin-top: 20px;
`
const Desc = styled.p`
font-size: 20px;
color: #777;
margin-top: 30px;
`
const Button = styled.button`
width: 150px;
padding: 10px 15px;
background-color: darkblue;
color: white;
border-radius: 20px;
margin-top: 20px;
cursor: pointer;
;
`

const Features = () => {
    return (
        <Container>
            <Left>
                <Image src={App} />
            </Left>
            <Right>
                <Title>
                    <b>Good </b> Design <br />
                    <b>Good </b> Business
                </Title>
                <SubTitle>We know that good design means good business.</SubTitle>
                <Desc>
                    We help our clients succeed by creating brand identities, digital
                    experiences, and print materials that communicate clearly, achieve
                    marketing goals, and look fantastic.
                </Desc>
                <Desc>
                    We care your business and guarantee you to achieve marketing goals.
                </Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Features
