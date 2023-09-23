import { ButtonEnum } from "../enum";

const ButtonsMock = {
  children: "Демо",
  type: ButtonEnum.enum_blackButton,
};

export default ButtonsMock;

export const IButtonPropsDefault = {
  children: ButtonsMock.children,
  type: ButtonsMock.type,
};
