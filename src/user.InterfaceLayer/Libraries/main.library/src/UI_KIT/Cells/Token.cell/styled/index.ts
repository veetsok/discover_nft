import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 300px;
  top: 75px;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 13px;
  background: linear-gradient(217deg, #fcfcfd -0.01%, rgba(252, 252, 253, 0.6) 100%);
  box-shadow: 0px 19px 28px 0px rgba(70, 70, 70, 0.1);
  backdrop-filter: blur(15px);
  h2 {
    color: #c5c5c5;
  }
`;

export const TokenBlockSImageS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 11px;
`;

export const Dote = styled.div`
  margin-right: 11px;
  width: 6.5px;
  height: 7.5px;
  background: #141416;
  border-radius: 50px;
`;

export const Position = styled.div`
  position: absolute;
  top: 0px;
  right: -5px;
  width: 17px;
  height: 17px;
`;

export const TokenBlock = styled.div`
  display: flex;
  align-items: center;
  & span {
    display: inline;
  }
`;

export const TokenBlockName = styled.div`
  margin-left: 11px;
  & h6 {
    color: #949494;
  }

  & span {
    font-weight: 700;
    font-size: 12px;
  }
`;

export const TokenName = styled.div`
  & h6 {
    display: inline;
  }
  & span {
    margin-bottom: 10px;
  }
`;

export const TokenBlockImage = styled.div`
  width: 39px;
  height: 39px;
  position: relative;
`;
export const TokenImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10.443px;
`;
