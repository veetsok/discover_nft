import { ImageEnum } from "../enum";
// import defaultImageSrc from "../../../../assets/icons/Burgers.svg";

const ImageMock = {
  alt: "Демо",
  src: "/static/media/src/assets/icons/Burgers.svg",
  type: ImageEnum.enum_defaultImage,
};

export default ImageMock;

export const IImagePropsDefault = {
  src: ImageMock.src,
  alt: ImageMock.alt,
  type: ImageMock.type,
};
