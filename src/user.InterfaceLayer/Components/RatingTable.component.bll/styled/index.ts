import styled from "styled-components";

export const RecentPosition = styled.div`
  position: absolute;
  top: -123px;
  right: 0;
  z-index: 10;
`;

export const Container = styled.div`
  padding: 235px 0 100px 0;
  position: relative;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 90px;
`;
export const RatingFilter = styled.tr`
  display: contents;
  & h4 {
    color: #93989a;
  }
`;

export const Td = styled.td`
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Collection = styled.td`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RatingImage = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 16px;
  & div {
    border-radius: 50%;
  }
`;

export const RatingName = styled.div`
  & h5 {
    color: #141416;
    font-weight: 700;
  }
`;

export const RatingSub = styled.div`
  color: #64748b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RatingBlockName = styled.div``;

export const Table = styled.table`
  width: auto;
  flex: 1;
  display: grid;
  border-collapse: collapse;
  grid-template-columns:
    minmax(296px, 1fr) minmax(180px, 1.67fr) minmax(180px, 1.67fr) minmax(180px, 1.67fr)
    minmax(180px, 3.33fr) minmax(180px, 1.67fr);
`;

export const Thead = styled.thead`
  display: contents;
`;

export const Tbody = styled.tbody`
  display: contents;
`;

export const Tr = styled.tbody`
  display: contents;
`;

