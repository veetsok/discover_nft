import styled from "styled-components";

interface Image {
  isLoading?: boolean;
}

export const Image = styled.img<Image>`
  width: 100%;
`;
export const Error = styled.img<Image>``;
