import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;
export const MainBlockItem = styled.div`
  width: 391px;
  height: 420px;
`;

export const SecondBlockItem = styled.div`
  width: 320px;
  height: 320px;
  flex-shrink: 0;
  position: absolute;
  right: 25px;
  top: 225px;
`;

export const ItemImageBlock = styled.div`
  width: 390px;
  height: 394px;
  position: relative;
  & img {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
`;

export const ItemBlur = styled.div`
  position: absolute;
  z-index: -10;
  top: 24px;
  width: 100%;
  height: 100%;
  border-radius: 11.957px;
  background: url("/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/BlurImg.png"),
    lightgray 50% / cover no-repeat;
  filter: blur(41.85015106201172px);
`;

export const ArrowBtn = styled.div`
  margin-top: 48px;
`;