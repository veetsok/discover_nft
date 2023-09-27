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
  left: 425px;
  top: 175px;
  border-radius: 10px;
  border: 2px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  filter: blur(33.75477600097656px);
  & img {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
`;

export const ItemImageBlock = styled.div`
  width: 390px;
  height: 394px;
  & img {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
`;

export const ArrowBtn = styled.div`
  margin-top: 48px;
  margin-left: 100px;
`;