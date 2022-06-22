import React from 'react'
import styled from 'styled-components';
function Login() {
    const handleClick = () => {
        const clientId= "cbb279f49e1843dfa4ae223a53a0e8fe"; 
        const redirectUrl = "http://localhost:3000/"
        const apiUrl = "https://accounts.spotify.com/authorize"; 
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
          ];
        window.location.href=  `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`
    }
    return (
        <Container>
            <img src="/Spotify_Logo_RGB_Green.png" alt="spotify-logo" />
            <button onClick={handleClick}>Connect Spotify</button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color:black ;
    gap: 5rem;

    img {
    height: 20vh;
    }
    
    button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: #1db954;
    color: #black;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
    }
`;

export default Login