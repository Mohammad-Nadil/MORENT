import React, { useState, useMemo, useEffect } from "react";
import Container from "../layer/Container";
import Pick2 from "../layer/Pick2";
import { motion } from "framer-motion";
import Paginate from "../Paginate";
import { useSelector } from "react-redux";

const Category = () => {
  const allCars = useSelector((state) => state.rent.allCars);
  const [filterOpen, setFilterOpen] = useState(false);

  let [itemsPerPage, setItemsPerPage] = useState(6);
  let [activeSection, setActiveSection] = useState(null);
  let [price, setPrice] = useState(500);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCapacities, setSelectedCapacities] = useState([]);

  const handleFilterChange = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  const filteredCars = useMemo(() => {
    return allCars.filter((car) => {
      const matchType =
        selectedTypes.length === 0 || selectedTypes.includes(car.type);
      const matchCapacity =
        selectedCapacities.length === 0 ||
        selectedCapacities.includes(car.seat_capacity.toString());
      const matchPrice = car.rental_price_per_day <= price;
      return matchType && matchCapacity && matchPrice;
    });
  }, [allCars, selectedTypes, selectedCapacities, price]);

  const getCount = (key, value) => {
    return allCars.filter((car) => car[key].toString() === value.toString())
      .length;
  };

  let increaseItemsPerPage = () => {
    setItemsPerPage(itemsPerPage + 6);
  };

  let handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  let toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section,
    );
  };

  useEffect(() => {
    if (filterOpen) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "static";
    }

    return () => {
      document.body.style.position = "static";
      document.body.style.width = "100%";
    };
  }, [filterOpen]);

  return (
    <div className=" xl:py-3">
      <Container
        className={`flex flex-col xl:flex-row gap-4  bg-secondary relative overflow-x-clip `}
      >
        <div
          onClick={() => setFilterOpen(false)}
          className={`absolute top-0 left-0 w-full h-full bg-black/50  duration-300 z-40 ${
            filterOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        ></div>

        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className={`xl:hidden fixed bottom-0 right-0 -translate-x-1/4 -translate-y-1/2 z-50 bg-primary py-2 font-jakarta font-semibold text-white rounded-full px-4 `}
        >
          filter
        </button>
        <div
          className={`sideBar absolute xl:sticky flex w-3/4 sm:w-full xl:w-1/4 flex-col top-0 z-50 duration-300 rounded xl:touch-none ${
            filterOpen ? " left-0" : "  -left-full"
          } `}
        >
          <div className="p-2 xl:p-6 flex sm:flex-row xl:flex-col justify-between flex-col xl:gap-y-14 font-jakarta relative font-semibold text-primary-text  xl:sticky xl:top-24 bg-white">
            {/* TYPE SECTION */}
            <div className="flex-col  rounded-md gap-y-5   ">
              <p
                onClick={() => toggleSection("type")}
                className="font-semibold text-sm text-secondary-text   cursor-pointer px-2 xl:px-0"
              >
                TYPE
              </p>
              <div
                className={`flex flex-col  bg-white gap-y-3 p-4 xl:p-0     transition-all duration-300 `}
              >
                {["Sport", "SUV", "Sedan", "Coupe"].map((type) => (
                  <div key={type} className="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-primary"
                      id={type}
                      onChange={() =>
                        handleFilterChange(
                          type,
                          selectedTypes,
                          setSelectedTypes,
                        )
                      }
                    />
                    <label htmlFor={type} className="cursor-pointer">
                      {type}{" "}
                      <span className="text-secondary-text">
                        ({getCount("type", type)})
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* CAPACITY SECTION */}
            <div className="flex flex-col   ">
              <p
                onClick={() => toggleSection("cap")}
                className="font-semibold  rounded-md text-sm text-secondary-text px-2 xl:px-0 cursor-pointer"
              >
                CAPACITY
              </p>
              <div
                className={`flex flex-col  p-4 xl:p-0 z-30 gap-y-3 transition-all duration-300  `}
              >
                {[2, 3, 4, 6].map((cap) => (
                  <div key={cap} className="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-primary"
                      id={`cap-${cap}`}
                      onChange={() =>
                        handleFilterChange(
                          cap.toString(),
                          selectedCapacities,
                          setSelectedCapacities,
                        )
                      }
                    />
                    <label htmlFor={`cap-${cap}`} className="cursor-pointer">
                      {cap} Person{" "}
                      <span className="text-secondary-text">
                        ({getCount("seat_capacity", cap)})
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* PRICE SECTION */}
            <div className="flex flex-col gap-y-3 ">
              <p
                onClick={() => toggleSection("price")}
                className="font-semibold text-sm p-2 xl:p-0  rounded-md text-secondary-text cursor-pointer"
              >
                Price
              </p>
              <div className={`flex flex-col  px-4 xl:px-0   `}>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={price}
                  onChange={handlePriceChange}
                  className="w-full h-3 accent-primary cursor-pointer"
                />
                <p className="text-lg text-gray-600">Max: ${price}.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="main w-full xl:w-3/4 gap-8 flex flex-col ">
          <Paginate itemsPerPage={itemsPerPage} cars={filteredCars} />
          {filteredCars.length > itemsPerPage && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={increaseItemsPerPage}
              className="bg-primary text-white py-2 px-6 rounded mx-auto"
            >
              Show More
            </motion.button>
          )}

          {filteredCars.length === 0 && (
            <div className="text-center py-20 bg-white rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary-text">
                No cars found!
              </h2>
              <p className="text-secondary-text">
                Please try different filters.
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
  j;
};

export default Category;
