import React from 'react'
import styled from 'styled-components'
import Search from '../img/search.png'

const Container = styled.div`
    width: 100px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.42);
   -webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.42);
   -moz-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.42);
    `
const Image = styled.img`
    width: 20px;
    `
const Text = styled.div`
    margin-top: 10px;
    text-align: center;
    `;

const MiniCard = () => {

    return (
            <Container>
                <Image src={Search} />
                <Text>
                    Lorem ipsum dolor sit amet consectetur.
                </Text>
            </Container>
    
    )
}

export default MiniCard
