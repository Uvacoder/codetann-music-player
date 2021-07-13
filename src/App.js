import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { color } from "./styles/theme";
import { songs } from "./db/songs";
// components
import Menu from "./components/Menu/Menu";

/**
 * <App />
 * - App.js is the main component for the application
 * - Desktop: both <Player /> and <Menu /> will be visible
 * - Mobile: only <Player /> or <Menu /> will be visible at one time
 */
function App() {
  return (
    <Application>
      <Menu />
    </Application>
  );
}

export default App;

const Application = styled.div`
  width: 100%;
  height: 100vh;
  background: ${color.bg};
`;
