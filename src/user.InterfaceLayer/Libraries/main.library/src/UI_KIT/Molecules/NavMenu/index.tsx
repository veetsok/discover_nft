import React from "react";
import Text from "../../Atoms/Text";
import { TextEnum } from "../../Atoms/Text/enum";
import Image from "../../Atoms/Images";
import * as ST from "./styled";
import { ImageEnum } from "../../Atoms/Images/enum";

interface NavMenuProps {}
const linkData = [
  {
    id: 1,
    title: "Discover",
  },
  {
    id: 2,
    title: "creators",
  },
  {
    id: 3,
    title: "Sell",
  },
  {
    id: 4,
    title: "stats",
  },
];

const NavMenu: React.FC<NavMenuProps> = () => {
  return (
    <>
      <ST.Logo>
        <Image
          type={ImageEnum.enum_defaultImage}
          src="/src/user.InterfaceLayer/Libraries/main.library/src/assets/icons/Logo.svg"
        />
      </ST.Logo>
      {linkData.map((e) => (
        <Text type={TextEnum.enum_aText} key={`NavMenu ${e.id}`} children={e.title} />
      ))}
    </>
  );
};
export default NavMenu;
