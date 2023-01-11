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
    <div className="wrapper">
      <div className="navbar">
        <FontAwesomeIcon className="hamburger-icon" icon={faBars} onClick={displayMenu} />
        <NavBrand handleClick={followLink} />
        <div className={`container main ${hidden === true ? "" : "main-clicked"}`}>
          <NavLink item="About" handleClick={followLink} />
          <NavDropdown
            sectionLabel="Your Job"
            items={["Overview", "Window Schedule", "Wall Heights"]}
            itemClick={followLink}
            clickedClass={subHidden1 === true ? "" : "dropdown-items-clicked"}
            handleClick={displaySubMenu1}
          />
          <NavDropdown
            sectionLabel="Get Cutting"
            items={["Plate Lists", "Wall Lists", "Rake Walls", "Fascia"]}
            itemClick={followLink}
            clickedClass={subHidden2 === true ? "" : "dropdown-items-clicked"}
            handleClick={displaySubMenu2}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar;