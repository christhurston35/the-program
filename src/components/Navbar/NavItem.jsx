import React from "react";

function NavItem(props) {
  return (
    <a className="nav-item" onClick={props.handleClick}>{props.item}</a>
  )
}

export default NavItem;