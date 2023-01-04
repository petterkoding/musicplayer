import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

function Menu({isOpen, setIsOpen}) {
  return (
    <Nav >
        <Logo>Wavy Lofi</Logo>
        <Button onClick={()=> setIsOpen(!isOpen)} $active={isOpen}>
            Library
            <FontAwesomeIcon icon={faMusic}/>
        </Button>
    </Nav>
  )
}

export default Menu


const Nav = styled.nav`
    display: flex;
    width: 100%;
    height: 8vh;
    align-items: center;
    justify-content: space-around;
    color: white;
    margin-bottom: 2rem;
`;

const Logo = styled.h1`
    font-family: 'Space Mono', monospace;
    font-size: 3rem;
    color: #D4E8EF;
    color: #000;
    position: relative;
    z-index: 10;
    word-spacing: -30px;
    letter-spacing: 2px;

    &:after{
        position: absolute;
        content:"WavyLofi";
        left: 1px;
        top: 3px;
        color: #D76662;
        z-index: -1;
        letter-spacing: 2px;
    }
`; 

const Button = styled.button`
    border: none;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 7px;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    background: ${props => props.$active ? "black" : "transparent" };
    color: ${props => props.$active ? "white" : "black" };
    position: relative;
    z-index: 999999;

    &:hover{
        background: black;
        color: white;
        border: 1px solid white;
    }
    
`;