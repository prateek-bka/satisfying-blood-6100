import React from "react";
import Slider from "../Components/Slider";
import "../styles/Home.css";

import { useNavigate } from "react-router-dom";

const HomeContainer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="homeContainer_div_1">
        <h1>Find your dream job now</h1>
        <h4>2 lakh+ jobs for you to explore</h4>
        <input
          type="text"
          name=""
          id="homeContainer_div_1_input"
          placeholder="Enter Skills"
        />
        <button id="homeContainer_div_1_btn">Search</button>
      </div>

      <div className="homeContainer_div_2">
        <Slider />
      </div>

      <div className="homeContainer_div_3">
        <h2>Top companies hiring now</h2>
        <img
          onClick={() => navigate("/jobs")}
          src="https://i.ibb.co/pbjfD04/companies.jpg"
          alt=""
        />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default HomeContainer;
