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
  right: 6px;
  transform: rotate(-5deg);
  & img {
    width: 100%;
  }
  @media (max-width: 890px) {
    width: 108px;
    top: 100px;
    right: 70px;
  }
`;

export const DoteImage = styled.div`
  z-index: -20;
  width: 103px;
  height: 92px;
  position: absolute;
  top: 100px;
  right: -150px;
  & img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 890px) {
    top: 50px;
    right: -100px;
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
  @media (max-width: 890px) {
    top: 150px;
    right: -100px;
  }
`;

export const HeroImageBLock = styled.div`
  max-width: 780px;
  @media (max-width: 890px) {
    max-width: 448px;
    margin-left: 34px;
  }
`;


