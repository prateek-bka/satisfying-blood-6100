import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Jobs.css";

const Jobs = () => {
  const [data, setData] = useState([]);

  async function getData() {
    axios.get("http://localhost:8080/jobs").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }

  useEffect(() => {
    getData();
    console.log("data_fetched", data);
  }, []);

  return (
    <div>
      <div className="jobList">
        {data.map((e) => (
          <div key={e.id}>
            <div className="card_container">
              <img src={e.image_link} alt="" />
              <h5>{e.name}</h5>
              <div>
                <p>{`Rs ${e.location}`}</p>
                <button>Apply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
