"use client";

import React from "react";
import LandingText from "./LandingText";
import LandingFrame from "./LandingFrame";
import { styled } from "styled-components";
import SocialMedia from "./SocialMedia";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
const Container = styled.section`
  height: calc(100vh);
  overflow-x: hidden;
  display: flex;
  align-items: center;
  padding-bottom: 100px;
`;

export default function Landing() {
  return (
    <Container className="lg:gap-0 lg:justify-between md:justify-start gap-5 flex-col lg:flex-row ">
      <LandingText />
      <LandingFrame />
      <SocialMedia
        colors={["#1AC33F", "#0077B5", "#1DA1F2"]}
        icons={[<BsWhatsapp />, <BiLogoLinkedin />, <AiOutlineTwitter />]}
      />
    </Container>
  );
}
