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
  filter: blur(33px);
  & img {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
  @media (max-width: 1140px) {
    width: 226px;
    height: 229px;
    left: 240px;
    top: 190px;
  }
  @media (max-width: 768px) {
    left: 125px;
    top: 125px;
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

  @media (max-width: 1140px) {
    width: 279px;
    height: 280px;
  }
`;

export const ArrowBtn = styled.div`
  margin-top: 28px;
  text-align: center;
`;