import React from "react";
import { ButtonType } from "./type";
import * as ST from "./styled";
import { ButtonEnum } from "./enum";
import { IButtonPropsDefault } from "./mock";

const Button: React.FC<ButtonType> = (props: ButtonType) => {
  const { children, type, isLoading, value } = props;
  if (props.isLoading) return <>Loading</>;
  if (props.isError) return <ST.Error>Ошибка</ST.Error>;
  switch (type) {
    case ButtonEnum.enum_blackButton: {
      return <ST.ButtonBlack isLoading={isLoading} children={children} value={value}/>;
    }
    case ButtonEnum.enum_whiteButton: {
      return <ST.ButtonWhite isLoading={isLoading} children={children} value={value} />;
    }
    case ButtonEnum.enum_categoryButton: {
      return <ST.ButtonCategory isLoading={isLoading} children={children} value={value}/>;
    }
    default: {
      return <ST.Error>Ошибка</ST.Error>;
    }
  }
};

Button.defaultProps = IButtonPropsDefault;
export default Button;
