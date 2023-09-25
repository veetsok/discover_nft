import React from "react";
import { TextType } from "./type";
import * as ST from "./styled";
import { TextEnum } from "./enum";
import { ITextPropsDefault } from "./mock";

const Text: React.FC<TextType> = (props: TextType) => {
  const { type, children, key, ...otherProps } = props;
  if (props.isLoading) return <>Loading</>;
  if (props.isError) return <ST.Error>Ошибка</ST.Error>;
  switch (type) {
    case TextEnum.enum_H1Text: {
      return <ST.TextH1 key={key} children={children} />;
    }
    case TextEnum.enum_H2Text: {
      return <ST.TextH2 key={key} children={children} />;
    }
    case TextEnum.enum_H3Text: {
      return <ST.TextH3 key={key} children={children} />;
    }
    case TextEnum.enum_H4Text: {
      return <ST.TextH4 key={key} children={children} />;
    }
    case TextEnum.enum_H5Text: {
      return <ST.TextH5 key={key} children={children} />;
    }
    case TextEnum.enum_H6Text: {
      return <ST.TextH6 key={key} children={children} />;
    }
    case TextEnum.enum_aText: {
      return <ST.aText key={key} children={children} {...otherProps} />;
    }
    default: {
      return <ST.Error>Ошибка</ST.Error>;
    }
  }
};

Text.defaultProps = ITextPropsDefault;
export default Text;
