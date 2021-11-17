import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signOut } from "@firebase/auth";
import { auth } from "../Firebase/Firebase";

import "./Dashboard.css";

export default function Dashboard() {
  const history = useNavigate();
  const [error, setError] = useState("");

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
      <div className="dashboard_card"></div>
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
