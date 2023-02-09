import React from 'react';
import styled from 'styled-components';
import Map from '../img/map.png'
import Phone from '../img/phone.png'
import Send from '../img/send.png'

const Container = styled.div`
 height: 90%;
 background: url("https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80");
`
const Wrapper = styled.div` 
height: 100%;
padding: 20px;
display: flex;
justify-content: center;
align-items: center;
`;
const FormContainer = styled.div`
width: 50%;
`;
const Title = styled.h1`
margin: 0 50px 50px 50px;
padding-left: 50px;
`;
const Form = styled.form`
height: 250px;
display: flex;
align-items: center;
justify-content: center;
`
const LeftForm = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-right: 20px;

`;
const RightForm = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const Input = styled.input`
width: 200px;
padding: 20px;
`;
const TextArea = styled.textarea`
width: 200px;
height: 60%;
padding: 20px;
`;
const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
`;

const AddressContainer = styled.div`
width: 50%;
flex-direction: column;
align-items: center;
`;

const AddressItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 50px;
`
const Icon = styled.img`
width: 20px;
margin-right: 20px;
`
const Text = styled.span`
font-size: 20px;
margin-right: 15px;
`

const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title> Questions? <br /> Lets get in touch </Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder='your name' ></Input>
                            <Input placeholder='your email' ></Input>
                            <Input placeholder='subject' ></Input>
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder='your massage' />
                            <Button>Send</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon src={Map} />
                        <Text>123 Park Avenue St., New York, USA</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={Phone} />
                        <Text>+1 631 1234 5678</Text>
                        <Text>+1 326 1234 5678</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={Send} />
                        <Text>contact@lama.dev</Text>
                        <Text>sales@lama.dev</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    )
}

export default Contact
