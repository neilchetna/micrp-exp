import React from "react";
import "./Login.css";
import ParticlaAni from "../ParticlaAni";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <form>
        <h3>Signup Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Signup</button>
        <p>
          Already have and Account? <Link to="/login">Login</Link>
        </p>
      </form>
    </>
  );
}
