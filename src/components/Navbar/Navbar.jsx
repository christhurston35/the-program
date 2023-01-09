import React, { useState } from "react";
import NavBrand from "./NavBrand";
import NavDropdown from "./NavDropdown";
import NavLink from "./NavLink";
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function followLink() {
  console.log("Hello!")
}

function Navbar() {

  const [hidden, setHidden] = useState(true);
  const [subHidden1, setSubHidden1] = useState(true);
  const [subHidden2, setSubHidden2] = useState(true);

  function displayMenu() {
    hidden === true ? setHidden(false) : (setHidden(true), setSubHidden1(true), setSubHidden2(true));
  }

  function displaySubMenu1() {
    subHidden1 === true ? setSubHidden1(false) : setSubHidden1(true);
  }

  function displaySubMenu2() {
    subHidden2 === true ? setSubHidden2(false) : setSubHidden2(true);
  }

  return (
    <div>
      <div className="navbar">
        <FontAwesomeIcon id="menu-icon" icon={faBars} onClick={displayMenu} />
        <NavBrand handleClick={followLink} />
      </div>
      <div style={hidden === true ? { display: "none" } : { display: "flex" }} className="menu-container">
        <NavLink item="About" handleClick={followLink} />
        <NavDropdown
          sectionLabel="Your Job"
          items={["Overview", "Window Schedule", "Wall Heights"]}
          itemClick={followLink}
          style={subHidden1 === true ? { display: "none" } : { display: "flex" }}
          handleClick={displaySubMenu1}
        />
        <NavDropdown
          sectionLabel="Get Cutting"
          items={["Plate Lists", "Wall Lists", "Rake Walls", "Fascia"]}
          itemClick={followLink}
          style={subHidden2 === true ? { display: "none" } : { display: "flex" }}
          handleClick={displaySubMenu2}
        />
      </div>
    </div>
  )
}

export default Navbar;