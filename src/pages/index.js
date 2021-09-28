import React from "react";
import styled from "styled-components";
import VideoCard from "../components/VideoCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 0.4fr));
  gap: 10px;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 100px;
  width: 100%;
`

export default function Home({ item }) {
  return (
    <Container >
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </Container>
  )


}

