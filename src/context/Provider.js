import { useState, useRef, useEffect, useContext, createContext } from "react";
import { songs } from "../db/songs";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

/**
 * <Provider />
 * - Provider is exported and should only be used in index.js
 * - The audio tag responsible for playing the song is located in the return statement
 * - Functions proceeded by _ should only be used with in the context of the provider function (DO NO EXPOSE TO APP)
 */
export default function Provider({ children }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const nowPlaying = songs[index];
  const audioRef = useRef(null);

  // plays a new song anytime the song index is updated
  useEffect(() => {
    _play();
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

  const _pause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };
  const _play = async () => {
    await audioRef.current.play();
    setPlaying(true);
  };
  const handlePlayPause = () => {
    if (playing) {
      _pause();
      setPlaying(false);
    } else {
      _play();
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
