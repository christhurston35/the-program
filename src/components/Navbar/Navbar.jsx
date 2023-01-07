import React from "react";
import NavBrand from "./NavBrand";
import NavDropdown from "./NavDropdown";
import NavItem from "./NavItem";
import "./navbar.css"

function renderItem() {
  console.log("Hello!")
}

function triggerDrop() {
  console.log("Dropped!")
}

function Navbar(props) {
  return (
    <div className="nav-container">
      <NavBrand />
      <div className="nav-items-container">
        <NavItem item="About" handleClick={renderItem} />
        <NavDropdown
          sectionLabel="Your Job"
          items={["Overview", "Window Schedule", "Wall Heights"]}
          itemClick={renderItem}
          sectionClick={triggerDrop}
        />
        <NavDropdown
          sectionLabel="Get Cutting"
          items={["Plate Lists", "Wall Lists", "Rake Walls", "Fascia"]}
          itemClick={renderItem}
          sectionClick={triggerDrop}
        />
      </div>
    </div>
  )
}

export default Navbar;