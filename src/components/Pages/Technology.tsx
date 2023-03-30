import React, {useState} from 'react';
import styled from "styled-components";
import bg from "/assets/technology/background-technology-desktop.jpg";
import {Container, Content, Description, Info, Num} from "../../styles/global";
import launchVehiclePortrait from '/assets/technology/image-launch-vehicle-portrait.jpg'
import spaceCapsulePortrait from '/assets/technology/image-space-capsule-portrait.jpg'
import spaceportPortrait from '/assets/technology/image-spaceport-portrait.jpg'

const Technology = () => {

    const [activeIndex, setIndex] = useState(0)

    interface TabsItem {
        term: string;
        definition: string;
        img: string
    }

    const data: TabsItem[] = [
        {
            term: 'LAUNCH VEHICLE',
            definition: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from' +
                ' Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful' +
                ' in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
            img: launchVehiclePortrait
        },
        {
            term: 'SPACEPORT',
            definition: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport ' +
                'for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take' +
                ' advantage of the Earth’s rotation for launch.',
            img: spaceCapsulePortrait

        },
        {
            term: 'SPACE CAPSULE',
            definition: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the' +
                ' Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes' +
                ' a space gym, cinema, and plenty of other activities to keep you entertained.',
            img: spaceportPortrait

        }
    ]


    const setIndexHandler = (index: number) => {
        setIndex(index)
    }

    return (
        <Background>
            <Container>
                <Heading><Num>03</Num>SPACE LAUNCH 101</Heading>
                <Content>
                    <Controls>
                        <Tabs>
                            <Tab active={activeIndex === 0} onClick={() => setIndexHandler(0)}><h4>1</h4></Tab>
                            <Tab active={activeIndex === 1} onClick={() => setIndexHandler(1)}><h4>2</h4></Tab>
                            <Tab active={activeIndex === 2} onClick={() => setIndexHandler(2)}><h4>3</h4></Tab>
                        </Tabs>
                        <Info>
                            <Signature>THE TERMINOLOGY…</Signature>
                            <Term>{data[activeIndex].term}</Term>
                            <Description>{data[activeIndex].definition}</Description>
                        </Info>
                    </Controls>

                    <Image src={data[activeIndex].img}/>
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

const Heading = styled.h5`
  margin-bottom: 137px;
`

const Image = styled.img`
  width: 515px;
  height: 527px;
  position: absolute;
  right: 0;
  top: 270px;

`

const Controls = styled.div`
  display: flex;
  margin-bottom: 210px;
  height: 310px;
`

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 80px;
`

interface TabButtonType {
    active: boolean;
}

const Tab = styled.button<TabButtonType>`
  padding: 22px 34px;
  border-radius: 100%;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: var(--white);
  transition: all ease 0.2s;

  :hover {
    border: 1px solid var(--white);
  }

  & {
    ${(props) => props.active ?
            ` border-bottom-color: var(--white);
            background-color: var(--white) ;
            color: var(--black);  
            ` : ''
    }
`

const Signature = styled.div`
  font-size: 16px;
  letter-spacing: 2.7px;
  font-family: 'BarlowCondensed', sans-serif;
  color: var(--light-blue);
  margin-bottom: 11px;
`

const Term = styled.h3`
  margin-bottom: 17px;
`

export default Technology;