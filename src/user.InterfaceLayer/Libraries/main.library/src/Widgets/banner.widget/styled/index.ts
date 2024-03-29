import styled from "styled-components";
import Colors from "../../../constants/colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 31px 31px 31px 66px;
  margin-bottom: 160px;
  border-radius: 30px;
  background: #141416;
  h2 {
    margin-top: 11px;
    color: ${Colors.WHITE};
  }
  h4 {
    margin-top: 12px;
    margin-bottom: 50px;
    color: #d4d4d4;
  }

  & button {
    color: ${Colors.WHITE};
    border: 2px solid ${Colors.WHITE};
    margin-right: 30px;
    margin-bottom: 20px;
    &:hover {
      color: ${Colors.PRIMARY_BLACK};
      background: ${Colors.WHITE};
    }
  }

  @media (max-width: 1100px) {
    padding: 22px 22px 22px 47px;
  }
`;

export const Block = styled.div``;
export const BlockImage = styled.div`
  width: 369px;
  height: 249px;
  flex-shrink: 0;
  & div {
    border-radius: 15px;
  }
  @media (max-width: 1100px) {
    width: 260px;
  }
  @media (max-width: 425px) {
    & div {
      width: 130px;
      height: 130px;
    }
  }
`;
