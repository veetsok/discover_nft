import { ButtonEnum } from "../../enum";

const commonButtonFonts = {
  [ButtonEnum.enum_blackButton]: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "130%",
    textTransform: "uppercase",
  },
  [ButtonEnum.enum_whiteButton]: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "130%",
    textTransform: "uppercase",
  },
  [ButtonEnum.enum_categoryButton]: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "130%",
    textTransform: "auto",
  },
  [ButtonEnum.enum_arrowButton]: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "100%",
  },
};

export default commonButtonFonts;
