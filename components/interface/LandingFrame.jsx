"use client";
import { Box, Container } from "@/app/styles/LFStyled";
import {
  boxes_styles_lg,
  boxes_styles_sm,
  initTyping,
} from "@/utils/init_LandingFrame";
import { Tajawal } from "next/font/google";
import React, { useEffect, useRef } from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import Typed from "typed.js";

const tajawal = Tajawal({
  weight: "700",
  subsets: ["latin"],
});

export default function LandingFrame() {
  const boxesRefs = boxes_styles_lg.map(() => useRef(null));
  const smallScreenRefs = useRef(null);

  useEffect(() => {
    // Create an array to store Typed instances
    const typedInstances = boxesRefs.map((ref, index) => {
      const typed = new Typed(ref.current, {
        ...initTyping,
      });
      return typed;
    });
    const typedSmallInstances = new Typed(smallScreenRefs.current, {
      ...initTyping,
    });

    // Destroy Typed instances during cleanup to stop animation
    return () => {
      typedInstances.forEach((typed) => typed.destroy());
      typedSmallInstances.destroy();
    };
  }, []);

  return (
    <Container className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
      {boxes_styles_lg.map((e, i) => (
        <Box
          key={i}
          {...e}
          className="bg-main-700 hidden lg:block z-0 pt-5 px-3 font-bold text-light-800 font-resume"
        >
          <div className="flex items-end gap-1">
            <span
              className="typed-cursor text-lg text-main-900  typed-cursor--blink"
              aria-hidden="true"
            >
              <BsArrow90DegRight />
            </span>
            <span
              type="text"
              ref={boxesRefs[i]}
              className={tajawal.className}
              style={{ fontSize: "12px" }}
            ></span>
          </div>
        </Box>
      ))}
      <Box
        {...boxes_styles_sm}
        className="bg-main-700 lg:hidden z-0 pt-5 px-3 font-bold text-light-800 font-resume"
      >
        <div className="flex items-end gap-1">
          <span
            className="typed-cursor text-lg text-main-900  typed-cursor--blink"
            aria-hidden="true"
          >
            <BsArrow90DegRight />
          </span>
          <span
            type="text"
            ref={smallScreenRefs}
            className={tajawal.className}
            style={{ fontSize: "12px" }}
          ></span>
        </div>
      </Box>
    </Container>
  );
}
