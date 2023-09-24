import { TextEnum } from "../../enum";

const commonTextFonts = {
  [TextEnum.enum_H1Text]: {
    fontSize: "75px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "120%",
  },
  [TextEnum.enum_H3Text]: {
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "125%",
  },
  [TextEnum.enum_H4Text]: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  },
  [TextEnum.enum_H6Text]: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
  },
  [TextEnum.enum_aText]: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    textTransform: "uppercase",
  },
};

export default commonTextFonts;
