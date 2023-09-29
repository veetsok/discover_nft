import styled from "styled-components";

export const Container = styled.div`
  padding: 70px 0 90px 0;
  overflow: hidden;
  background: #f1f1f1;
  & h2 {
    color: #c5c5c5;
    text-align: center;
  }
`;

export const Slider = styled.div`
  text-align: center;
`;
export const SlidersBlock = styled.div`
  width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  padding: 100px 0 115px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SliderWrapper = styled.div`
  padding: 0 20px;
  display: flex;
  transition: transform 0.3s ease-in-out;
`;