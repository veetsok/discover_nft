import React, { ReactNode } from "react";

export enum CommonComponentsProps {
  isLoading = "isLoading",
  onChange = "onChange",
  isError = "isError",
  onError = "onError",
  onSubmit = "onSubmit",
  onClick = "onClick",
  onToggle = "onToggle",
  value = "value",
  type = "type",
  children = "children",
  placeholder = "placeholder",
  disabled = "disabled",
  label = "label",
  id = "id",
  key = "key",
  src = "src",
  alt = "alt",
  className = "className",
  style = "style",
  required = "required",
  min = "min",
  max = "max",
  step = "step",
  options = "options",
  multiple = "multiple",
  rows = "rows",
  cols = "cols",
  maxLength = "maxLength",
  minLength = "minLength",
  pattern = "pattern",
  autoFocus = "autoFocus",
  isSuccess = "isSuccess",
  dateFormat = "dateFormat",
  timeFormat = "timeFormat",
  title = "title",
  defaultValue = "defaultValue",
}

export interface ICommonComponentProps {
  [CommonComponentsProps.onChange]?: () => void;
  [CommonComponentsProps.isError]?: boolean;
  [CommonComponentsProps.isLoading]?: boolean;
  [CommonComponentsProps.isSuccess]?: boolean;
  [CommonComponentsProps.onError]?: () => void;
  [CommonComponentsProps.onSubmit]?: () => void;
  [CommonComponentsProps.onClick]?: () => void;
  [CommonComponentsProps.onToggle]?: () => void;
  [CommonComponentsProps.value]?: string | number | undefined;
  [CommonComponentsProps.defaultValue]?: string | number | undefined;
  [CommonComponentsProps.dateFormat]?: string;
  [CommonComponentsProps.title]?: string;
  [CommonComponentsProps.timeFormat]?: string;
  [CommonComponentsProps.type]?: string;
  [CommonComponentsProps.src]?: string;
  [CommonComponentsProps.alt]?: string;
  [CommonComponentsProps.children]?: JSX.Element | ReactNode; //TODO Проблема с выбором типа
  [CommonComponentsProps.placeholder]?: string;
  [CommonComponentsProps.disabled]?: boolean;
  [CommonComponentsProps.label]?: string;
  [CommonComponentsProps.id]?: string;
  [CommonComponentsProps.className]?: string;
  [CommonComponentsProps.style]?: React.CSSProperties;
  [CommonComponentsProps.required]?: boolean;
  [CommonComponentsProps.key]?: number;
  [CommonComponentsProps.min]?: number;
  [CommonComponentsProps.max]?: number;
  [CommonComponentsProps.step]?: number;
  [CommonComponentsProps.options]?: Array<{
    label: string;
    value: string | number | undefined;
  }>; // Используем value для определения значения выбора
  [CommonComponentsProps.multiple]?: boolean;
  [CommonComponentsProps.rows]?: number;
  [CommonComponentsProps.cols]?: number;
  [CommonComponentsProps.maxLength]?: number;
  [CommonComponentsProps.minLength]?: number;
  [CommonComponentsProps.pattern]?: string;
  [CommonComponentsProps.autoFocus]?: boolean;
}
