import React, { useState } from "react";
import NavLink from "./NavLink";

function NavDropdown(props) {

  let navItems = props.items;

  return (
    <div className="container dropdown-container">
      <a className="nav-link" onClick={props.handleClick}>{props.sectionLabel} +</a>
      <div className={`container dropdown-items ${props.clickedClass}`}>
        {navItems.map((navItem, index) =>
          <NavLink key={index} item={navItem} handleClick={props.itemClick} />
        )}
      </div>
    </div>
  )
}

export default NavDropdown;