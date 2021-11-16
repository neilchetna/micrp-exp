import React from "react";
import "./Login.css";
import ParticlaAni from "../ParticlaAni";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
        <p>
          Create an Account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </>
  );
}
