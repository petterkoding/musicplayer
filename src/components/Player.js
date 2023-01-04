import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faBackwardStep, faForwardStep} from  '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function Player({isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, currentSong, setCurrentSong, songs, skipTrackHandler}) {
    
    const playSongHandler = () => {
        // play the song
        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        } else{
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    // format time
    const formatTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    // drag input
    const dragHandler = (e) => {
        // controlled input
        // make it draggable by updating state
        setSongInfo({...songInfo, currentTime: e.target.value})

        // update audio to know where its skipped to
        audioRef.current.currentTime = e.target.value
    }

  return (
    <Container>
        <TimeController>
            <TimeStamps>{formatTime(songInfo.currentTime)}</TimeStamps>
            <Input 
                min={0}
                max={songInfo.duration}
                value={songInfo.currentTime}
                type="range"
                onChange={dragHandler}
            />
            <TimeStamps>{formatTime(songInfo.duration)}</TimeStamps>
        </TimeController>

        <PlayController className="play-control">
            <FontAwesomeIcon icon={faBackwardStep} onClick={()=> skipTrackHandler("back")}/>
            <FontAwesomeIcon onClick={playSongHandler} icon={isPlaying ? faPause : faPlay} />
            <FontAwesomeIcon icon={faForwardStep} onClick={()=> skipTrackHandler("forward")}/>
        </PlayController>

    </Container>
  )
}

export default Player


const Container = styled.div`
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const TimeController = styled.div`
    width: 40rem;
    background: #fff;
    border-radius: 30px;
    display: flex;
    margin-bottom: 1rem;

    @media (max-width: 680px){
        width: 90%;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 1rem 0rem;

    &:hover{
        cursor: pointer;
    }
`;

const TimeStamps = styled.span`
    padding: 1rem;
    color: slategray;
    font-size: 0.8rem;
`;

const PlayController = styled.div`
    width: 40rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    gap: 1rem;

    svg{
        font-size: 2rem;
        color: rgba(0,0,0,0.8);
        background: rgba(255,255,255, 0.9);
        padding: 1.5rem;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        transition: all 0.2s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 3px 4px 8px #62B0B5;

        &:hover{
            cursor: pointer;
            background: rgba(255,255,255, 1);
            color: rgba(0,0,0, 1);
        }

        &:nth-of-type(2){
        height: 35px;
        width: 35px;
        padding: 2rem;
        }
    }

    @media (max-width: 680px){
        width: 100%;
    }
  
`;
