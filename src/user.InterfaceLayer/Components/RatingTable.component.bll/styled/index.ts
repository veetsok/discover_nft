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

// display: flex;
//   justify-content: space-between;
//   align-items: center;

export const Td = styled.td`
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Collection = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RatingImage = styled.div`
  display: inline;
`;

export const Table = styled.table`
  width: auto;
  flex: 1;
  display: grid;
  border-collapse: collapse;
  grid-template-columns:
    minmax(150px, 1fr) minmax(150px, 1.67fr) minmax(150px, 1.67fr) minmax(150px, 1.67fr)
    minmax(150px, 3.33fr) minmax(150px, 1.67fr);
`;

export const Thead = styled.thead`
  display: contents;
`;

export const Tbody = styled.tbody`
  display: contents;
`;

export const RatingName = styled.div``;

export const RatingBlockName = styled.div``;

export const RatingSub = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RatingBlock = styled.tr`
  display: contents;
  border-bottom: 1px solid #ebe9e9;
  padding: 24px 0 14px 0;
`;

export const Volume = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Days = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Price = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Owners = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Items = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
