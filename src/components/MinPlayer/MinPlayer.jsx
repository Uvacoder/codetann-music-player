import React from "react";
import styled from "styled-components";
import { color, text } from "../../styles/theme";
import { useAppContext } from "../../context/Provider";

/**
 * <MinPlayer />
 * - Only is shown on mobile devices.
 * - Brings in data and functions from context to allow playing and pausing of song
 * ---
 * TODO: add current song time
 * TODO: ? add skip function
 * TODO: ? add bar that shows current progress
 *
 */
export default function MinPlayer() {
  const { playing, handlePlayPause, nowPlaying } = useAppContext();

  return (
    <Container>
      <PlayBtn
        className={playing ? "fas fa-pause" : "fas fa-play"}
        onClick={handlePlayPause}
      />
      <Info>
        <Title>{nowPlaying.title}</Title>
        <Artist>{nowPlaying.artist}</Artist>
      </Info>
      <Time>2: 32</Time>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;

  padding: 2rem;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${color.ali};

  border-top: 1px solid ${color[300]};
`;

const PlayBtn = styled.button`
  min-width: 3.5rem;
  min-height: 3.5rem;
  border: 1px solid ${color[300]};
  background: none;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
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

const Time = styled.p`
  width: 4rem;
  color: ${color["300"]};
  font-size: ${text.sm};
`;
