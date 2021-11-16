import React from "react";
import { Link } from "react-router-dom";
// import ParticlaAni from "../ParticlaAni";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <p className="bif-text-bottom">
        <span>MicroExp</span>
        <span className="bottom-text">Expression Detection</span>
        <span className="bottom-text">ANd Posture Estimation</span>
        <span></span>
      </p>
      <button className="btn btn-2 hover-slider-right">
        <Link to="/login">Login</Link>
      </button>
    </>
  );
}
