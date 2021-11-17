import React from "react";
import "./About.css";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function AboutCard({
  name,
  roll_no,
  github,
  linkedin,
  photo,
  email,
}) {
  return (
    <>
      <div className="card">
        <img src={photo} alt="#" className="gravatar lark" />
        <h1 className="xxl">{name}</h1>
        <h2 className="sm">{roll_no}</h2>

        <div className="social default">
          <a href={github} target="_blank">
            <AiFillGithub className="fa" />
          </a>
          <a href={linkedin} target="_blank">
            <AiFillLinkedin className="fa" />
          </a>
          <a href={email} target="_blank">
            <AiOutlineMail className="fa" />
          </a>
        </div>
      </div>
    </>
  );
}
// map
