import { ButtonEnum } from "../../enum";

const commonButtonFonts = {
  [ButtonEnum.enum_followButton]: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
  },
  [ButtonEnum.enum_blackButton]: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  [ButtonEnum.enum_whiteButton]: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  [ButtonEnum.enum_categoryButton]: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    textTransform: "auto",
  },
  [ButtonEnum.enum_Explore]: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
  },
};

export default commonButtonFonts;
