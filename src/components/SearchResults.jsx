import React from 'react'
import { AiFillClockCircle } from "react-icons/ai";
import { reducerCases } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider';
import styled from 'styled-components';
function SearchResults({searchDetails}) {
  console.log(searchDetails)
    const [{}, dispatch] = useStateProvider();
    const playTrack =( 
      id,
      name,
      // artists,
      // image,
      // duration_ms,
      uri,
      track_number
      )=>{
        const selectedUri = uri;
          dispatch({type:reducerCases.SET_SELECTED_URI,selectedUri})
          
    }
      const msToMinutesAndSeconds = (ms) => {
        var minutes = Math.floor(ms / 60000);
        var seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      };
  return (
    <Container>
     
      <>
        <div className="playlist">
          </div>
          <div className="list">
            <div className="header-row">
              <div className="col">
                <span>#</span>
              </div>
              <div className="col">
                <span>TITLE</span>
              </div>
              <div className="col">
                <span>ALBUM</span>
              </div>
              <div className="col">
                <span>
                  <AiFillClockCircle />
                </span>
              </div>
            </div>
            <div className="tracks">
              {searchDetails.map(
                (
                  {
                    id,
                    name,
                    artists,
                    // image,
                    duration_ms,
                    // album,
                    uri,
                    track_number,
                  },
                  index
                ) => {
                  return (
                    <div
                      className="row"
                      key={id}
                      onClick={() =>
                        playTrack(
                          id,
                          name,
                          // artists,
                          // images,
                          // duration_ms,
                          uri,
                          // track_number
                        )
                      }
                    >
                      <div className="col">
                        <span>{index + 1}</span>
                      </div>
                      <div className="col detail">
                        <div className="image">
                          {/* <img src={image} alt="track" /> */}
                        </div>
                        <div className="info">
                          <span className="name">{name}</span>
                          {/* <span>{item.artists}</span> */}
                        </div>
                      </div>
                      <div className="col">
                        <span>{artists[0].name }</span>
                      </div>
                      <div className="col">
                        <span>{msToMinutesAndSeconds(duration_ms)}</span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
      </>
       
    </Container>
  )
}

export default SearchResults

const Container = styled.div`
.list {
    .header-row {
      display: grid;
      grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
      margin: 1rem 0 0 0;
      color: #dddcdc;
      position: sticky;
      top: 15vh;
      padding: 1rem 3rem;
      transition: 0.3s ease-in-out;
      background-color: ${({ headerBackground }) =>
        headerBackground ? "#000000dc" : "none"};
    }
    .tracks {
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;
      .row {
        padding: 0.5rem 1rem;
        display: grid;
        grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;
        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        .col {
          display: flex;
          align-items: center;
          color: #dddcdc;
          img {
            // cursor:pointer
            height: 40px;
            width: 40px;
          }
        }
        .detail {
          display: flex;
          gap: 1rem;
          .info {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`;