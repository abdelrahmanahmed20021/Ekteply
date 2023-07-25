"use client";
import { Box, Container } from "@/app/styles/LFStyled";
import { initTyping, initTypingSm } from "@/utils/init_LandingFrame";
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
  const smBoxesRefs = [1, 2, 3].map(() => useRef(null));
  const [activeBox, setActiveBox] = useState(0);

  const handelStyle = (index, screen = "lg") => {
    if (index == activeBox) {
      return {
        top: "50px",
        right: screen == "lg" ? "100px" : "60px",
        zindex: "20",
        animation: "scalebale 1 ease 1s",
      };
    }
    if (index == 1) {
      return {
        top: "10px",
        right: screen == "lg" ? "20px" : "10px",

        zindex: "5",
      };
    } else if (index == 2) {
      return {
        top: "30px",
        right: screen == "lg" ? "60px" : "30px",
        zindex: "10",
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

    const typedSmallInstances = smBoxesRefs.reverse().map((ref, index) => {
      const typed = new Typed(ref.current, {
        ...initTyping(index),
        loop: true,
        bindInputFocusEvents: true,
      });
      return typed;
    });

    // Destroy Typed instances during cleanup to stop animation
    return () => {
      typedInstances.forEach((typed) => typed.destroy());
      typedSmallInstances.forEach((typed) => typed.destroy());
    };
  }, []);

  return (
    <Container className="w-full  lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
      <button
        onClick={slide}
        style={{ transition: "all ease .5s" }}
        className="fixed flex z-50 md:right-10 md:bottom-10 bottom-3 lg:flex bg-main-900 text-light-900  right-5 w-[30px]  justify-center items-center h-[30px] hover:bg-interface-900 hover:text-interface-700 rounded-[30px] "
      >
        <HiOutlineArrowSmallRight />
      </button>
      {boxesRefs.map((e, i) => (
        <Box
          key={i}
          {...handelStyle(i)}
          className="hidden lg:w-[350px] lg:h-[500px] 2xl:w-[400px] 2xl:h-[500px] lg:block pt-5 px-3 font-bold text-main-900 font-resume"
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
      {smBoxesRefs.map((e, i) => (
        <Box
          {...handelStyle(i, "small")}
          className=" lg:hidden w-[60%] h-[200px] md:h-[400px] z-0 pt-5 px-3 font-bold text-main-900 font-resume"
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
              ref={smBoxesRefs[i]}
              className={tajawal.className}
              style={{ fontSize: "13px" }}
            ></span>
          </div>
        </Box>
      ))}
    </Container>
  );
}
