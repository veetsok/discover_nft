import styled from "styled-components";

export const SliderBlock = styled.div`
  max-width: 280px;
  border-radius: 23px;
  background: var(--others-white, #fff);
  box-shadow: 38px 11px 58px 0px rgba(199, 199, 199, 0.6);
`;
export const SliderBlockImages = styled.div`
  margin: 0 auto;
  padding: 14px 14px 18px 14px;
  text-align: center;
  width: 252px;
  height: 252px;
  flex-shrink: 0;
  position: relative;
`;

export const TimeBlur = styled.div`
  position: absolute;
  top: 32px;
  right: 11px;
  display: inline-block;
  padding: 8px 14px;
  color: var(--others-white, #fff);
  border-radius: 9px;
  border: 1px solid rgba(28, 29, 32, 0.08);
  background: rgba(28, 29, 32, 0.35);
  box-shadow: 0px 4px 14px 0px rgba(28, 29, 32, 0.08);
  backdrop-filter: blur(2px);
`;

export const SliderBlockTitle = styled.div`
  margin-bottom: 10px;
`;

export const SubImagePad = styled.div`
  padding: 10px 18px 18px 18px;
  max-width: 245px;
  margin: 0 auto;
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubtitleBlock = styled.div`
  max-width: 121px;
`;

export const Rate = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  & img {
    width: 21px;
  }
`;
