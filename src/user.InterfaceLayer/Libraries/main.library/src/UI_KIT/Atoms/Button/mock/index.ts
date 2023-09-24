import { ButtonEnum } from "../enum";

const ButtonsMock = {
  children: "Демо",
  value: "Демо",
  type: ButtonEnum.enum_blackButton,
};

export default ButtonsMock;

export const IButtonPropsDefault = {
  children: ButtonsMock.children,
  value: ButtonsMock.value,
  type: ButtonsMock.type,
};
