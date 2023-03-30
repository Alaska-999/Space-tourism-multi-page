import React, {FC} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import logo from '/assets/shared/logo.svg'

const Header: FC = () => {
    return (
        <HeaderContainer>
            <Logo/>
            <Line/>
            <NavBar>
                <Nav to='/'>
                    <NavNum>00</NavNum>
                    HOME
                </Nav>
                <Nav to='/dest'>
                    <NavNum>01</NavNum>
                    DESTINATION
                </Nav>
                <Nav to='/crew'>
                    <NavNum>02</NavNum>
                    CREW
                </Nav>
                <Nav to='/tech'>
                    <NavNum>03</NavNum>
                    TECHNOLOGY
                </Nav>

            </NavBar>

        </HeaderContainer>
    );
};


const HeaderContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  display: flex;
  align-items: center;
`

const Logo = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${logo});
  background-repeat: no-repeat;

`

const Line = styled.div`
  height: 1px;
  background-color: #979797;
  width: 473px;
  margin-left: 40px;
  position: relative;
  left: 24px;
  z-index: 10;
`

const NavBar = styled.nav`
  padding: 0 125px;
  height: 96px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(80px);
`

const Nav = styled(NavLink).attrs({
    activeClassName: 'active'
})`
  padding: 39px 0;

  font-family: 'BarlowCondensed', sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 2.7px;
  line-height: 19px;
  text-decoration: none;
  color: var(--white);
  margin-left: 48px;
  border-bottom:  3px solid transparent;
  transition: all 0.2s linear;

  :hover {
    border-color: rgba(255, 255, 255, 0.5);

  }

  &.active {
    border-bottom-color: var(--white);
  }
`

const NavNum = styled.span`
  font-weight: bold;
  margin-right: 10px;
`

export default Header;