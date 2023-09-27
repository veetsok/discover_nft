import styled from "styled-components";

export const Container = styled.div`
padding: 70px 0 90px 0
  background: #f1f1f1;
  & h2 {
    color: #c5c5c5;
    text-align: center;
  }
`;

export const Slider = styled.div`
  text-align: center;
  & button {
    box-shadow: 0px 43px 34px -26px rgba(15, 15, 15, 0.12);
  }
`;
export const SlidersBlock = styled.div`
  overflow: hidden;
  padding: 100px 0 115px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;