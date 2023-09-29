import styled from "styled-components";

export const HeroHeader = styled.div`
  display: flex;
  padding: 75px 0 143px 0;
  position: relative;
  @media (max-width: 1546px) {
    overflow: hidden;
  }
  @media (max-width: 890px) {
    overflow: hidden;
  }
`;

export const HeroBlock = styled.div`
  max-width: 567px;
  @media (max-width: 890px) {
    max-width: 403px;
  }
`;

export const ArrowImage = styled.div`
  z-index: -20;
  width: 128px;
  position: absolute;
  top: 100px;
  right: 90px;
  transform: rotate(-5deg);
  & img {
    width: 100%;
  }
`;

export const DoteImage = styled.div`
  z-index: -20;
  width: 173px;
  height: 192px;
  position: absolute;
  top: 100px;
  right: -150px;
  & img {
    width: 100%;
    height: 100%;
  }
`;
export const DoteImageSec = styled.div`
  z-index: -20;
  width: 173px;
  height: 192px;
  position: absolute;
  top: 307px;
  right: -150px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const HeroImageBLock = styled.div`
  max-width: 780px;
  @media (max-width: 890px) {
    max-width: 448px;
  }
`;


