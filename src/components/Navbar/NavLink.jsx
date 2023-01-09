import React from "react";

function NavLink(props) {
  return (
    <a className="nav-link" onClick={props.handleClick}>{props.item}</a>
  )
}

export default NavLink;