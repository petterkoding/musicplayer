import React from 'react';
import styled from 'styled-components';

function Song({currentSong}) {

  return (
    <Container>
        <ImageWrapper>
            <CoverImage src={currentSong.cover} alt={`${currentSong.album} album cover`}/>
        </ImageWrapper>
        <NowPlaying>Now playing</NowPlaying>
        <SongName>{currentSong.name}</SongName>
        <Artist>{currentSong.artist}</Artist>
    </Container>
  )
}

export default Song


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
`;

const ImageWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    margin-bottom: 2rem;
    border: 1px solid #478E96;
    padding: 10px;
    border-radius: 10px;

    @media (max-width: 680px){
        width: 90%;
    }
`;

const CoverImage = styled.img`
    width: 100%;
    display: block;
`;

const NowPlaying = styled.span`
    color: grey;
    font-size: 0.8rem;
`;

const SongName = styled.h2`
    font-size: 1.6rem;
    color: #D76662;

`;

const Artist = styled.h3`
    font-size: 1.4rem;
    color: black;
    margin: 1rem 0;
`;

