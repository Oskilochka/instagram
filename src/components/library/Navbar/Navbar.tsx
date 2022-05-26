import React from "react";
import InstaLogo from "./icons/logo.png";
import { NavbarMenu } from "./component";
import { SearchBlock } from "../../general";
import styles from "./styles.module.scss";

export type NavbarProps = {}

export const Navbar = React.memo<NavbarProps>(() => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <img className={styles.logo} src={InstaLogo} alt="logo" />
        <SearchBlock />
        <NavbarMenu />
      </div>
    </div>
  );
});

export default Navbar;

