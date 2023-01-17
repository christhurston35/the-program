import React, { useState } from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import "./app.css";

function App() {

  const [pageExpanded, setPageExpanded] = useState(true);
  const [navInView, setNavInView] = useState(false);

  function toggleNavbar() {
    let home = document.getElementById("home");

    if (pageExpanded === true) {
      setPageExpanded(false);
      setNavInView(true);
      home.addEventListener("click", () => {
        setPageExpanded(true);
        setNavInView(false);
      }, { once: true })
    } else {
      setPageExpanded(true);
      setNavInView(false);
    }
  }

  

  return (
    <>
      <Navbar navState={navInView} toggleSlide={toggleNavbar} />
      <Home homeState={pageExpanded} toggleExpansion={toggleNavbar} />
    </>
  )
}

export default App;