import React from "react";
import logo from "../../images/tff-logo.png";

function NavBrand(props) {
  return (
    <img className="logo" src={logo} alt="tff-logo" onClick={props.handleClick}></img>
  )
}

export default NavBrand;