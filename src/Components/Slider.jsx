import React from "react";
import { Carousel } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            onClick={() => navigate("/login")}
            className="h-25 d-block w-75"
            src="https://i.ibb.co/t8BHthY/1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            onClick={() => navigate("/login")}
            className="d-block w-75"
            src="https://i.ibb.co/VjYWffj/2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            onClick={() => navigate("/login")}
            className="d-block w-75"
            src="https://i.ibb.co/BBpdmnP/3.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            onClick={() => navigate("/login")}
            className="d-block w-75"
            src="https://i.ibb.co/XpxKqb5/4.png"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            onClick={() => navigate("/login")}
            className="d-block w-75"
            src="https://i.ibb.co/0Vw0pfL/5.png"
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
