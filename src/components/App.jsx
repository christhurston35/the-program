import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import "./app.css";

function App() {

  const [pageExpanded, setPageExpanded] = useState(true);
  const [navInView, setNavInView] = useState(false);

  function toggleNavbar() {
    let about = document.getElementById("about");

    if (pageExpanded === true) {
      setPageExpanded(false);
      setNavInView(true);
      about.addEventListener("click", () => {
        setPageExpanded(true);
        setNavInView(false);
      }, { once: true })
    } else if (pageExpanded === false) {
      console.log("Working");
      setPageExpanded(true);
      setNavInView(false);
    }
  }

  function followLink() {
    console.log("Hello!")
  }

  return (
    <>
      <Navbar navState={navInView} toggleSlide={toggleNavbar} followLink={followLink} />
      <About pageState={pageExpanded} toggleExpansion={toggleNavbar} followLink={followLink} />
    </>
  )
}

export default App;