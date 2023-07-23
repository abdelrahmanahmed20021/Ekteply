"use client";

import React from "react";
import LandingText from "./LandingText";
import LandingFrame from "./LandingFrame";
import { styled } from "styled-components";

const Container = styled.section`
  height: calc(100vh);
  overflow-x: hidden;
  display: flex;
  align-items: center;
  @media screen and (max-width: 760px) {
    padding: 100px 0;
  }
`;

export default function Landing() {
  return (
    <Container className="lg:gap-0 lg:justify-between md:justify-start gap-5 flex-col lg:flex-row ">
      <LandingText />
      <LandingFrame />
    </Container>
  );
}
