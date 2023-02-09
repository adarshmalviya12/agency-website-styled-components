import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height: 10%;
background-color: crimson;
color: lightgray;
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;

`
const List = styled.ul`
display: flex;
list-style: none;
padding: 0;
margin: 0;
`
const ListItem = styled.li`
margin-right: 20px;
`
const Copyright = styled.span`
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Lama Dev Ⓒ</Copyright>
      </Wrapper>
    </Container>
  )
}

export default Footer
