import React from "react";
import InstaLogo from "./icons/logo.png";
import { NavbarMenu } from "./component";
import { SearchBlock } from "../../general";

export type NavbarProps = {}

export const Navbar = React.memo<NavbarProps>(() => {
  return (
    <div>
      <img src={InstaLogo} alt="logo" />
      <SearchBlock />
      <NavbarMenu />
    </div>
  );
});

export default Navbar;

