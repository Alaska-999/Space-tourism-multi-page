import React from 'react';
import styled from "styled-components";
import bg from "/assets/crew/background-crew-desktop.jpg"
import {Description, Num} from "../../styles/global";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination, A11y} from 'swiper';
import photo1 from '/assets/crew/image-anousheh-ansari.png'
import photo2 from '/assets/crew/image-douglas-hurley.png'
import photo3 from '/assets/crew/image-mark-shuttleworth.png'
import photo4 from '/assets/crew/image-victor-glover.png'
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const Crew = () => {

    SwiperCore.use([Autoplay, Pagination]);

    const data = [
        {
            position: 'Commander',
            name: 'Douglas Hurley',
            description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
            img: photo2
        },
        {
            position: 'Mission Specialist ',
            name: 'MARK SHUTTLEWORTH',
            description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
            img: photo3
        },
        {
            position: 'PILOT',
            name: 'Victor Glover',
            description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
            img: photo4
        },
        {
            position: 'Flight Engineer',
            name: 'Anousheh Ansari',
            description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
            img: photo1
        },

    ]

    return (
        <Background>
            <Container>
                <Heading><Num>02</Num>Meet your crew</Heading>
                        <MySwiper
                            effect={"fade"}
                            speed={400}
                            loop={true}
                            autoplay={{delay: 5000, disableOnInteraction: false}}
                            pagination={{clickable: true}}
                            modules={[Navigation, Pagination, Autoplay, EffectFade, A11y]}
                        >
                            {data.map(i => (
                                    <SwiperSlideStyles>
                                            <Position>{i.position}</Position>
                                            <Commander>{i.name}</Commander>
                                            <Description>{i.description}</Description>
                                        <Photo src={i.img}/>
                                    </SwiperSlideStyles>
                                )
                            )}
                        </MySwiper>
            </Container>
        </Background>
    );
};


const MySwiper = styled(Swiper)`
  width: 100%;
  height: 90vh;
  
  .swiper-pagination {
    position: relative;
    top: -100px;
  }

  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background-color: white;
    position: relative;
    right: 460px;
    transition: opacity 0.2s;
    
    :hover {
      opacity: 50%;
    }
  }

  .swiper-pagination-bullet + .swiper-pagination-bullet {
    margin-left: 24px;
  }
  .swiper-slide-active{
    opacity: 1!important;
  }
`;

const SwiperSlideStyles = styled(SwiperSlide)`
  padding-top: 150px;
  opacity: 0!important;
  transition: opacity 1s ease-out;
`

const Background = styled.div`
  width: 100%;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  color: var(--white);
  font-weight: 400;
`

 const Container = styled.div`
  max-width: 1250px;
  padding: 210px 10px 0 40px;
  margin: 0 auto;
`

const Heading = styled.h5`
`

const Position = styled.h4`
  text-transform: uppercase;
  margin-bottom: 15px;
  opacity: 0.5;
`

const Commander = styled.h3`
  text-transform: uppercase;
  margin-bottom: 27px;
`

const Photo = styled.img`
  height: 650px;
  width: fit-content;
  position: absolute;
  right: 0;
  bottom: 0;
`

export default Crew;