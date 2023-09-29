import styled from "styled-components";
import Colors from "../../../../constants/colors";

export const ListItem = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h5 {
    font-size: 12px;
  }
  & h6 {
    font-size: 10px;
  }
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & div {
    width: 15px;
    height: 15px;
  }
  & h5 {
    font-weight: 700;
  }
`;



export const ListItemName = styled.div`
  display: flex;
  align-items: center;
`;

export const ListItemImage = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 42px;
  margin-right: 13px;
  & h5 {
    font-size: 18px;
  }
`;

export const Notifications = styled.div`
  bottom: 0;
  right: -5px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50px;
  background: ${Colors.WHITE};
  color: ${Colors.PRIMARY_BLACK};
  & h6 {
    font-weight: 900;
  }
`;

export const ListItemBlock = styled.div`
  overflow: hidden;
`;
export const False = styled.div`
  border-radius: 7px;
  border: 1.741px solid var(--neutrals-6, #e6e8ec);
  background: var(--neutrals-6, #e6e8ec);
`;
