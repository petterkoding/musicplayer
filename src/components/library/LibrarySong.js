import React from 'react';
import styled from 'styled-components';

function LibrarySong({song, setCurrentSong, currentSong, songs, setSongs, audioRef, isPlaying}) {

    const songSelectHandler = async () => {
        await setCurrentSong(song)
        // auto play audio if playing is true
        if(isPlaying) audioRef.current.play();
    }
  

  return (
    <Container onClick={songSelectHandler} className={`${song.id === currentSong.id ? "selected" : ""}`}>
        <ImageWrapper>
            <CoverImage src={song.cover} alt={`${song.album} album cover`}/>
        </ImageWrapper>
        <Details>
            <SongName>{song.name}</SongName>
            <Artist>{song.artist}</Artist>
        </Details>
    </Container>
  )
}

export default LibrarySong



const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    transition: all 0.25s ease;
    
    &.selected{
        background: #DBECE3;
        border-radius: 12px;
    }

    &:hover{
        background: #DBECE3;
        cursor: pointer;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    max-width: 200px;
`;

const CoverImage = styled.img`
    width: 100%;
    max-width: 170px;
    max-height: 170px;
`;

const Details = styled.div`
    padding-left: 1rem;
`;

const SongName = styled.h3`
    font-size: 1rem;
    color: blue;
    margin-bottom: 0.5rem;
    color: #0E0E0E;
    white-space: nowrap;

`;

const Artist = styled.h4`
    font-size: 0.8rem;
    color: #676C7C;
    white-space: nowrap;
`;

