import styled from "styled-components";
import Colors from "../../../constants/colors";

export const Container = styled.div`
  background: ${Colors.PRIMARY_BLACK};
  padding: 92px 0 0 0;
`;

export const Logo = styled.div`
  color: ${Colors.WHITE};
  display: flex;
  align-items: center;
  & svg {
    margin-right: 10px;
  }
  & h4 {
    font-size: 29px;
  }
`;

export const LinkBlock = styled.div`
  & a {
    color: #b9b9b9;
    text-transform: inherit;
  }
`;
export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 25px 0;
`;
export const SubBlock = styled.div`
  border-top: 1px solid #818181;
  padding: 59px 0 82px 0;
  & h6 {
    color: #999;
  }
  & button {
    color: #fff;
  }
  & svg {
    fill: #fff;
  }
`;