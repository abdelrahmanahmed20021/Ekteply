"use client";
import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export default function LandingText() {
  return (
    <Container className="w-full lg:w-1/2  h-full">
      <h1 className="lg:text-[3rem] 2xl:text-[5rem] md:text-[4rem] text-[2rem] text-main-900">
        Create Professional <br /> Documents in Minutes
      </h1>
      <p className="text-main-700 lg:text-[16px] xl:[1.3rem] text-[13px] sm:text-[1.1rem] leading-6 sm:leading-8">
        Create stunning reports, professional emails, and captivating job offers
        with ease using Ekteply, the ultimate web application that brings
        efficiency and convenience to your document creation tasks. With our
        extensive collection of pre-designed templates, you can elevate your
        communication game and save valuable time.
      </p>

      <button className="sm:py-3 py-2 hover:border-main-900 border-[1px] text-light-900 transition-all ease-out transtion duration-300 hover:text-main-900 hover:bg-light-900 px-[15px] sm:px-[30px] bg-main-800 rounded-md">
        Get Started
      </button>
    </Container>
  );
}
