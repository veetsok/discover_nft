import React from "react";
import { ButtonType } from "./type";
import * as ST from "./styled";
import { ButtonEnum } from "./enum";
import { IButtonPropsDefault } from "./mock";
import Image from "../Images";
import { ImageEnum } from "../Images/enum";
import { TextEnum } from "../Text/enum";
import Text from "../Text";

const Button: React.FC<ButtonType> = (props: ButtonType) => {
  const { children, type, isLoading, onClick, src, alt, ...otherProps } = props;
  if (props.isLoading) return <>Loading</>;
  if (props.isError) return <ST.Error>Ошибка</ST.Error>;
  switch (type) {
    case ButtonEnum.enum_blackButton: {
      return <ST.ButtonBlack isLoading={isLoading} children={children} />;
    }
    case ButtonEnum.enum_ExploreBlack: {
      return (
        <ST.ExploreBlack>
          {children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path
              d="M4.98047 11.0703H17.8973"
              stroke="white"
              stroke-width="1.84503"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.4365 4.61328L17.8949 11.0717L11.4365 17.5301"
              stroke="white"
              stroke-width="1.84503"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ST.ExploreBlack>
      );
    }
    case ButtonEnum.enum_svgImage: {
      return (
        <ST.svgButton
          onClick={onClick}
          isLoading={isLoading}
          dangerouslySetInnerHTML={{ __html: children as string }}
        />
      );
    }
    case ButtonEnum.enum_whiteButton: {
      return <ST.ButtonWhite isLoading={isLoading} children={children} />;
    }
    case ButtonEnum.enum_followButton: {
      return <ST.ButtonFollow isLoading={isLoading} children={children} />;
    }
    case ButtonEnum.enum_categoryButton: {
      return (
        <ST.ButtonCategory isLoading={isLoading} {...otherProps}>
          <Image type={ImageEnum.enum_defaultImage} src={src} alt={alt} />
          {children}
        </ST.ButtonCategory>
      );
    }
    case ButtonEnum.enum_Explore: {
      return (
        <ST.Explore isLoading={isLoading} {...otherProps}>
          <Text type={TextEnum.enum_H5Text} children={children} />
          <Image
            type={ImageEnum.enum_defaultImage}
            src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/exploreArrow.svg"
            alt={alt}
          />
        </ST.Explore>
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
