import React, { useContext } from "react";
import { AppState } from "../../App";
import "./homes.css";

function Homes() {
  const { user } = useContext(AppState); 

  return (
    <div>
      <div className="userinfo">
      <h3>home</h3>
      <h3>how it works</h3>
      <button className="user">
        Welcome, {user.username ? user.username : "Guest"}!
      </button>

      <div className="dropdown">
        <p>Profile</p>
        <p>Settings</p>
        <p>Logout</p>
      </div>
    </div>
    <div>
      <h1>ask question</h1>
    </div>
    </div>
  );
}

export default Homes;
