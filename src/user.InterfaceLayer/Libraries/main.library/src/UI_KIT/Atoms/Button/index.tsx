import React from "react";
import { ButtonType } from "./type";
import * as ST from "./styled";
import { ButtonEnum } from "./enum";
import { IButtonPropsDefault } from "./mock";
import Image from "../Images";
import { ImageEnum } from "../Images/enum";

const Button: React.FC<ButtonType> = (props: ButtonType) => {
  const { children, type, isLoading, src, alt, ...otherProps } = props;
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
        <ST.ButtonCategory isLoading={isLoading} {...otherProps}>
          <Image type={ImageEnum.enum_defaultImage} src={src} alt={alt} />
          {children}
        </ST.ButtonCategory>
      );
    }
    case ButtonEnum.enum_leftArrowButton: {
      return (
        <ST.ButtonLeftArrowButton isLoading={isLoading} {...otherProps}>
          <ST.Image
            src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/LeftArrow.svg"
            alt=""
          />
        </ST.ButtonLeftArrowButton>
      );
    }
    case ButtonEnum.enum_rightArrowButton: {
      return (
        <ST.ButtonRightArrowButton isLoading={isLoading} {...otherProps}>
          <ST.Image
            src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/RightArrow.svg"
            alt=""
          />
        </ST.ButtonRightArrowButton>
      );
    }
    case ButtonEnum.enum_imageButton: {
      return (
        <ST.Image
          src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/RightArrow.svg"
          alt=""
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
