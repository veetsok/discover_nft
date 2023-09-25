import { ImageEnum } from "../enum";
// import defaultImageSrc from "../../../../assets/icons/Burgers.svg";

const ImageMock = {
  alt: "Демо",
  type: ImageEnum.enum_defaultImage,
};

export default ImageMock;

export const IImagePropsDefault = {
  alt: ImageMock.alt,
  type: ImageMock.type,
};
