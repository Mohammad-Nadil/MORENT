import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiCarSeat, GiGearStickPattern } from "react-icons/gi";
import image from "/NissanGT-R.png";

const AdminCars = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [price, setPrice] = useState(100);

  // ✅ FIX: heart per card
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <section className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-5/6">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              All Cars
            </h2>
            <p className="text-sm text-gray-500">
              Manage and control all available cars
            </p>
          </div>

          {/* Button */}
          <Link to="/dashboard/editCar">
            <button className="hidden sm:block px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90">
              + Add Car
            </button>
          </Link>
        </div>

        {/* LEFT SIDE (CAR GRID) */}
        <div className="w-full  grid gap-6 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {new Array(12).fill(0).map((_, i) => (
            <div
              key={i}
              className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col h-full"
            >
              {/* TOP */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-semibold text-primary-text">
                    Nissan GT-R
                  </h2>
                  <p className="text-xs text-secondary-text">Sport</p>
                </div>

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(i);
                  }}
                  className="text-xl cursor-pointer"
                >
                  <FaHeart
                    className={
                      favorites[i] ? "text-red-500" : "text-secondary-text"
                    }
                  />
                </div>
              </div>

              {/* IMAGE */}
              <Link
                to={"/dashboard/editCar"}
                className="flex flex-col gap-4 mt-4"
              >
                <div className="w-full aspect-[16/9] flex items-center justify-center">
                  <img
                    className="h-full object-contain group-hover:scale-110 transition duration-300"
                    src={image}
                    alt="car"
                  />
                </div>

                {/* INFO */}
                <div className="flex justify-between text-md text-secondary-text">
                  <div className="flex items-center gap-1">
                    <BsFillFuelPumpFill />
                    <p>70L</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <GiGearStickPattern />
                    <p>Manual</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <GiCarSeat />
                    <p>4</p>
                  </div>
                </div>
              </Link>

              {/* BOTTOM */}
              <div className="flex justify-between items-center mt-auto pt-4">
                <p className="text-lg font-bold text-primary-text">
                  $200 <span className="text-sm text-secondary-text">/day</span>
                </p>

                <Link to="/payment">
                  <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 hover:scale-105 transition duration-300 capitalize">
                    edit
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE (FILTER) */}
      <div className="w-full lg:w-1/6 bg-white p-4 rounded-xl shadow-sm">
        <div className="flex flex-col gap-8 font-semibold text-primary-text">
          {/* TYPE */}
          <div>
            <p
              onClick={() => toggleSection("type")}
              className="text-sm text-secondary-text cursor-pointer mb-3"
            >
              TYPE
            </p>

            <div
              className={`flex flex-col gap-3 transition ${
                activeSection === "type" ? "block" : "hidden lg:block"
              }`}
            >
              {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
                (item, i) => (
                  <label key={i} className="flex items-center gap-2 ">
                    <input type="checkbox" className="w-4 h-4" />
                    {item}
                  </label>
                ),
              )}
            </div>
          </div>

          {/* CAPACITY */}
          <div>
            <p
              onClick={() => toggleSection("cap")}
              className="text-sm text-secondary-text cursor-pointer mb-3"
            >
              CAPACITY
            </p>

            <div
              className={`flex flex-col gap-3 transition ${
                activeSection === "cap" ? "block" : "hidden lg:block"
              }`}
            >
              {["2 Person", "4 Person", "6 Person", "8+ Person"].map(
                (item, i) => (
                  <label key={i} className="flex items-center gap-2 ">
                    <input type="checkbox" className="w-4 h-4" />
                    {item}
                  </label>
                ),
              )}
            </div>
          </div>

          {/* PRICE */}
          <div>
            <p
              onClick={() => toggleSection("price")}
              className="text-sm text-secondary-text cursor-pointer mb-3"
            >
              PRICE
            </p>

            <div
              className={`transition ${
                activeSection === "price" ? "block" : "hidden lg:block"
              }`}
            >
              <input
                type="range"
                min="0"
                max="300"
                value={price}
                onChange={handlePriceChange}
                className="w-full"
              />
              <p className="text-sm text-gray-600 mt-2">Max: ${price}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminCars;
