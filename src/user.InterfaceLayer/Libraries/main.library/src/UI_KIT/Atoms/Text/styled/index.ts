import styled from "styled-components";
import commonTextFonts from "./fonts";
import { TextEnum } from "../enum";
import FontsEnum from "../../../../constants/fonts";

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
export const aText = styled.a<Text>`
  cursor: pointer;
  margin: 0 27px;
  color: #606060;
  font-family: ${FontsEnum.Inter};
  font-size: ${commonTextFonts[TextEnum.enum_aText].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_aText].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_aText].fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_aText].lineHeight};
  text-transform: ${commonTextFonts[TextEnum.enum_aText].textTransform};
`;

export const Error = styled.h6<Text>``;
