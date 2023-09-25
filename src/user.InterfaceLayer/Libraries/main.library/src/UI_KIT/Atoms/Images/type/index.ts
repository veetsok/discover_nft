import {
  CommonComponentsProps,
  ICommonComponentProps,
} from "../../../../constants/commonComponentProps";
import { ImageEnum } from "../enum";

type ExtendsCommonType = Pick<
  ICommonComponentProps,
  CommonComponentsProps.alt | CommonComponentsProps.src
>;

export interface ImageType extends ExtendsCommonType {
  type: ImageEnum;
  children?: ICommonComponentProps["children"] | string; // TODO: В случае если нужна верстка в button добавить JSX.Element
  isLoading?: boolean;
  isError?: boolean;
  value?: string;
  srcSet?: string;
  background?: string;
}

export interface TestProps {
  type: ImageEnum;
  value?: string;
  isError?: boolean;
  isLoading?: boolean;
}
