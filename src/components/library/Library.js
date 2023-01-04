import React from 'react'
import LibrarySong from './LibrarySong';
import styled from 'styled-components';

function Library({songs, setSongs, currentSong, setCurrentSong, audioRef, isPlaying, isOpen}) {

  return (
    <Container className={isOpen ? "open" : ""}>
        <Heading>Library</Heading>
        <LibraryFlex>
          {songs.map(song => (
            <LibrarySong
              key={song.id}
              song={song}
              setSongs={setSongs}
              songs={songs}
              setCurrentSong={setCurrentSong}
              currentSong={currentSong}
              audioRef={audioRef}
              isPlaying={isPlaying}
            />
          ))}
        </LibraryFlex>
    </Container>
  )
}

export default Library

const Container = styled.div`
  position: fixed;
  top: 0;
  left: -110%;
  background: white;
  width: 25rem;
  overflow: scroll;
  height: 100%;
  z-index: 100;
  transition: left 2s ease-in-out;

  &.open{
    left: 0%;
    transition: left 0.8s ease;
  }

  @media (max-width: 680px){
    width: 100%;
  }
`;


const Heading = styled.h3`
  text-align: center;
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;


const LibraryFlex = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 0 1rem;

`;