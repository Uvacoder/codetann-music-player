import React from "react";
import styled from "styled-components";
import Song from "./Song";
import { color, text } from "../../styles/theme";
import { songs } from "../../db/songs";

export default function Menu() {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <ActiveTab>Songs</ActiveTab>
        <Tab>Favorite</Tab>
      </Header>

      {/* Songs Section */}
      <Songs>
        {songs.map((song) => (
          <Song
            key={song.id}
            id={song.id}
            img={song.img}
            title={song.title}
            artist={song.artist}
          />
        ))}
      </Songs>
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
  padding: 1.5rem;
  background: ${color.alt};
`;

// - header elements
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
`;
const ActiveTab = styled.p`
  color: ${color.text};
  font-size: ${text.lg};
  margin-right: 1rem;
`;
const Tab = styled.p`
  color: ${color.mediumText};
  font-size: ${text.md};
`;

// - song elements
const Songs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
