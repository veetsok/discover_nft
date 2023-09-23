import styled from "styled-components";

interface Text {
  isLoading?: boolean;
}

export const TextH1 = styled.h1<Text>`
  color: #000;
`;
export const TextH2 = styled.h2<Text>``;
export const TextH3 = styled.h3<Text>``;
export const TextH4 = styled.h4<Text>``;
export const TextH5 = styled.h5<Text>``;
export const TextH6 = styled.h6<Text>``;

export const Error = styled.h6<Text>``;
