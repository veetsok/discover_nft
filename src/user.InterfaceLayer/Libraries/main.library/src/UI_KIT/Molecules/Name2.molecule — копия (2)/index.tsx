import React from "react";
import Text from "../../Atoms/Text";
import Image from "../../Atoms/Images";
import { TextEnum } from "../../Atoms/Text/enum";
import { ImageEnum } from "../../Atoms/Images/enum";

interface ViewAllProps {}

const ViewAll: React.FC<ViewAllProps> = () => {
  return (
    <>
      <Text type={TextEnum.enum_H5Text} />
      <Image type={ImageEnum.enum_defaultImage} />
    </>
  );
};
export default ViewAll;
