import React from "react";
import { ButtonType } from "./type";
import * as ST from "./styled";
import { ButtonEnum } from "./enum";
import { IButtonPropsDefault } from "./mock";

const Button: React.FC<ButtonType> = (props: ButtonType) => {
  const { children, type, isLoading, ...otherProps } = props;
  if (props.isLoading) return <>Loading</>;
  if (props.isError) return <ST.Error>Ошибка</ST.Error>;
  switch (type) {
    case ButtonEnum.enum_blackButton: {
      return <ST.ButtonBlack isLoading={isLoading} children={children} />;
    }
    case ButtonEnum.enum_whiteButton: {
      return <ST.ButtonWhite isLoading={isLoading} children={children} />;
    }
    case ButtonEnum.enum_categoryButton: {
      return (
        <ST.ButtonCategory isLoading={isLoading} children={children} {...otherProps} />
      );
    }
    case ButtonEnum.enum_leftArrowButton: {
      return (
        <ST.ButtonLeftArrowButton
          isLoading={isLoading}
          children={children}
          {...otherProps}
        />
      );
    }
    case ButtonEnum.enum_rightArrowButton: {
      return (
        <ST.ButtonRightArrowButton
          isLoading={isLoading}
          children={children}
          {...otherProps}
        />
      );
    }
    default: {
      return <ST.Error>Ошибка</ST.Error>;
    }
  }
};

Button.defaultProps = IButtonPropsDefault;
export default Button;
