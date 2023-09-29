import styled from "styled-components";

export const Container = styled.div`
  border-radius: 14px;
  border: 1px solid var(--greyscale-200, #edf2f7);
  background: var(--others-white, #fff);
  box-shadow: 9px 9px 44px 0px rgba(20, 20, 22, 0.1);
  padding: 24px;
  width: 274px;
  @media (max-width: 890px) {
    width: 224px;
    padding: 18px;
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ListBlock = styled.div``;
