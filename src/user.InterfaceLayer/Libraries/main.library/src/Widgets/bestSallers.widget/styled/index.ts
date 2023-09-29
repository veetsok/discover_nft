import styled from "styled-components";

export const Container = styled.div`
  border-radius: 14px;
  border: 0.882px solid var(--greyscale-200, #edf2f7);
  background: var(--others-white, #fff);
  box-shadow: 9px 9px 44px 0px rgba(20, 20, 22, 0.1);
  padding: 21px 26px;
  width: 268px;
  margin-right: 180px;
  @media (max-width: 890px) {
    padding: 18px 15px;
    width: 200px;
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ListBlock = styled.div``;
