import React from "react";
import * as ST from "./styled";
import { ImageEnum } from "./enum";
import { ImageType } from "./type";
import { IImagePropsDefault } from "./mock";

const Image: React.FC<ImageType> = (props: ImageType) => {
  const { type, isLoading, src, alt } = props;
  if (props.isLoading) return <>Loading</>;
  if (props.isError) return <ST.Error>Ошибка</ST.Error>;
  switch (type) {
    case ImageEnum.enum_defaultImage: {
      return <ST.Image isLoading={isLoading} src={src} alt={alt} />;
    }
    default: {
      return <ST.Error>Ошибка</ST.Error>;
    }
  }
};

Image.defaultProps = IImagePropsDefault;
export default Image;
