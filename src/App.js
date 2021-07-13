import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { useAppContext } from "./context/Provider";

import { color } from "./styles/theme";
import { songs } from "./db/songs";
// components
import Menu from "./components/Menu/Menu";
// hooks
import usePlayer from "./hooks/usePlayer";

function App() {
  return (
    <Application>
      <Menu />
      {/* <audio ref={audioRef} src={nowPlaying.url} /> */}
    </Application>
  );
}

export default App;

const Application = styled.div`
  width: 100%;
  height: 100vh;
  background: ${color.bg};
`;
