import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

function Footer(props) {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <FontAwesomeIcon onClick={props.toggleExpansion} className="hamburger-icon" icon={faBars} />
      <p className="copyright">{`© ${year} Tight Fit Framing`}</p>
    </div>
  )
}

export default Footer;