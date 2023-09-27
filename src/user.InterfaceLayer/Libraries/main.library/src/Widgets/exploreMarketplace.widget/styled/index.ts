import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 100px 0 245px 0;
  border-bottom: 1px solid #cbcbcb;
  h2 {
    text-align: center;
  }
`;

export const CategoryFilter = styled.div`
  padding: 82px 0 115px 0;
  display: flex;
  justify-content: center;
  & button {
    align-items: center;
    margin: 0 11px;
    & img {
      margin-right: 8px;
    }
  }
`;

export const ExploreItems = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ExploreItem = styled.div`
  margin: 33px 0;
`;
export const ExploreAll = styled.div`
  position: absolute;
  bottom: 102px;
  right: 0;
`;