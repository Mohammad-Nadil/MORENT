import React, { Component, useState } from "react";
import Container from "./layer/Container";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ProductCard from "./layer/ProductCard";
import car from "/cr-v.png";
import Koenigsegg from "/Koenigsegg.png";
import RollsRoyce from "/Rolls-Royce.png";
import NissanGT from "/NissanGT-R.png";
import AllNewRush from "/AllNewRush.png";
import MG_ZX_Exclusice from "/MG-ZX-Exclusice.png";

const Popular = () => {
  let [active, setActive] = useState(0);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-x-4 py-5"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 sm:w-5 h-3 sm:h-5 text-transparent  rounded-full  ${
          active == i ? "bg-primary " : "bg-primary/25"
        } `}
      >
        {i + 1}
      </div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
  };
  return (
    <div>
      <Container className="flex justify-between items-center w-full">
        <h2 className=" font-semibold text-secondary-text py-2.5 sm:px-5">
          Popular Cars
        </h2>
        <p>
          <Link
            to="/category"
            className="font-semibold text-primary hover:bg-secondary-text sm:px-5 py-2.5 rounded-md transition-all duration-300"
          >
            View All
          </Link>
        </p>
      </Container>
      <Container>
        <Slider {...settings}>
          <div className="px-2.5">
            <ProductCard
              image={Koenigsegg}
              title="Koenigsegg"
              type="Sport"
              price="99.00"
            />{" "}
          </div>
          <div className="px-2.5">
            <ProductCard
              image={RollsRoyce}
              title="Rolls - Royce"
              type="SUV"
              price="96.00"
            />{" "}
          </div>
          <div className="px-2.5">
            <ProductCard
              image={AllNewRush}
              title="All New Rush"
              type="SUV"
              price="72.00"
            />{" "}
          </div>
          <div className="px-2.5">
            <ProductCard
              image={NissanGT}
              title="Nissan GT-R"
              type="Sport"
              price="80.00"
            />{" "}
          </div>
          <div className="px-2.5">
            <ProductCard
              image={MG_ZX_Exclusice}
              title="MG ZX Excite"
              type="SUV"
              price="74.00"
            />{" "}
          </div>
          <div className="px-2.5">
            <ProductCard
              image={car}
              title="CR - V"
              type="SUV"
              price="80.00"
            />{" "}
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Popular;
