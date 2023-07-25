import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 50%;
`;

export const Box = styled.div`
  /* width: 400px;
  height: 500px;
  width: ${({ width }) => width};
  height: ${({ height }) => height}; */
  z-index: ${({ zindex }) => zindex};
  position: absolute;
  position: ${({ position }) => position};
  transition: height 0.5s ease;
  top: 30px;
  right: 10px;
  top: ${({ top }) => top};
  right: ${(right) => right};
  border-radius: 5px;
  transform: translate(-${({ right }) => right}, ${({ top }) => top});
  border: 4px solid #164b60;
  overflow: auto;
  background-color: rgba(163, 188, 209, 0.454);
  transition: all ease 0.5s;
  backdrop-filter: blur(7px);
  animation: ${(animation) => animation};
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #9babb8;
    border-radius: 10px;
  }
  @media screen and (max-width: 650px) {
    &::-webkit-scrollbar {
      width: 0px;
    }
    padding: 10px 2px;
  }
`;
