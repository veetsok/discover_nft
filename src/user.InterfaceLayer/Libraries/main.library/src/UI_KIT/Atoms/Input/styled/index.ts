import styled from "styled-components";
import Colors from "../../../../constants/colors";
import load from "./animations/load";

export const Search = styled.div`
  align-items: center;
  display: flex;
  & svg {
    position: relative;
    left: 30px;
  }
  @media (max-width: 1140px) {
    & svg {
      left: 18px;
      width: 11px;
    }
  }
`;

export const InputStyle = styled.input`
  outline: none;
  display: flex;
  width: 100%;
  color: ${Colors.BLACK};
  font-size: 16px;
  padding: 18px 22px 18px 35px;
  gap: 10px;
  border-radius: 14px;
  font-weight: 500;
  border: none;
  background: #ededed;
  cursor: pointer;
  &::placeholder {
    color: #c2c3cb;
  }
  &:active,
  &:focus,
  &:hover {
  }
  @media (max-width: 1140px) {
    font-size: 11px;
    padding: 12px 13px 12px 20px;
    &::placeholder {
      font-size: 11px;
    }
  }
`;

export const Error = styled.div`
  font-size: 25px;
`;

export const Skeleton = styled.div`
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  height: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 80%;
    background: linear-gradient(to right, transparent 0%, transparent 100%);
    animation: ${load} 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;
