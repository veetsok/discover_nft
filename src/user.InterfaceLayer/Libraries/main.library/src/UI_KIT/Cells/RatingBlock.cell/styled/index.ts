import styled from "styled-components";

export const Container = styled.div`
  padding: 235px 0 100px 0;
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

export const RatingBlock = styled.tr`
  display: contents;
  & td {
    border-bottom: 1px solid #ebe9e9;
    padding: 24px 0 14px 0;
  }
`;

export const Volume = styled.td`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & div {
    width: 22px;
    height: 22px;
  }
  & h5 {
    font-weight: 700;
  }
`;

export const Days = styled.td`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & h5 {
    font-weight: 700;
    color: #10c352;
  }
`;

export const Price = styled.td`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & div {
    width: 22px;
    height: 22px;
  }
  & h5 {
    font-weight: 700;
  }
`;

export const Owners = styled.td`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Items = styled.td`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
