import styled from "styled-components";

export const VerticalBtns = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 17px;
  background: var(--neutrals-8, #fcfcfd);
  box-shadow: 0px 43px 34px -25px rgba(15, 15, 15, 0.12);

  & button {
    svg {
      fill: #929292;
      transition: all 0.8s;
    }
    &:hover {
      svg {
        fill: #23262f;
      }
    }
  }
`;

export const LeftButton = styled.div`
  & button {
    padding: 22px 35px 22px 22px;
    border-radius: 18px 0 0 18px;
    background: var(--neutrals-8, #fcfcfd);
  }
`;
export const RightButton = styled.div`
  & button {
    padding: 22px 22px 22px 35px;
    border-radius: 0 18px 18px 0;
    background: var(--neutrals-8, #fcfcfd);
  }
`;

export const Vertical = styled.div`
  content: "";
  width: 2px;
  height: 27px;
  border-radius: 2px;
  background: var(--neutrals-6, #e6e8ec);
`;
