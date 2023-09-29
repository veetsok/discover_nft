import styled from "styled-components";
import commonTextFonts from "./fonts";
import { TextEnum } from "../enum";
import FontsEnum from "../../../../constants/fonts";
import Colors from "../../../../constants/colors";

interface Text {
  isLoading?: boolean;
}

export const TextH1 = styled.h1<Text>`
  color: ${Colors.BLACK};
  font-family: ${FontsEnum.Poppins}, sans-serif;
  font-size: ${commonTextFonts[TextEnum.enum_H1Text].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_H1Text].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_H1Text].fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_H1Text].lineHeight};
  @media (max-width: 1140px) {
    font-size: 53px;
  }
`;

export const TextH2 = styled.h2<Text>`
  font-size: ${commonTextFonts[TextEnum.enum_H2Text].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_H2Text].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_H2Text].fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_H2Text].lineHeight};
  @media (max-width: 1140px) {
    font-size: 32px;
  }
`;

export const TextH3 = styled.h3<Text>`
  font-family: ${FontsEnum.Poppins}, sans-serif;
  font-size: ${commonTextFonts[TextEnum.enum_H3Text].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_H3Text].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_H3Text].fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_H3Text].lineHeight};
  @media (max-width: 1140px) {
    font-size: 26px;
  }
`;

export const TextH4 = styled.h4<Text>`
  font-family: ${FontsEnum.Poppins}, sans-serif;
  font-size: ${commonTextFonts[TextEnum.enum_H4Text].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_H4Text].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_H4Text].fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_H4Text].lineHeight};
  @media (max-width: 1140px) {
    font-size: 15px;
  }
`;

export const TextH5 = styled.h5<Text>`
  font-family: ${FontsEnum.Poppins}, sans-serif;
  font-size: ${commonTextFonts[TextEnum.enum_H5Text].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_H5Text].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_H5Text].fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_H5Text].lineHeight};
  @media (max-width: 1140px) {
    font-size: 11px;
  }
`;

export const TextH6 = styled.h6<Text>`
  @media (max-width: 1140px) {
    font-size: 10px;
  }
  font-family: ${FontsEnum.Poppins}, sans-serif;
  font-size: ${commonTextFonts[TextEnum.enum_H6Text].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_H6Text].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_H6Text].fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_H6Text].lineHeight};
`;

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
  @media (max-width: 1140px) {
    font-size: 12px;
    margin: 0 18px;
  }
`;

export const Error = styled.h6<Text>``;
