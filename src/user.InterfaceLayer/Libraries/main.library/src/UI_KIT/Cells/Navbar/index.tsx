import React from "react";
import Text from "../../Atoms/Text";
import { TextEnum } from "../../Atoms/Text/enum";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const aData = [
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

  return (
    <>
      {aData.map((e) => (
        <Text type={TextEnum.enum_aText} key={e.id} title={e.title} />
      ))}
      <br />
    </>
  );
};
export default Navbar;
