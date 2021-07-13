import { useState, useRef } from "react";

export default function usePlayer(songs, audioRef) {
  // initial state is set to the first song
  const [index, setIndex] = useState(0);
  const nowPlaying = songs[index];

  const skip = () => {
    try {
      setIndex((prevState) => (prevState += 1));
    } catch {
      setIndex(0);
    }
  };

  const pause = () => audioRef.current.pause();
  const play = () => audioRef.current.play();

  const Player = ({ ref }) => <audio ref={ref} src={nowPlaying.url} />;

  return { nowPlaying, skip, pause, play, Player };
}
