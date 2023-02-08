import React from 'react'
import styled from 'styled-components'
import App from '../img/app.png'

const Container = styled.div` 
display: flex;
`
const Left = styled.div` 
width:50%;

`
const Image = styled.img` 
width: 80%;
`
const Right = styled.div` 
width: 50%;
`
const Features = () => {
    return (
        <Container>
            <Right>
                <Image src={App} />
            </Right>
            <Left>

            </Left>
        </Container>
    )
}

export default Features
