import React, {useState} from 'react';
import styled from "styled-components";
import bg from '/assets/destination/background-destination-desktop.jpg'
import moon from '/assets/destination/image-moon.png'
import mars from '/assets/destination/image-mars.png'
import europa from '/assets/destination/image-europa.png'
import titan from '/assets/destination/image-titan.png'
import {Container, Content, Description, H7, Info, Num} from "../../styles/global";


const Destination = () => {

    interface TabsItem {
        title: string;
        content: string;
        distance: string;
        travelTime: string;
        imgUrl: string
    }

    const [activeIndex, setIndex] = useState(0)

    const tabsContent: TabsItem[] = [
        {
            title: 'Moon',
            content: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            distance: '384,400 km',
            travelTime: '3 days',
            imgUrl: moon
        },
        {
            title: 'MARS',
            content: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! don’t forget to take a good sunscreen because the days are radiant.',
            distance: '225 mil. km',
            travelTime: '9 months',
            imgUrl: mars
        },
        {
            title: 'EUROPA',
            content: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
            distance: '628 mil. km',
            travelTime: '3 years',
            imgUrl: europa
        },
        {
            title: 'TITAN',
            content: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            distance: '1.6 bil. km',
            travelTime: '3 years',
            imgUrl: titan
        },
    ]

    const setIndexHandler = (index: number) => {
        setIndex(index)
    }

    return (
        <Background>
            <Container>
                <Heading><Num>01</Num>Pick your destination</Heading>
                <Content>
                    <Planet src={tabsContent[activeIndex].imgUrl}/>
                    <Info>
                        <Tabs>
                            <ButtonTab active={activeIndex === 0} onClick={() => setIndexHandler(0)}>MOON</ButtonTab>
                            <ButtonTab active={activeIndex === 1} onClick={() => setIndexHandler(1)}>MARS</ButtonTab>
                            <ButtonTab active={activeIndex === 2} onClick={() => setIndexHandler(2)}>EUROPA</ButtonTab>
                            <ButtonTab active={activeIndex === 3} onClick={() => setIndexHandler(3)}>TITAN</ButtonTab>
                        </Tabs>
                        <PlanetName>{tabsContent[activeIndex].title}</PlanetName>
                        <Description>{tabsContent[activeIndex].content}</Description>
                        <Line/>
                        <Numbers>
                            <Dist>
                                <Title><H7>AVG. DISTANCE</H7></Title>
                                {tabsContent[activeIndex].distance}
                            </Dist>
                            <Time>
                                <Title><H7>Est. travel time</H7></Title>
                                {tabsContent[activeIndex].travelTime}
                            </Time>
                        </Numbers>
                    </Info>
                </Content>
            </Container>
        </Background>
    );
};

const Background = styled.div`
  width: 100%;
  background-image: url(${bg});
  background-position: top;
  background-size: cover;
  color: var(--white);
  font-weight: 400;
`

const Heading = styled.h5`
  margin-bottom: 64px;
`

const Planet = styled.img`
  width: 445px;
  height: 445px;
  margin-top: 30px;
`

const Tabs = styled.div`
  display: flex;
  margin-bottom: 37px;
`

interface TabButtonType {
    active: boolean;
}

const ButtonTab = styled.button<TabButtonType>`
  font-size: 16px;
  letter-spacing: 2.7px;
  font-family: 'BarlowCondensed', sans-serif;
  outline: none;
  background: transparent;
  color: var(--light-blue);
  border: none;
  margin-right: 35px;
  border-bottom: 3px solid transparent;
  transition: all 0.2s linear;

  :hover {
    border-color: rgba(255, 255, 255, 0.5);
  }

  & {
    ${(props) => props.active ?
            ` border-bottom-color: var(--white);
            color: var(--white)   
            ` : ''
    }
  }
`

const PlanetName = styled.h2`
  text-transform: uppercase;
  margin-bottom: 14px;
`

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #383B4B;
  margin: 54px 0 28px;
`

const Numbers = styled.div`
  display: flex;
  text-transform: uppercase;

`

const Dist = styled.h6`
  margin-right: 79px;
`

const Time = styled.h6`
`

const Title = styled.div`
  color: var(--light-blue);
  font-size: 14px;
  margin-bottom: 12px;
`


export default Destination;