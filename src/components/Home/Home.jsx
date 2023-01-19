import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./home.css"

function Home(props) {

  return (
    <div id="home" className={`${props.pageState === true ? "" : "collapsed"}`}>
      <Header followLink={props.followLink}/>
      <div className="content">
        <div className="headline-container">
          <hr className="divider" />
          <h1 className="hero">Be the guy that's always a step ahead</h1>
          <hr className="divider" />
        </div>
        <div className="cta">
          <div>
            <p>Click here to get started</p>
            <button onClick={props.followLink} className="cta-btn">Your Job</button>
          </div>
          <div>
            <p>Or find out how it works!</p>
            <button onClick={props.followLink} className="cta-btn">About</button>
          </div>
        </div>
        <div className="description-card">
          <h2>Why The Program?</h2>
          <p>The objective is to take the job details, do the number crunching, and spit out some cutlists. So take 10 minutes in your truck with a coffee this morning instead of 20 in the cold while Joe Greenguy stares at you chewing on his pencil.</p>
        </div>
      </div>
      <Footer toggleExpansion={props.toggleExpansion} />
    </div>
  )
}

export default Home;