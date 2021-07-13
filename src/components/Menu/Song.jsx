import React from "react";
import styled from "styled-components";
import { color, text } from "../../styles/theme";
import { useAppContext } from "../../context/Provider";

/**
 * <Song />
 * - img, title, artist, and id are passed down via props from <Menu />
 * - selectSong and nowPlaying functions are brought in via context
 * ---
 * TODO: add favorite button or options button
 */
export default function Song({ img, title, artist, id }) {
  const { selectSong, nowPlaying } = useAppContext();

  return (
    <Container
      nowPlaying={nowPlaying.id === id ? true : false}
      onClick={() => selectSong(id)}
    >
      <Artwork src={img} />
      <Info>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </Info>
    </Container>
  );
}

/* Styled Components */
const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  transition: all 0.2s;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0 1rem;
  background: ${(props) => (props.nowPlaying ? "#23232e" : "none")};

  &:hover {
    opacity: 0.8;
  }
`;

const Artwork = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 1rem;
  border-radius: 0.3rem;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Title = styled.p`
  color: ${color["200"]};
  font-size: ${text.md};
  margin-bottom: 0.5rem;
`;

const Artist = styled.p`
  color: ${color["300"]};
  font-size: ${text.sm};
`;
