import React from "react";
import { Link } from "react-router-dom";

export type NavbarMenuProps = {}

const menuList = [
  {
    id: 0,
    icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhometarget.gr%2Fru&psig=AOvVaw2kRy_J0Mjf-oeDINDYJwLk&ust=1653601997824000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJC83s_R-_cCFQAAAAAdAAAAABAD",
    path: "/home",
  },
  {
    id: 1,
    icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhometarget.gr%2Fru&psig=AOvVaw2kRy_J0Mjf-oeDINDYJwLk&ust=1653601997824000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJC83s_R-_cCFQAAAAAdAAAAABAD",
    path: "/direct",
  },
  {
    id: 2,
    icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhometarget.gr%2Fru&psig=AOvVaw2kRy_J0Mjf-oeDINDYJwLk&ust=1653601997824000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJC83s_R-_cCFQAAAAAdAAAAABAD",
    path: "/add-post",
  },
];

export const NavbarMenu = React.memo<NavbarMenuProps>(() => {
  return (
    <div>
      {menuList.map(item => (
          <Link key={item.id} to={item.path}>
            {item.icon}
          </Link>
        ),
      )}
    </div>
  );
});

export default NavbarMenu;

