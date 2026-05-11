import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiCarSeat, GiGearStickPattern } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToRent } from "../../services/features/rent/rentSlice.js";

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
  product,
  priceClassName,
}) => {
  const [heart, setHeart] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  let dispatch = useDispatch();
  return (
    <div
      className={`relative group flex flex-col md:gap-y-4 xl:gap-y-5 font-jakarta bg-white p-3 lg:p-4 rounded-lg duration-300 hover:drop-shadow-xl ${className} `}
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
        <div className="img w-3/5 md:w-8/12  xl:h-[100px] lg:w-full relative after:h-1/2 after:w-full after:absolute after:bottom-0 after:left-0 after:z-30 after:bg-gradient-to-t after:from-white after:to-transparent flex items-end group-hover:scale-110 duration-300">
          <img
            className={`w-full lg:aspect-[10/4] object-contain  relative z-20 duration-300 ${imgLoaded ? "opacity-100 " : "opacity-0"}`}
            src={image}
            alt="car image"
            onLoad={() => setImgLoaded(true)}
          />
          <p className="absolute font-bold text-primary-text/50 inset-0 flex justify-center items-center text-4xl z-10">
            Loading
          </p>
        </div>
        <div className="info lg:w-full  flex justify-between flex-col lg:flex-row gap-y-2 sm:gap-y-3">
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

      <div className="bottom flex justify-between items-center pt-5 lg:pt-0">
        <div className="price">
          <p
            className={`text-xl text-primary-text font-bold ${priceClassName} `}
          >
            {price} $/
            <span className="text-sm text-secondary-text">day</span>
          </p>
        </div>
        <div className="btn" onClick={() => dispatch(addToRent(product))}>
          <Link to="/payment">
            <button className="font-semibold py-2 px-3 text-white bg-primary rounded-md hover:scale-110 duration-300 hover:text-white/80 ">
              Rent Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
