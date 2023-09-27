import styled from "styled-components";
import commonButtonFonts from "./fonts";
import { ButtonEnum } from "../enum";
import FontsEnum from "../../../../constants/fonts";
import { commonButtonStyles } from "./styles";
import Colors from "../../../../constants/colors";

interface Button {
  isLoading?: boolean;
}

export const Explore = styled.button<Button>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.TRANSPARENT};
  font-family: ${FontsEnum.Poppins};
  font-size: ${commonButtonFonts[ButtonEnum.enum_blackButton].fontSize};
  font-style: ${commonButtonFonts[ButtonEnum.enum_blackButton].fontStyle};
  font-weight: ${commonButtonFonts[ButtonEnum.enum_blackButton].fontWeight};
  line-height: ${commonButtonFonts[ButtonEnum.enum_blackButton].lineHeight};
  & h5 {
    color: #acadb9;
  }
  & img {
    margin-left: 11px;
    width: 10px;
    height: 10px;
  }
`;
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

export const Image = styled.img<Button>``;

export const ButtonLeftArrowButton = styled.button<Button>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 22px 35px 22px 22px;
  border-radius: 18px 0 0 18px;
  background: var(--neutrals-8, #fcfcfd);
  box-shadow: 0px 43px 35px -26px rgba(15, 15, 15, 0.12);
`;

export const ButtonRightArrowButton = styled.button<Button>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 22px 22px 22px 35px;
  border-radius: 0 18px 18px 0;
  background: var(--neutrals-8, #fcfcfd);
  box-shadow: 0px 43px 35px -26px rgba(15, 15, 15, 0.12);
`;

export const ButtonCategory = styled.button<Button>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding: 16px;
  color: var(--greyscale-900, #1a202c);
  border-radius: 13px;
  border: 2px solid #141416;

  font-family:${FontsEnum.Poppins}
  font-size: ${commonButtonFonts[ButtonEnum.enum_categoryButton].fontSize};
  font-style: ${commonButtonFonts[ButtonEnum.enum_categoryButton].fontStyle};
  font-weight: ${commonButtonFonts[ButtonEnum.enum_categoryButton].fontWeight};
  text-transform: ${commonButtonFonts[ButtonEnum.enum_categoryButton].textTransform};
`;


export const Error = styled.button<Button>``;

