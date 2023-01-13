import React from "react";
import NavBrand from "./NavBrand";
import NavLink from "./NavLink";
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouseChimney, faCompassDrafting, faFan, faCircleInfo, faCircleUser, faGear } from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "./NavDropdown";

function addClass() {
  console.log("Clicked")
}

function followLink() {
  console.log("Hello!")
}

function Navbar() {

  return (
    <div>
      <div className="header">
        <FontAwesomeIcon className="hamburger-icon" icon={faBars} />
        <NavBrand handleClick={followLink} />
      </div>
      <div className="navbar">
        <div className="top">
          <div className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon={faHouseChimney} />
            <NavLink item="Home" handleClick={followLink} />
          </div>
          <div className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon={faCompassDrafting} />
            <NavLink item="Your Job" handleClick={addClass} />
          </div>
          <div className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon={faFan} />
            <NavLink item="Get Cutting" handleClick={addClass} />
          </div>
          <div className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon={faCircleInfo} />
            <NavLink item="About" handleClick={followLink} />
          </div>
        </div>
        <div className="bottom">
          <div className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon={faGear} />
            <NavLink item="Settings" handleClick={followLink} />
          </div>
          <hr />
          <div className="nav-item">
            <NavLink item="Sign in" handleClick={followLink} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;