import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "@firebase/auth";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      const user = await createUserWithEmailAndPassword(auth, email, password);
      history("/home");
    } catch {
      setError("Failed to Sign up");
    }

    setLoading(false);
  }

  console.log(error);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Signup Here</h3>

        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit" disabled={loading}>
          Sign up
        </button>
        <p className="bottom-text">
          Already have an Account? <Link to="/login">Login</Link>
        </p>
      </form>
    </>
  );
}
