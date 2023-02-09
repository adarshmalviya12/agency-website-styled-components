import React from 'react'
import Navbar from './components/Navbar'
import styled, { css } from 'styled-components'
import Intro from './components/Intro'
import Features from './components/Features'
import Services from './components/Services'
import Price from './components/Price'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Container = styled.div`
height: 100vh;
overflow: hidden;
position: relative;
`
const shape = css`
 width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const IntroShape = styled.div`
 ${shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
 background-color: crimson;
`;

const FeatureShape = styled.div`
 ${shape}
  clip-path: polygon(0 0%,55% 0%, 33% 100%, 0% 100%);
 background-color: pink;
`;
const ServiceShape = styled.div`
 ${shape}
  clip-path: polygon(0 0%,33% 0%, 33% 100%, 0% 100%);
 background-color: #f88497;
`;
const PriceShape = styled.div`
 ${shape}
  clip-path: polygon(33% 0%,100% 0%, 100% 100%, 67% 100%);
 background-color: crimson;
`;

function App() {
    return (
        <>
            <Container>
                <Navbar />
                <Intro />
                <IntroShape />
            </Container>
            <Container>
                <Features />
                <FeatureShape />
            </Container>
            <Container>
                <Services />
                <ServiceShape />
            </Container>
            <Container>
                <Price />
                <PriceShape />
            </Container>
            <Container>
                <Contact />
                <Footer />
            </Container>
        </>
    )
}

export default App
