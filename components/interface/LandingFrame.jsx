"use client";
import { Box, Container } from "@/app/styles/LFStyled";
import { boxes_styles_sm, initTyping } from "@/utils/init_LandingFrame";
import { Tajawal } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import Typed from "typed.js";

const tajawal = Tajawal({
  weight: "700",
  subsets: ["latin"],
});

export default function LandingFrame() {
  const boxesRefs = [1, 2, 3].map(() => useRef(null));
  const smallScreenRefs = useRef(null);
  const [activeBox, setActiveBox] = useState(0);

  const handelStyle = (index) => {
    if (index == activeBox) {
      return {
        top: "100px",
        right: "180px",
        zIndex: "20",
        animation: "scalebale 1 ease 1s",
      };
    }
    if (index == 1) {
      return {
        top: "60px",
        right: "40px",
        zIndex: "5",
      };
    } else if (index == 2) {
      return {
        top: "80px",
        right: "90px",
        zIndex: "10",
      };
    }
  };

  const slide = () => {
    if (activeBox < boxesRefs.length - 1) {
      setActiveBox((prop) => prop + 1);
    } else {
      setActiveBox(0);
    }
  };

  useEffect(() => {
    // Create an array to store Typed instances
    const typedInstances = boxesRefs.reverse().map((ref, index) => {
      const typed = new Typed(ref.current, {
        ...initTyping(index),
        loop: true,
        bindInputFocusEvents: true,
      });
      return typed;
    });
    const typedSmallInstances = new Typed(smallScreenRefs.current, {
      ...initTyping(0),
      loop: true,
    });

    // Destroy Typed instances during cleanup to stop animation
    return () => {
      typedInstances.forEach((typed) => typed.destroy());
      typedSmallInstances.destroy();
    };
  }, []);

  return (
    <Container className="w-full  lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
      <button
        onClick={slide}
        style={{ transition: "all ease .5s" }}
        className="fixed hidden lg:flex bg-main-900 text-light-900  right-10 w-[30px]  justify-center items-center h-[30px] hover:bg-interface-900 hover:text-interface-700 rounded-[30px]  bottom-10"
      >
        <HiOutlineArrowSmallRight />
      </button>
      {boxesRefs.map((e, i) => (
        <Box
          key={i}
          {...handelStyle(i)}
          className="hidden lg:block pt-5 px-3 font-bold text-main-900 font-resume"
        >
          <div className="flex items-end gap-1">
            <span
              className="typed-cursor text-lg text-main-900  typed-cursor--blink"
              aria-hidden="true"
            >
              <BsArrow90DegRight size={"13px"} />
            </span>
            <span
              type="text"
              ref={boxesRefs[i]}
              className={tajawal.className}
              style={{ fontSize: "15px" }}
            ></span>
          </div>
        </Box>
      ))}
      <Box
        {...boxes_styles_sm}
        height={"300px"}
        className=" lg:hidden z-0 pt-5 px-3 font-bold text-main-900 font-resume"
      >
        <div className="flex items-end gap-1">
          <span
            className="typed-cursor text-lg text-main-900  typed-cursor--blink"
            aria-hidden="true"
          >
            <BsArrow90DegRight size={"13px"} />
          </span>
          <span
            type="text"
            ref={smallScreenRefs}
            className={tajawal.className}
            style={{ fontSize: "13px" }}
          ></span>
        </div>
      </Box>
    </Container>
  );
}
