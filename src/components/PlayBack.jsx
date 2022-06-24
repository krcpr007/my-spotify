import axios from 'axios';
import React , {useEffect, useState} from 'react'; 
import SpotifyPlayer from 'react-spotify-web-playback';
import { useStateProvider } from '../utils/StateProvider';
function PlayBack() {
    const [{ token }] = useStateProvider();
    // const [uri , setUri] = useState("spotify:artist:7b6Ui7JVaBDEfZB9k6nHL0");
     const [id , setId] = useState(); 
    useEffect(()=>{
         const  getLastPlayedTrack = async ()=>{
                   const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played',{
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                      },
                   })
                //    console.log("recently track",response.data.items[0].track.artists[0].id)
               
                //    setUri(response.data.items[0].context.uri); 
                setId(response.data.items[0].track.artists[0].id)
                
           }
    getLastPlayedTrack();
    },[token])
  return (
    <SpotifyPlayer
    token={token}
    // uris={['spotify:artist:7b6Ui7JVaBDEfZB9k6nHL0']}
    uris={[`spotify:artist:${id}`]}
    // uris={`${uri}`}
    autoPlay={true}
    magnifySliderOnHover
    showSaveIcon
    styles={{
        activeColor: '#fff',
        bgColor: '#181818',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
      }}
  />
  )
}

export default PlayBack