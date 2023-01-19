import React from "react";
import Brand from "./Brand";
import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <h1 id="hero-title">The Program</h1>
      <Brand handleClick={props.followLink} />
    </div>
  )
}

export default Header;