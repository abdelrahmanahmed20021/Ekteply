"use client";
import { resumeData } from "@/app/data/typing";
import { Box, Container } from "@/app/styles/LFStyled";
import React, { useEffect, useRef } from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import Typed from "typed.js";

export default function LandingFrame() {
  const card_1 = useRef(null);
  const card_2 = useRef(null);
  const card_3 = useRef(null);
  const initTyping = {
    strings: [resumeData.desktop[0].resume],
    typeSpeed: 1,
    showCursor: true,
    cursorChar: "",
    shuffle: true,
  };

  useEffect(() => {
    const typed_1 = new Typed(card_1.current, {
      ...initTyping,
    });

    const typed_2 = new Typed(card_2.current, {
      ...initTyping,
    });

    const typed_3 = new Typed(card_3.current, {
      ...initTyping,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed_1.destroy();
      typed_2.destroy();
      typed_3.destroy();
    };
  }, []);

  return (
    <Container className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
      <Box
        topmd="20%"
        rightmd="20%"
        topsm="15%"
        rightsm="20%"
        top="100px"
        right="180px"
        style={{ fontFamily: "Roboto Condensed" }}
        className="bg-main-700 z-30 p-3 font-bold text-light-800 font-resume"
      >
        <div className="flex items-end gap-1">
          <span
            className="typed-cursor text-lg text-main-900  typed-cursor--blink"
            aria-hidden="true"
          >
            <BsArrow90DegRight />
          </span>
          <span type="text" ref={card_1}></span>
        </div>
      </Box>
      <Box
        topmd="15%"
        rightmd="10%"
        topsm="10%"
        rightsm="10%"
        top="70px"
        right="100px"
        className="bg-main-700  z-20 p-3 font-bold text-light-800 font-resume"
      >
        <div className="flex items-end gap-1">
          <span
            className="typed-cursor text-lg text-main-900  typed-cursor--blink"
            aria-hidden="true"
          >
            <BsArrow90DegRight />
          </span>
          <span type="text" ref={card_2}></span>
        </div>
      </Box>
      <Box
        topmd="10%"
        rightmd="5%"
        topsm="5%"
        rightsm="5%"
        top="40px"
        right="60px"
        className="bg-main-700  z-0 p-3 font-bold text-light-800 font-resume"
      >
        <div className="flex items-end gap-1">
          <span
            className="typed-cursor text-lg text-main-900  typed-cursor--blink"
            aria-hidden="true"
          >
            <BsArrow90DegRight />
          </span>
          <span type="text" ref={card_3}></span>
        </div>
      </Box>
    </Container>
  );
}
