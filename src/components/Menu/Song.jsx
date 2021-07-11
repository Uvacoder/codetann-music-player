import React from "react";
import styled from "styled-components";
import { color, text } from "../../styles/theme";

export default function Song({ img, title, artist }) {
  return (
    <Container>
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
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Artwork = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Title = styled.p`
  color: ${color.text};
  font-size: ${text.md};
`;

const Artist = styled.p`
  color: ${color.darkText};
  font-size: ${text.sm};
`;
