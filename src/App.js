import React, {useState, useRef} from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import chillhop from "./data";
import Library from "./components/library/Library";
import GlobalStyle from "./styles/globalStyle"
import Menu from "./components/menu/Menu";
import NowPlayingAlert from "./components/NowPlayingAlert";

function App() {

  // ref
  const audioRef = useRef(null)
// state
  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [alertNextSong, setAlertNextSong] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // timestamps state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
})

 // updating timestamps state
 const timeUpdateHandler = (e) => {
  const current = e.target.currentTime
  const duration = e.target.duration || 0
  setSongInfo({...songInfo, currentTime: current, duration})
}

// show next song alertbox
const showNextSong = () => {
  setAlertNextSong(true)
  setTimeout(()=> {setAlertNextSong(false)}, 6000)
}


const skipTrackHandler = async (direction) => {
  let currentTrackIndex = songs.findIndex((song) => song.id === currentSong.id);
  if(direction === "forward"){
      await setCurrentSong(songs[(currentTrackIndex + 1) % songs.length])
     
  }
  if(direction === "back"){
      if((currentTrackIndex - 1) % songs.length === -1 ){
          await setCurrentSong(songs[songs.length - 1])
          if(isPlaying) audioRef.current.play();
          
          // return to stop code here so it doesnt go to index -1
          return;
      }
      setCurrentSong(songs[(currentTrackIndex - 1) % songs.length])
  }
  if(isPlaying) audioRef.current.play();
}

const onSongEndHandler = () => {
  // wait abit before executing function so the next song doesnt start abruptly
  setTimeout(()=> {skipTrackHandler("forward")}, 1000)
  showNextSong();
}


  return (
    <>
      <GlobalStyle/>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
      <main>
        <Song currentSong={currentSong}/>
        <Player
          songs={songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
          setCurrentSong={setCurrentSong}
          skipTrackHandler={skipTrackHandler}/>

        <Library
          songs={songs}
          setSongs={setSongs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong} 
          audioRef={audioRef}
          isPlaying={isPlaying}
          isOpen={isOpen}/>
        <audio
          onTimeUpdate={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
          onLoadedMetadata={timeUpdateHandler}
          onEnded={onSongEndHandler}  
        >
        </audio>
        <NowPlayingAlert alertNextSong={alertNextSong} currentSong={currentSong}/>
      </main>
    </>
  );
}

export default App;
