# Welcome to useAudio!

This custom react hook allows you to control and manage audio elements
in a React application.

## Features
- **Multiple Buttons**: Allows you to pause, play, change, and mute the music.
- **Easy & Simple**: Requires minimal installation.

## Usage
To use the useAudio hook in your React component, simply import and call it as shown
in the following example:

```jsx
import { useAudio } from "rooks";

export default function App() {
    const audioSrc = "https://example.com/audio.mp3";
    const [{ isPlaying, isMuted }, audioRef] = useAudio({ autoPlay: false });

    const handlePlay = () => audioRef.current.play();
    const handlePause = () => audioRef.current.pause();
    const handleToggleMute = () => (audioRef.current.muted = !isMuted);

    return (
        <>
            <audio ref={audioRef} src={audioSrc} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleToggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
        </>
    );
}
```
Documentation: https://rooks.vercel.app/docs/useAudio

