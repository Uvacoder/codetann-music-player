import { useState, useRef, useEffect, useContext, createContext } from "react";
import { songs } from "../db/songs";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export default function Provider({ children }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const nowPlaying = songs[index];
  const audioRef = useRef(null);

  useEffect(() => {
    play();
  }, [index]);

  // audio controlls
  const skip = () => {
    try {
      setIndex((prevState) => (prevState += 1));
    } catch {
      setIndex(0);
    }
  };

  const selectSong = (id) => {
    const i = songs.findIndex((song) => song.id === id);
    setIndex(i);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };
  const play = async () => {
    await audioRef.current.play();
    setPlaying(true);
  };
  const handlePlayPause = () => {
    if (playing) {
      pause();
      setPlaying(false);
    } else {
      play();
      setPlaying(true);
    }
  };

  const VALUE = {
    nowPlaying,
    skip,
    selectSong,
    handlePlayPause,
    playing,
  };

  return (
    <AppContext.Provider value={VALUE}>
      <>
        {children}
        <audio src={nowPlaying.url} ref={audioRef} />
      </>
    </AppContext.Provider>
  );
}
