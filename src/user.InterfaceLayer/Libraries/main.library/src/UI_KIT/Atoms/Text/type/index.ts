import {
  CommonComponentsProps,
  ICommonComponentProps,
} from "../../../../constants/commonComponentProps";
import { TextEnum } from "../enum";

type ExtendsCommonType = Pick<
  ICommonComponentProps,
  CommonComponentsProps.title | CommonComponentsProps.defaultValue
>;

export interface TextType extends ExtendsCommonType {
  type: TextEnum;
  children?: ICommonComponentProps["children"] | string; // TODO: В случае если нужна верстка в button добавить JSX.Element
  isError?: boolean;
  isLoading?: boolean;
}

export interface TestProps {
  type: TextEnum;
  title?: string;
  defaultValue?: string;
  isError?: boolean;
  isLoading?: boolean;
}
