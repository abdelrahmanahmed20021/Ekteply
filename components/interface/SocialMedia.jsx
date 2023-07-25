import React from "react";
import { styled } from "styled-components";

const Box = styled.div`
  width: 40px;
  height: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ background }) => background};
  cursor: pointer;
  transition: all ease 0.4s;
  &:hover {
    background-color: #eee3cb;
    border: 1px solid #000;
    color: #000;
    scale: 1.2;
  }
  @media screen and (max-width: 1190px) {
    width: 30px;
    height: 30px;
  }
`;

export default function SocialMedia({ icons, colors }) {
  return (
    <div className="fixed flex gap-4 left-4 bottom-3 md:left-10 md:bottom-10">
      {colors.map((e, i) => (
        <Box background={e}>{icons[i]}</Box>
      ))}
    </div>
  );
}
