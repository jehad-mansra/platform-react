import React from "react";
import { MenuList } from "../items/items";
import MenuItem from "../components/MenuItem";
import '../styles/Menu.css'

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((Item) => {
          return (
            <MenuItem
              key={Item.price}
              name={Item.name}
              price={Item.price}
              image={Item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
