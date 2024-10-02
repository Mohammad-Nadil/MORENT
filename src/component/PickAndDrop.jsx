import React, { useState } from "react";
import Container from "./layer/Container";
import { LuArrowUpDown } from "react-icons/lu";
import { motion } from "framer-motion";

const PickAndDrop = () => {
  let [swap, setSwap] = useState(true);

  return (
    <Container
      className={`py-8 font-jakarta flex justify-between gap-y-12  ${
        swap ? "xl:flex-row flex-col " : "xl:flex-row-reverse flex-col-reverse"
      }`}
    >
      <motion.div
        layout  // Framer Motion's layout prop for smooth position changes
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pick xl:w-[582px] bg-white py-4 sm:py-6 px-3 sm:px-12 flex flex-col gap-y-4"
      >
        <div className="up font-semibold   text-primary-text">
          <p>Pick - Up</p>
        </div>
        <div className="down flex gap-y-4 sm:flex-row">
          <div className="location w-1/3 flex flex-col gap-y-2 pr-2 sm:pr-6 border-r border-[#C3D4E966]">
            <label
              htmlFor="pick-location"
              className="text-primary-text font-bold"
            >
              Locations
            </label>
            <select id="pick-location" className="form-select text-xs sm:text-sm  text-secondary-text">
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>
          </div>
          <div className="date w-1/3 flex flex-col gap-y-2 px-2 sm:px-6">
            <label htmlFor="pick-date" className="text-primary-text font-bold">
              Date
            </label>
            <input className="text-xs sm:text-sm text-secondary-text"  type="date" name="pick-date" id="pick-date" />
          </div>
          <div className="time w-1/3 flex flex-col gap-y-2 pl-2 sm:pl-6 border-l border-[#C3D4E966]">
            <label htmlFor="pick-time" className="text-primary-text font-bold">
              Time
            </label>
            <input  className="text-xs sm:text-sm text-secondary-text" type="time" name="pick-time" id="pick-time" />
          </div>
        </div>{" "}
      </motion.div>
      <div
        className="switch h-14 w-14 rounded-xl bg-primary text-white grid place-content-center text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        onClick={() => setSwap(!swap)}
         aria-label="Swap Pick-Up and Drop-Off"
      >
        <LuArrowUpDown />
      </div>
      <motion.div
         layout  // Framer Motion's layout prop for smooth position changes
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
        className="pick w-full xl:w-[582px] bg-white py-4 sm:py-6 px-2 sm:px-12 flex flex-col gap-y-4"
      >
        <div className="up font-semibold text-primary-text">
          <p>Drop - Off</p>
        </div>
        <div className="down flex">
          <div className="location w-1/3 flex flex-col gap-y-2 pr-2 sm:pr-6 border-r border-[#C3D4E966]">
            <label
              htmlFor="drop-location"
              className="text-primary-text font-bold"
            >
              Locations
            </label>
            <select id="drop-location" className="form-select text-xs sm:text-sm  text-secondary-text">
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>
          </div>
          <div className="date w-1/3 flex flex-col gap-y-2 px-2 sm:px-6">
            <label htmlFor="drop-date" className="text-primary-text font-bold">
              Date
            </label>
            <input className="text-xs sm:text-sm text-secondary-text" type="date" name="drop-date" id="drop-date" />
          </div>
          <div className="time w-1/3 flex flex-col gap-y-2 pl-2 sm:pl-6 border-l border-[#C3D4E966]">
            <label htmlFor="drop-time" className="text-primary-text font-bold">
              Time
            </label>
            <input className="text-xs sm:text-sm text-secondary-text" type="time" name="drop-time" id="drop-time" />
          </div> 
        </div>
      </motion.div>
    </Container>
  );
};

export default PickAndDrop;
