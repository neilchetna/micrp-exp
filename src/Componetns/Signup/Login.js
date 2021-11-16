import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

export default function Login() {
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
      const user = await signInWithEmailAndPassword(auth, email, password);
      history("/home");
    } catch {
      setError("Failed to Log in");
    }

    setLoading(false);
  }

  console.log(error);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          Log In
        </button>
        <p className="bottom-text">
          Create an Account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </>
  );
}
