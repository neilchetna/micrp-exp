import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signOut, onAuthStateChanged } from "@firebase/auth";
import { auth } from "../Firebase/Firebase";
import Webcam from "react-webcam";

import "./Dashboard.css";

export default function Dashboard() {
  const history = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  async function handleEvent(e) {
    e.preventDefault();

    try {
      await signOut(auth);
      history("/");
    } catch {
      setError("Logout Failed");
    }
  }

  console.log(error);
  return (
    <>
      <div className="dashboard_card">
        Welcome {user === null ? null : user.email}!
        <Webcam />
      </div>
      <button
        onClick={handleEvent}
        className="btn btn-2 hover-slide-right"
        to="/login"
      >
        <span>Log out</span>
      </button>
    </>
  );
}
