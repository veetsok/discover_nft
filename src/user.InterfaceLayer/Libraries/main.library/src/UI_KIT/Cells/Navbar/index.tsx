import React from "react";
import * as ST from "./styled";
import NavMenu from "../../Molecules/NavMenu";
import NavInput from "../../Molecules/NavInput";

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
