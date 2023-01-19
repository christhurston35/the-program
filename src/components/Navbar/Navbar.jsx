import React from "react";
import NavLink from "./NavLink";
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouseChimney, faCompassDrafting, faFan, faCircleInfo, faGear } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {

  return (
    <>
      <div className={`navbar ${props.navState === false ? "hidden" : ""}`}>
        <div className="top">
          <FontAwesomeIcon onClick={props.toggleSlide} className="back-arrow" icon={faArrowLeft} />
        </div>
        <div className="middle">
          <div className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon={faHouseChimney} />
            <NavLink item="Home" handleClick={props.followLink} />
          </div>
          <div className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon={faCompassDrafting} />
            <NavLink item="Your Job" handleClick={props.followLink} />
          </div>
          <div className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon={faFan} />
            <NavLink item="Get Cutting" handleClick={props.followLink} />
          </div>
          <div className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon={faCircleInfo} />
            <NavLink item="About" handleClick={props.followLink} />
          </div>
        </div>
        <div className="bottom">
          <div className="nav-item">
            <FontAwesomeIcon className="nav-icon" icon={faGear} />
            <NavLink item="Settings" handleClick={props.followLink} />
          </div>
          <hr />
          <div className="nav-item">
            <NavLink item="Sign in" handleClick={props.followLink} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;