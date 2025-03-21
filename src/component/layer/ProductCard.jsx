import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiCarSeat, GiGearStickPattern } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToRent } from "../../features/rent/rentSlice.js";

const ProductCard = ({
  image,
  title,
  type,
  price,
  className,
  fuel_capacity,
  seat,
  transmission,
  toLink,
  key,
  product,
}) => {
  const [heart, setHeart] = useState(false);
  let dispatch = useDispatch();
  return (
    <div
      key={key}
      className={`relative flex flex-col gap-y-8 font-jakarta bg-white p-6 ${className} `}
    >
      <div className="top flex justify-between relative">
        <div className="name flex flex-col gap-y-1">
          <h2 className="font-semibold text-primary-text">{title}</h2>
          <p className="font-medium text-xs text-secondary-text">{type}</p>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setHeart(!heart);
          }}
          className="favorite  h-full w-1/6 flex justify-end text-2xl cursor-pointer"
        >
          <FaHeart
            className={` ${heart ? "text-red-500" : "text-secondary-text"}`}
          />
        </div>
      </div>

      <Link
        to={toLink}
        className="detail flex justify-between items-end md:items-start lg:flex-col flex-row gap-y-7"
      >
        <div className="img w-3/5 h-16 xl:h-[100px] lg:w-full relative after:h-1/2 after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-white after:to-transparent flex items-end">
          <img className="w-full" src={image} alt="car image" />
        </div>
        <div className="info lg:w-full w-[5.5rem] flex justify-between flex-col lg:flex-row gap-y-2 sm:gap-y-3">
          <div className="fuel flex gap-x-1.5 items-center md:text-sm text-secondary-text">
            <BsFillFuelPumpFill className="md:text-xl text-sm" />
            <p>{fuel_capacity}L</p>
          </div>
          <div className="transmission flex gap-x-1.5 items-center md:text-sm text-secondary-text">
            <GiGearStickPattern className="md:text-xl text-sm" />
            <p>{transmission}</p>
          </div>
          <div className="seat flex gap-x-1.5 items-center md:text-sm text-secondary-text">
            <GiCarSeat className="md:text-xl text-sm" />
            <p>{seat} People</p>
          </div>
        </div>
      </Link>

      <div className="bottom flex justify-between items-center">
        <div className="price">
          <p className="text-xl text-primary-text font-bold">
            {price} $/
            <span className="text-sm text-secondary-text">day</span>
          </p>
        </div>
        <div className="btn" onClick={() => dispatch(addToRent(product))}>
          <Link to="/payment">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="font-semibold py-2.5 px-5 text-white bg-primary rounded-md "
            >
              Rent Now
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
