import React from "react";
import Brand from "./Brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

function followLink() {
  console.log("Hello!")
}

function Header(props) {
  return (
    <div className="header">
    <h1 id="hero-title">The Program</h1>
      <FontAwesomeIcon onClick={props.toggleExpansion} className="hamburger-icon" icon={faBars} />
      <Brand handleClick={followLink} />
    </div>
  )
}

export default Header;