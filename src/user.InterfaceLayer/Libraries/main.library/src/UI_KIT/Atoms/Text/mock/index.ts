import { TextEnum } from "../enum";

const TextMock = {
  children: "Демо",
  type: TextEnum.enum_H1Text,
};

export default TextMock;

export const ITextPropsDefault = {
  children: TextMock.children,
  type: TextMock.type,
};
