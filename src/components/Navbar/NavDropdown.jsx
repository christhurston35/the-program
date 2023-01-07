import React from "react";
import NavItem from "./NavItem";

function NavDropdown(props) {
  let navItems = props.items;

  return (
    <div className="drop-container">
      <button className="drop-button" onClick={props.sectionClick}>{props.sectionLabel}</button>
      {navItems.map((navItem, index) =>
        <NavItem key={index} item={navItem} handleClick={props.itemClick} />
      )}
    </div>
  )
}

export default NavDropdown;