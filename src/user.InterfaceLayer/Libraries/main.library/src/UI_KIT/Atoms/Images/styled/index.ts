import styled from "styled-components";

interface Image {
  isLoading?: boolean;
  background?: string;
}

export const Image = styled.img<Image>`
  width: 100%;
`;
export const ImageBackground = styled.div<Image>`
  background: ${(props) =>
    props.background
      ? `url(${props.background}) lightgray 50% / cover no-repeat;`
      : "none"};
  width: 100%;
  height: 100%;
  border-radius: 23px;
`;

export const Error = styled.div<Image>``;
