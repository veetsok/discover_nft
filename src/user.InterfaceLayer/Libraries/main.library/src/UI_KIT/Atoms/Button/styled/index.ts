import styled from "styled-components";
import commonButtonFonts from "./fonts";
import { ButtonEnum } from "../enum";
import FontsEnum from "../../../../constants/fonts";
import { commonButtonStyles } from "./styles";
import Colors from "../../../../constants/colors";
interface Button {
  isLoading?: boolean;
}

export const ButtonBlack = styled.button<Button>`
  ${commonButtonStyles}
  background: ${Colors.PRIMARY_BLACK};
  color: ${Colors.WHITE};
  font-family: ${FontsEnum.Poppins};
  font-size: ${commonButtonFonts[ButtonEnum.enum_blackButton].fontSize};
  font-style: ${commonButtonFonts[ButtonEnum.enum_blackButton].fontStyle};
  font-weight: ${commonButtonFonts[ButtonEnum.enum_blackButton].fontWeight};
  line-height: ${commonButtonFonts[ButtonEnum.enum_blackButton].lineHeight};
  text-transform: ${commonButtonFonts[ButtonEnum.enum_blackButton].textTransform};
`;

export const ButtonWhite = styled.button<Button>`
${commonButtonStyles}
  border: 2px solid ${Colors.BLACK};
  background: ${Colors.TRANSPARENT};
  color: ${Colors.BLACK};
  font-family:${FontsEnum.Poppins}
  font-size: ${commonButtonFonts[ButtonEnum.enum_whiteButton].fontSize};
  font-style: ${commonButtonFonts[ButtonEnum.enum_whiteButton].fontStyle};
  font-weight: ${commonButtonFonts[ButtonEnum.enum_whiteButton].fontWeight};
  line-height: ${commonButtonFonts[ButtonEnum.enum_whiteButton].lineHeight};
  text-transform: ${commonButtonFonts[ButtonEnum.enum_whiteButton].textTransform};
`;

export const ButtonCategory = styled.button<Button>`

font-family:${FontsEnum.Poppins}
  font-size: ${commonButtonFonts[ButtonEnum.enum_categoryButton].fontSize};
  font-style: ${commonButtonFonts[ButtonEnum.enum_categoryButton].fontStyle};
  font-weight: ${commonButtonFonts[ButtonEnum.enum_categoryButton].fontWeight};
  text-transform: ${commonButtonFonts[ButtonEnum.enum_categoryButton].textTransform};
`;

export const ButtonLeftArrowButton = styled.button<Button>`
  background: url("");
`;

export const ButtonRightArrowButton = styled.button<Button>``;

export const Error = styled.button<Button>``;

