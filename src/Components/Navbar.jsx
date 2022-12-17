import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <Link to={"/"} className="navlinks">
          <img src="https://i.ibb.co/7VYpPDX/Job-Connect.png" alt="logo" /> Home
        </Link>
      </div>

      <div>
        <Link to={"/jobs"} className="navlinks">
          Jobs
        </Link>
      </div>

      <Link to={"/companies"} className="navlinks">
        Companies
      </Link>
      <Link to={"/services"} className="navlinks">
        Services
      </Link>

      <div>
        <Link to={"/login"} className="navlinks">
          <button id="first_btn">Login</button>
        </Link>
        <Link to={"/register"} className="navlinks">
          <button id="second_btn">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
