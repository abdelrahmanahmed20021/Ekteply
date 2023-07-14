"use client";
import React, { useEffect } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const Box = styled.div`
  width: 400px;
  height: 500px;
  position: absolute;
  top: ${(prop) => prop.top};
  right: ${(prop) => prop.right};
  transform: translate(-${(prop) => prop.right}, ${(prop) => prop.top});
  border: 5px solid #fff;
  @media screen and (min-width: 667px) and (max-width: 1190px) {
    width: 300px;
    height: 300px;
    top: ${(prop) => prop.TOPMD};
    right: ${(prop) => prop.RIGHTMD};
    transform: translate(-${(prop) => prop.RIGHTMD}, ${(prop) => prop.TOPMD});
  }
  @media screen and (min-width: 200px) and (max-width: 666px) {
    width: 150px;
    height: 150px;
    top: ${(prop) => prop.TOPSM};
    right: ${(prop) => prop.RIGHTSM};
    transform: translate(-${(prop) => prop.RIGHTSM}, ${(prop) => prop.TOPSM});
  }
`;

export default function LandingFrame() {
  return (
    <Container className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
      <Box
        TOPMD="20%"
        RIGHTMD="20%"
        TOPSM="15%"
        RIGHTSM="20%"
        top="100px"
        right="180px"
        className="bg-main-700 z-30"
      ></Box>
      <Box
        TOPMD="15%"
        RIGHTMD="10%"
        TOPSM="10%"
        RIGHTSM="10%"
        top="70px"
        right="100px"
        className="bg-main-700  z-20"
      ></Box>
      <Box
        TOPMD="10%"
        RIGHTMD="5%"
        TOPSM="5%"
        RIGHTSM="5%"
        top="40px"
        right="60px"
        className="bg-main-700  z-10"
      ></Box>
    </Container>
  );
}
