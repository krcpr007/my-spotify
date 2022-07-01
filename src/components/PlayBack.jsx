import axios from 'axios';
import React , {useEffect, useState} from 'react'; 
import SpotifyPlayer from 'react-spotify-web-playback';
import { useStateProvider } from '../utils/StateProvider';
function PlayBack() {
    const [{ token , selectedUri}] = useStateProvider();

    // console.log("selectedURI" ,currentPlaying)
    const [uri , setUri] = useState([]);
    //  const [play , setPlay] = useState(true); 
    useEffect(()=>{
         const  getLastPlayedTrack = async ()=>{
                   const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played',{
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                      },
                   })
                 
                //  i should store type also @important
                   setUri(response.data.items[0].context.uri);
                
           }
    getLastPlayedTrack();
    },[token])
    //@important i need to write logic to play music automatically 

  return (
    <SpotifyPlayer
    token={token}
    // uris={uri.length!==0? [uri]: []}
    uris={selectedUri?[selectedUri]:[uri]}
    magnifySliderOnHover
    showSaveIcon
    autoPlay={true}
    styles={{

        bgColor: '#181818',
        color: '#1db954',
        activeColor: '#1db954',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
        height:"14vh",
        loaderColor:"#1db954"
      }}
  />
  )
}

export default PlayBack