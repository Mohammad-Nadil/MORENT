import { div } from "framer-motion/client";
import React, { useState } from "react";

const SideNav = () => {
  // Single state variable to track the active section
  let [activeSection, setActiveSection] = useState(null);

  // Default value of 100
  let [price, setPrice] = useState(100);

  // Function to handle range slider change
  let handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  // Function to toggle sections
  let toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  return (
    <div className=" p-2 xl:p-8 flex justify-between xl:flex-col gap-y-14 font-jakarta relative font-semibold text-primary-text ">
      <div className="flex xl:flex-col  items-center xl:items-start border xl:border-none rounded-md gap-y-0 xl:gap-y-7">
        <p
          onClick={() =>toggleSection("type")}
          className="font-semibold text-sm text-secondary-text p-2 xl:p-0"
        >
          TYPE
        </p>
        <div
          className={` flex flex-col absolute z-50 xl:static top-full  left-0 bg-white border xl:border-none gap-y-3 p-4 xl:p-0 w-52 md:gap-y-5 xl:gap-y-8 transition-all duration-300 ${
            activeSection === "type" ? "opacity-100 visible" : "opacity-0 invisible"
          } xl:visible xl:opacity-100`}
        >
          <div className="flex items-center gap-x-2 ">
            <input
              type="checkbox"
              className="w-5 h-5 "
              name="Sport"
              id="sport"
            />
            <label htmlFor="sport">
              {" "}
              Sport <span className="text-secondary-text">(10)</span>
            </label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input type="checkbox" className="w-5 h-5 " name="SUV" id="SUV" />
            <label htmlFor="SUV">
              {" "}
              SUV <span className="text-secondary-text">(12)</span>
            </label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input type="checkbox" className="w-5 h-5 " name="mvp" id="mvp" />
            <label htmlFor="mvp">
              {" "}
              MPV <span className="text-secondary-text">(16)</span>
            </label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input
              type="checkbox"
              className="w-5 h-5 "
              name="Sedan"
              id="Sedan"
            />
            <label htmlFor="Sedan">
              {" "}
              Sedan <span className="text-secondary-text">(20)</span>
            </label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input
              type="checkbox"
              className="w-5 h-5 "
              name="Coupe"
              id="Coupe"
            />
            <label htmlFor="Coupe">
              {" "}
              Coupe <span className="text-secondary-text">(14)</span>
            </label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input
              type="checkbox"
              className="w-5 h-5 "
              name="Hatchback"
              id="Hatchback"
            />
            <label htmlFor="Hatchback">
              {" "}
              Hatchback <span className="text-secondary-text">(14)</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center xl:items-start  xl:gap-y-7">
        <p
          onClick={() => toggleSection("cap")}
          className="font-semibold border xl:border-none rounded-md text-sm text-secondary-text p-2 xl:p-0"
        >
          CAPACITY
        </p>
        <div
          className={`flex flex-col absolute xl:static bg-white border xl:border-none top-full py-4 px-8 xl:px-0 z-30  gap-y-8 transition-all duration-300 ${
            activeSection === "cap"  ? " opacity-100 visible" : " opacity-0 invisible"
          } xl:opacity-100 xl:visible `}
        >
          <div className="flex items-center gap-x-2 ">
            <input
              type="checkbox"
              className="w-5 h-5 "
              name="2person"
              id="2person"
            />
            <label htmlFor="2person">
              {" "}
              2 Person <span className="text-secondary-text">(10)</span>
            </label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input
              type="checkbox"
              className="w-5 h-5 "
              name="4person"
              id="4person"
            />
            <label htmlFor="4person">
              {" "}
              4 Person <span className="text-secondary-text">(12)</span>
            </label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input
              type="checkbox"
              className="w-5 h-5 "
              name="6person"
              id="6person"
            />
            <label htmlFor="6person">
              {" "}
              6 Person <span className="text-secondary-text">(16)</span>
            </label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input type="checkbox" className="w-5 h-5 " name="8+" id="8+" />
            <label htmlFor="8+">
              {" "}
              8 or More <span className="text-secondary-text">(20)</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-7">
        <p
          onClick={() => toggleSection("price")}
          className="font-semibold text-sm p-2 xl:p-0 border xl:border-none rounded-md text-secondary-text"
        >
          Price
        </p>
        <div
          className={`flex flex-col absolute xl:static top-full right-0 bg-white p-4 xl:p-0 border xl:border-none z-30 w-52 gap-y-3 ${
            activeSection === "price" ? "opacity-100 visible" : " opacity-0 invisible"
          } xl:opacity-100 xl:visible transition-all duration-300 `}
        >
          {" "}
          <input
            type="range"
            min="0"
            max="300"
            value={price}
            onChange={handlePriceChange}
            className="w-full h-3"
          />
          <p className=" text-lg text-gray-600">Max: ${price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
