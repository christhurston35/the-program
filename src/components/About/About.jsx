import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./about.css";

function About(props) {
  return (
    <div id="about" className={`${props.pageState === true ? "" : "collapsed"}`}>
      <Header followLink={props.followLink} />
      <Footer toggleExpansion={props.toggleExpansion} />
    </div>
  )
}

export default About;