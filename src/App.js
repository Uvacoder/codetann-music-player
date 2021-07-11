import React from "react";
import styled from "styled-components";
import { color } from "./styles/theme";
// components
import Menu from "./components/Menu/Menu";
// hooks
import useWidth from "./hooks/useWidth";

function App() {
  const width = useWidth();

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
