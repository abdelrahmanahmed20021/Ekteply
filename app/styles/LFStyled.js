import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const Box = styled.div`
  width: 400px;
  height: 500px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: absolute;
  position: ${({ position }) => position};
  transition: height 0.5s ease;
  top: ${({ top }) => top};
  right: ${(right) => right};
  border-radius: 5px;
  transform: translate(-${({ right }) => right}, ${({ top }) => top});
  border: 4px solid #164b60;
  overflow: auto;
`;
