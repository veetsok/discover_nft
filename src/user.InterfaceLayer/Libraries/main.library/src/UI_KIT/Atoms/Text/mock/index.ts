import { TextEnum } from "../enum";

const TextMock = {
  children: "Демо",
  title: "title",
  type: TextEnum.enum_H1Text,
};

export default TextMock;

export const ITextPropsDefault = {
  children: TextMock.children,
  title: TextMock.title,
  type: TextMock.type,
};
