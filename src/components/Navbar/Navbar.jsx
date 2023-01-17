import React from "react";
import NavBrand from "../Header/Brand";
import NavLink from "./NavLink";
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouseChimney, faCompassDrafting, faFan, faCircleInfo, faGear } from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "./NavDropdown";

function followLink() {
  console.log("Hello!")
}

function Navbar(props) {

  return (
    <>
      <div className="navbar-background">
        <div className={`navbar ${props.navState === false ? "hidden" : ""}`}>
          <div className="top">
            <FontAwesomeIcon onClick={props.toggleSlide} className="back-arrow" icon={faArrowLeft} />
          </div>
          <div className="middle">
            <div className="nav-item">
              <FontAwesomeIcon className="nav-icon" icon={faHouseChimney} />
              <NavLink item="Home" handleClick={followLink} />
            </div>
            <div className="nav-item">
              <FontAwesomeIcon className="nav-icon" icon={faCompassDrafting} />
              <NavLink item="Your Job" handleClick={followLink} />
            </div>
            <div className="nav-item">
              <FontAwesomeIcon className="nav-icon" icon={faFan} />
              <NavLink item="Get Cutting" handleClick={followLink} />
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
    </>
  )
}

export default Navbar;