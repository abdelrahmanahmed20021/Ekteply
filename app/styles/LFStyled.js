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
  top: ${({ top }) => top};
  right: ${(right) => right};
  transform: translate(-${({ right }) => right}, ${({ top }) => top});
  border: 5px solid #fff;
  @media screen and (min-width: 667px) and (max-width: 1190px) {
    width: 300px;
    height: 300px;
    top: ${({ topmd }) => topmd};
    right: ${({ rightmd }) => rightmd};
    transform: translate(-${({ rightmd }) => rightmd}, ${({ topmd }) => topmd});
  }
  @media screen and (min-width: 200px) and (max-width: 666px) {
    width: 150px;
    height: 150px;
    top: ${({ topsm }) => topsm};
    right: ${({ rightsm }) => rightsm};
    transform: translate(-${({ rightsm }) => rightsm}, ${({ topsm }) => topsm});
  }
`;
