import React from "react";
import NavMenu from "../../Molecules/nav_menu";
import * as ST from "./styled";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <ST.Navbar>
      <NavMenu />
    </ST.Navbar>
  );
};
export default Navbar;
