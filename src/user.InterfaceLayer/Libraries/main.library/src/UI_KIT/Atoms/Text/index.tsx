import React from "react";
import { TextType } from "./type";
import * as ST from "./styled";
import { TextEnum } from "./enum";
import { ITextPropsDefault } from "./mock";

const Text: React.FC<TextType> = (props: TextType) => {
  const { type, title, defaultValue, children } = props;
  if (props.isLoading) return <>Loading</>;
  if (props.isError) return <ST.Error>Ошибка</ST.Error>;
  switch (type) {
    case TextEnum.enum_H1Text: {
      return <ST.TextH1 defaultValue={defaultValue} children={children} />;
    }
    case TextEnum.enum_H2Text: {
      return <ST.TextH2 title={title} children={children} />;
    }
    case TextEnum.enum_H3Text: {
      return <ST.TextH3 title={title} children={children} />;
    }
    case TextEnum.enum_H4Text: {
      return <ST.TextH4 title={title} children={children} />;
    }
    case TextEnum.enum_H5Text: {
      return <ST.TextH5 title={title} children={children} />;
    }
    case TextEnum.enum_H6Text: {
      return <ST.TextH6 title={title} children={children} />;
    }
    default: {
      return <ST.Error>Ошибка</ST.Error>;
    }
  }
};

Text.defaultProps = ITextPropsDefault;
export default Text;
