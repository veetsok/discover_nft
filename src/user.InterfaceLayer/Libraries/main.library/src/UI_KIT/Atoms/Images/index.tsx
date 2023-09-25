import React from "react";
import * as ST from "./styled";
import { ImageEnum } from "./enum";
import { ImageType } from "./type";
import { IImagePropsDefault } from "./mock";

const Image: React.FC<ImageType> = (props: ImageType) => {
  const { type, isLoading, background, src, alt } = props;
  if (props.isLoading) return <>Loading</>;
  if (props.isError) return <ST.Error>Ошибка</ST.Error>;
  switch (type) {
    case ImageEnum.enum_defaultImage: {
      return <ST.Image isLoading={isLoading} src={src} alt={alt} />;
    }
    case ImageEnum.enum_backGroundImage: {
      return <ST.ImageBackground background={background} isLoading={isLoading} />;
    }
    default: {
      return <ST.Error>Ошибка</ST.Error>;
    }
  }
};

Image.defaultProps = IImagePropsDefault;
export default Image;
