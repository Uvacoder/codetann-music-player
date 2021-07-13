import React, { useState } from "react";
import styled from "styled-components";
// components
import Song from "./Song";
import MinPlayer from "../MinPlayer/MinPlayer";
// other imports
import { color, text } from "../../styles/theme";
import { songs } from "../../db/songs";
// context
import { useAppContext } from "../../context/Provider";

export default function Menu() {
  const [currentTab, setCurrentTab] = useState("Library");

  const changeTab = () => {
    if (currentTab === "Library") setCurrentTab("Favorites");
    if (currentTab === "Favorites") setCurrentTab("Library");
  };

  return (
    <Container>
      {/* Header Section */}
      <Header>
        {currentTab === "Library" && (
          <>
            <ActiveTab onClick={changeTab}>Library</ActiveTab>
            <Tab onClick={changeTab}>Favorites</Tab>
          </>
        )}
        {currentTab === "Favorites" && (
          <>
            <Tab onClick={changeTab}>Library</Tab>
            <ActiveTab onClick={changeTab}>Favorites</ActiveTab>
          </>
        )}
      </Header>

      {/* Songs Section */}
      <Songs>
        {currentTab === "Library" &&
          songs.map((song) => (
            <Song
              key={song.id}
              id={song.id}
              img={song.img}
              title={song.title}
              artist={song.artist}
            />
          ))}
      </Songs>
      <MinPlayer />
    </Container>
  );
}

/* Styled Components */
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background: ${color.alt};
`;

// - header elements
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`;
const ActiveTab = styled.p`
  color: ${color["100"]};
  font-size: 20px;

  margin-right: 2rem;
  cursor: pointer;
`;
const Tab = styled.p`
  color: ${color["300"]};
  font-size: ${text.md};
  margin-right: 2rem;
  cursor: pointer;
`;

// - song elements
const Songs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
