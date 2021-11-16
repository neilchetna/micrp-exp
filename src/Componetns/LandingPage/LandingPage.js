import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { HiUserGroup } from "react-icons/hi";

export default function LandingPage() {
  return (
    <>
      <p className="bif-text-bottom">
        <span>Microexp</span>
        <span className="">Expression Detection</span>
        <span className="">ANd Posture Estimation</span>
        <span></span>
      </p>
      <Link className="btn btn-2 hover-slide-right" to="/login">
        <span>Start Detecting</span>
      </Link>
      <Link to="/about" className="head-to-about">
        <HiUserGroup className="icon" />
        Creators
      </Link>
    </>
  );
}

//Have to fix color for icon
