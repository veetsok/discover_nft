import styled from "styled-components";

interface Image {
  isLoading?: boolean;
}

export const Image = styled.img<Image>``;
export const Error = styled.img<Image>``;
