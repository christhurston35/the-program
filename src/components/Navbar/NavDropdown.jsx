import React, { useState } from "react";
import NavLink from "./NavLink";

function NavDropdown(props) {

  let navItems = props.items;

  return (
    <div className={`dropdown-items ${props.addClass}`}>
      {navItems.map((navItem, index) =>
        <NavLink key={index} item={navItem} handleClick={props.itemClick} />
      )}
    </div>
  )
}

export default NavDropdown;