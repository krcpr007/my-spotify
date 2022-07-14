import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useStateProvider } from '../utils/StateProvider';
function PlayBack() {
  const [{ token, selectedUri }] = useStateProvider();

  const [uri, setUri] = useState([]);
  const [playerState, setPlayerState] = useState(false);

  // detect keypress
  useEffect(()=>{
    document.addEventListener('keydown', detectKeyPress, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // function to play or pause music whenever space key pressed
  const detectKeyPress=(e)=>{
    if(e.key===" "){
      setPlayerState(!playerState);
    }
  }
  
  useEffect(() => {
    const getLastPlayedTrack = async () => {
      const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      setUri(response.data.items[0].track.uri);
    }
    getLastPlayedTrack();
  }, [token])
  //@important i need to write logic to play music automatically when a searched music is clicked to play

  return (
    <SpotifyPlayer
      token={token}
      uris={selectedUri ? [selectedUri] : [uri]}
      magnifySliderOnHover
      showSaveIcon
      autoPlay={true}
      play={playerState}
      styles={{
      
        bgColor: '#181818',
        color: '#1db954',
        activeColor: '#1db954',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
        height: "14vh",
        loaderColor: "#1db954"
      }}
    />
  )
}

export default PlayBack