import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export type NavbarMenuProps = {}

const menuList = [
  {
    id: 0,
    icon: "https://www.picng.com/upload/pokemon/png_pokemon_43590.png",
    path: "/home",
  },
  {
    id: 1,
    icon: "https://www.picng.com/upload/pokemon/png_pokemon_43590.png",
    path: "/direct",
  },
  {
    id: 2,
    icon: "https://www.picng.com/upload/pokemon/png_pokemon_43590.png",
    path: "/add-post",
  },
];

export const NavbarMenu = React.memo<NavbarMenuProps>(() => {
  return (
    <div>
      {menuList.map(item => (
          <Link key={item.id} to={item.path}>
            <img className={styles.icon} src={item.icon} />
          </Link>
        ),
      )}
    </div>
  );
});

export default NavbarMenu;

