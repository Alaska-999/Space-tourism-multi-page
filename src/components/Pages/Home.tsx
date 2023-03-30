import React from 'react';
import styled from "styled-components";
import bg from '/assets/home/background-home-desktop.jpg'
import {Container, Description, Info} from "../../styles/global";


const Home = () => {
    return (
        <Background>
            <Container>
                <Content>
                    <Info>
                        <Heading>SO, YOU WANT TO TRAVEL TO</Heading>
                        <Heading2>SPACE</Heading2>
                        <Description>
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
                            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
                            truly out of this world experience!
                        </Description>
                    </Info>
                    <Circle><h4>Explore</h4></Circle>
                </Content>
            </Container>
        </Background>
    );
};

const Background = styled.div`
  width: 100%;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  color: var(--white);
  font-weight: 400;
`


const Content = styled.div`
  margin: 180px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`

const Heading = styled.h5`
  color: var(--light-blue);
  margin-bottom: 24px;
`

const Heading2 = styled.h1`
  margin-bottom: 24px;
`

const Circle = styled.div`
  width: 274px;
  height: 274px;
  background-color: var(--white);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--black);
  text-transform: uppercase;
`


export default Home;