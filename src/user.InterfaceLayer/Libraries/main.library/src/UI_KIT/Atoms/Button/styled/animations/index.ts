import { css, keyframes } from "styled-components";

export const load = keyframes`
    from {
        left: -150px;
    }
    to {
        left: 100%;
    }
`;

export const slideBackground = css`
  position: relative;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: #000;
    transition: all 0.5s ease;
    z-index: -1;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
  &:active {
    &::before {
      width: 100%;
      transition: all 0.2s ease;
      background: #000;
      z-index: -3;
    }
  }
`;
