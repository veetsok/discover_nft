import React from "react";
import Text from "../../Atoms/Text";
import { TextEnum } from "../../Atoms/Text/enum";

interface NavMenuProps {}

const NavMenu: React.FC<NavMenuProps> = () => {
  return (
    <>
      <Text type={TextEnum.enum_aText}></Text>
    </>
  );
};
export default NavMenu;
