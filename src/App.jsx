import { useAudio } from "rooks";
import {useState} from "react";
import styled, {createGlobalStyle, keyframes} from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        background: radial-gradient(circle at 10% 20%, rgb(253, 193, 104) 0%, rgb(251, 128, 128) 90%) no-repeat fixed;
`;

const StyledHeading = styled.h1`
    margin: 0 auto;
    padding: 3%;
    font-size: 40px;
    font-family: "Lucida Console", "Courier New", monospace;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const StyledSongButton = styled.button`
    display: flex;
    height: 10vh;
    justify-content: center;
    align-items: center;
    width: 60%;
    text-align: center;
    margin: 0 auto;
    padding: 1.2%;
    font-weight: bold;
    border-radius: 15px;
    background:  #f6e4ad;
    font-size: 20px;
    font-family: "Lucida Console", "Courier New", monospace;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
`;

const StyledButton = styled.button`
    display: inline-block;
    justify-content: space-between;
    align-items: center;
    width: 22%;
    text-align: center;
    margin: 0 20px 20px 20px;
    padding: 0.8%;
    font-size: 20px;
    font-weight: bold;
    border-radius: 15px;
    background:  #f6e4ad;
    font-family: "Lucida Console", "Courier New", monospace;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
`;

const StyledContainer = styled.div`
    display: inline-block;
    margin: 0 auto;
    justify-content: center;
    vertical-align: middle;
    
`;

const StyledButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;

`;

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Subtitle = styled.h3`
    display: inline-block;
    justify-content: center;
    vertical-align: middle;
    margin-right: 8px;
    font-family: "Lucida Console", "Courier New", monospace;

`;

const StyledImg = styled.img`
    display: inline-block;
    justify-content: center;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    margin-top: 5px;
    animation: ${Spin} infinite 20s linear;
`;

export default function App() {
    const [song, setSong] = useState("");
    const [title, setTitle] = useState("");
    const [{ isPlaying, isMuted }, audioRef] = useAudio({ autoPlay: false });

    const handlePlay = () => audioRef.current.play();
    const handlePause = () => audioRef.current.pause();
    const handleToggleMute = () => {
        audioRef.current.muted = !audioRef.current.muted;
        setMuted(audioRef.current.muted);
    };

    const [muted, setMuted] = useState(isMuted);

    function firstSong() {
        setSong("./mitski-i-dont-smoke.mp3");
        setTitle("I Don`t Smoke by Mitski");
    }

    function secondSong() {
        setSong("./pinegrove-angelina.mp3");
        setTitle("Angelina by Pinegrove");
    }

    function thirdSong() {
        setSong("./tv-girl-taking-whats-not-yours.mp3");
        setTitle("Taking What`s Not Yours by TV Girl");
    }

  return (
      <>
          <GlobalStyle/>
          <audio ref={audioRef} src={song}/>

          <StyledDiv>

              <StyledHeading>useAudio React Hook Music Demo</StyledHeading>

              <StyledSongButton onClick={firstSong}>Mitksi - I Don`t Smoke</StyledSongButton>

              <br/> <br/>

              <StyledSongButton onClick={secondSong}>Pinegrove - Angelina</StyledSongButton>

              <br/> <br/>

              <StyledSongButton onClick={thirdSong}>TV Girl - Taking What`s Not Yours</StyledSongButton>

              <br/> <br/>

              <StyledContainer>

              <Subtitle>Now Playing: {title}</Subtitle>
                  {song && <StyledImg src={"/record-emoji.png"} alt={"Vinyl Emoji"}/>}

              </StyledContainer>

              <br/><br/>



          </StyledDiv>
          <StyledButtonDiv>

              <StyledButton onClick={handlePlay}>Play</StyledButton>
              <StyledButton onClick={handlePause}>Pause</StyledButton>
              <StyledButton onClick={handleToggleMute}>{muted ? "Unmute" : "Mute"}</StyledButton>

          </StyledButtonDiv>
      </>
  )
}

