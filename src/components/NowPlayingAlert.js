import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCompactDisc} from  '@fortawesome/free-solid-svg-icons';
import styled, {keyframes} from "styled-components"

function NowPlayingAlert({currentSong, alertNextSong}) {
  return (
    <AlertBox className={alertNextSong ? "displayNextSong" : ""}>
        <Icon icon={faCompactDisc}/>
        <AlertSpan>Next song</AlertSpan>
        <Song>{currentSong.name}</Song>
        <Artist>{currentSong.artist}</Artist>
    </AlertBox>
  )
}

export default NowPlayingAlert


const AlertBox = styled.div`
    position: absolute;
    left: 50%;
    top: -100px;
    border: 1px solid #D36A62;
    border-radius: 10px;
    padding: 0.2rem 0.7rem;
    transform: translateX(-50%);
    z-index: 100;
    background: #0E0E0E;
    transition: top 2s ease-in;

    &.displayNextSong{
        top: 15px;
        transition: top 3s ease-out;
    }

`;

const AlertSpan = styled.span`
    font-size: 0.7rem;
    color: white;
    display: block;
    text-align: left;
`;

const Song = styled.span`
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    display: block;
    padding: 0.2rem 0;
    color: #D6E8E0;
`;


const Artist = styled.span`
    font-size: 0.9rem;
    font-weight: 400;
    display: block;
    text-align: center;
    color: #D6E8E0;
`;

const spinningAnimation = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 1.4rem;
    color: #D36A62;
    position: absolute;
    top: 3px;
    right: 3px;
    animation-name: ${spinningAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;

