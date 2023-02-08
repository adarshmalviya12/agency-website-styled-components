import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 50px;
`
const Wrapper = styled.div`
padding : 10px 20px ;
display: flex;
justify-content: space-between;
align-items: center;

`
const Left = styled.div`
width:60%;
display: flex;
align-items: center;
justify-content: space-between;
`
const Logo = styled.h1`
font-weight: bold;
text-decoration: underline crimson;
`
const Menu = styled.ul`
display: flex;
list-style: none;
`
const MenuItems = styled.li`
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: gray;

`
const Button = styled.button`
border: 2px solid white;
border-radius:10px;
padding: 10px 20px;
background-color: crimson;
color: white;
font-weight: bold;
cursor: pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        Logo
                    </Logo>
                    <Menu>
                        <MenuItems>Home</MenuItems>
                        <MenuItems>Feature</MenuItems>
                        <MenuItems>Services</MenuItems>
                        <MenuItems>Pricing</MenuItems>
                        <MenuItems>Contact</MenuItems>
                    </Menu>
                </Left>
                <Button>
                    Join today
                </Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar
