import React, { useState } from "react";
import tallTallWall from "../../images/tall-tall-wall.png";
import Header from "../Header/Header";
import "./home.css"

function Home(props) {

  return (
    <div id="home" className={`${props.homeState === true ? "" : "collapsed"}`}>
      <Header toggleExpansion={props.toggleExpansion} />
      <div className="content">
        <h1 className="hero">A tool designed to streamline your job</h1>
        <h3 className="sidekick">Head over to "Your job" to get started, or check out the "About" section to read more on how it works</h3>
      </div>
    </div>
  )
}

export default Home;