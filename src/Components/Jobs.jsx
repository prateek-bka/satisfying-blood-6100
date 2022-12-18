import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Jobs.css";

const Jobs = () => {
  const [data, setData] = useState([]);

  async function getData() {
    axios.get("https://jobs-json-server.onrender.com/jobs").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }

  useEffect(() => {
    getData();
    // console.log("data_fetched", data);
  }, []);

  return (
    <div>
      <div className="jobproductContainer">
        {data.map((e) => (
          <div key={e.id} className="card_sub_container">
            <div>
              {/* <img src={e.img} alt="err" /> */}
              <h4>{e.title}</h4>
              <div>
                <p>
                  Location: <b>{`${e.location}`}</b>
                </p>
                <p>
                  Experience: <b>{`${e.Experience}`}</b>
                </p>
                <button onClick={() => alert("Applied")}>Apply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
