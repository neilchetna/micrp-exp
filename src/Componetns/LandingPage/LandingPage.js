import React from "react";
import ParticlaAni from "../ParticlaAni";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <ParticlaAni />
      <p className="bif-text-bottom">
        <span>MicroExp</span>
        <span className="bottom-text">Expression Detection</span>
        <span className="bottom-text">ANd Posture Estimation</span>
        <span></span>
      </p>
    </>
  );
}
