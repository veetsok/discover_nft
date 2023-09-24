import React from "react";
import NavMenu from "../../Molecules/nav_menu";
import * as ST from "./styled";
import NavInput from "../../Molecules/nav_input";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <ST.Navbar>
      <NavMenu />
      <NavInput />
    </ST.Navbar>
  );
};
export default Navbar;
