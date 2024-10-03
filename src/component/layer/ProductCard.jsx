import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiCarSeat, GiGearStickPattern } from "react-icons/gi";

const ProductCard = ({image , title , type ,price , className }) => {
  let [heart , setHeart] = useState(false)
  return (
      <div className={` flex flex-col gap-y-8 font-jakarta bg-white p-6 ${className} `}>
        <div className="top flex justify-between">
          <div className="name flex flex-col gap-y-1">
            <h2 className="font-semibold text-primary-text" >{title}</h2>
            <p className="font-medium text-xs text-secondary-text" >{type}</p>
          </div>
          <div onClick={()=>setHeart(!heart)} className="right">
            <FaHeart className={`${heart?" text-red-500 ":"text-secondary-text"}`} />
          </div>
        </div>
        <div className="detail flex justify-between items-end md:items-start lg:flex-col flex-row gap-y-7 ">
          <div className="img w-3/5 lg:w-full relative after:h-1/2 after:w-full after:absolute after:bottom-0  after:left-0 after:bg-gradient-to-t after:from-white after:to-transparent ">
            <img className="w-full" src={image} alt={image} />
          </div>
          <div className="info  lg:w-full w-[5.5rem] flex justify-between flex-col lg:flex-row gap-y-2 sm:gap-y-3">
            <div className="fuel flex gap-x-1.5 items-center  md:text-sm text-secondary-text">
            <BsFillFuelPumpFill className="md:text-xl text-sm" />
            <p>80L</p>
            </div>
            <div className="transmission flex gap-x-1.5 items-center md:text-sm text-secondary-text">
            <GiGearStickPattern className="md:text-xl text-sm" />
            <p>Manual</p>
            </div>
            <div className="seat flex gap-x-1.5 items-center  md:text-sm text-secondary-text">
            <GiCarSeat className="md:text-xl text-sm" />
            <p>6 People</p>
            </div>
          </div>
        </div>
        <div className="bottom flex justify-between items-center">
          <div className="price">
            <p className="text-xl text-primary-text font-bold" >{price}/<span className="text-sm text-secondary-text" >day</span></p>
          </div>
          <div className="btn">
            <button className="font-semibold py-2.5 px-5 text-white bg-primary rounded-md hover:bg-primary/75 transition-all duration-300" >Rent Now</button>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
