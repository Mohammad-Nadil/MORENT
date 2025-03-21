import React, { useState } from "react";
import Container from "./layer/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiCarSeat, GiGearStickPattern } from "react-icons/gi";
import { motion } from "framer-motion";
import ProductCard from "./layer/ProductCard";

const Recommendation = () => {
  let cars = useSelector((state) => state.rent.allCars);
  return (
    <div className="font-jakarta flex flex-col gap-y-5">
      <Container className="flex justify-between items-center w-full">
        <h2 className=" font-semibold text-secondary-text py-2.5 sm:px-5">
          Recommendation Car
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
      <Container className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-6 xl:gap-8 ">
        {cars.map((car) => (
          <ProductCard
            key={car.id}
            title={car.name}
            image={car.image}
            type={car.type}
            price={car.rental_price_per_day}
            transmission={car.transmission}
            seat={car.seat_capacity}
            fuel_capacity={car.fuel_capacity}
            // toLink={`/category/${car.id}`}
            toLink={`/category/details`}
            product={car}
          />
        ))}
      </Container>
    </div>
  );
};

export default Recommendation;
