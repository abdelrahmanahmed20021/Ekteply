"use client";

import React from "react";
import LandingText from "./LandingText";
import LandingFrame from "./LandingFrame";
import { styled } from "styled-components";

const Container = styled.section`
  height: calc(100vh - 80px);
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
`;

export default function Landing() {
  return (
    <Container className="py-[100px] lg:gap-0 lg:justify-between md:justify-start gap-5 flex-col lg:flex-row  pt-[100px]">
      <LandingText />
      <LandingFrame />
    </Container>
  );
}
