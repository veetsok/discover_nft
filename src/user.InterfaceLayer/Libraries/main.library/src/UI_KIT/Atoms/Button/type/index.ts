import {
  CommonComponentsProps,
  ICommonComponentProps,
} from "../../../../constants/commonComponentProps";
import { ButtonEnum } from "../enum";

type ExtendsCommonType = Pick<
  ICommonComponentProps,
  CommonComponentsProps.value | CommonComponentsProps.src | CommonComponentsProps.alt
>;

export interface ButtonType extends ExtendsCommonType {
  type: ButtonEnum;
  children?: ICommonComponentProps["children"] | string; // TODO: В случае если нужна верстка в button добавить JSX.Element
  isLoading?: boolean;
  isError?: boolean;
  value?: string;
}

export interface TestProps {
  type: ButtonEnum;
  value?: string;
  isError?: boolean;
  isLoading?: boolean;
}
