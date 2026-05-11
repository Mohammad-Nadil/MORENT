import React, { useState, useMemo } from "react";
import Container from "../layer/Container";
import Pick2 from "../layer/Pick2";
import { motion } from "framer-motion";
import Paginate from "../Paginate";
import { useSelector } from "react-redux";

const Category = () => {
  const allCars = useSelector((state) => state.rent.allCars);

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

  return (
    <div className=" xl:py-3">
      <Container className="flex flex-col xl:flex-row gap-4  bg-secondary">
        <div className="sideBar flex xl:w-1/4 flex-col ">
          <div className="p-2 xl:p-8 flex justify-between xl:flex-col gap-y-14 font-jakarta relative font-semibold text-primary-text xl:bg-white ">
            {/* TYPE SECTION */}
            <div className="flex xl:flex-col items-center xl:items-start  rounded-md gap-y-5   ">
              <p
                onClick={() => toggleSection("type")}
                className="font-semibold text-sm text-secondary-text   cursor-pointer"
              >
                TYPE
              </p>
              <div
                className={`flex flex-col absolute z-50 xl:static top-full left-0 bg-white border xl:border-none gap-y-3 p-4 xl:p-0     transition-all duration-300 ${activeSection === "type" ? "opacity-100 visible" : "opacity-0 invisible"} xl:visible xl:opacity-100`}
              >
                {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
                  (type) => (
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
                  ),
                )}
              </div>
            </div>

            {/* CAPACITY SECTION */}
            <div className="flex flex-col items-center xl:items-start  ">
              <p
                onClick={() => toggleSection("cap")}
                className="font-semibold  rounded-md text-sm text-secondary-text p-2 xl:p-0 cursor-pointer"
              >
                CAPACITY
              </p>
              <div
                className={`flex flex-col absolute xl:static bg-white border xl:border-none top-full py-4 px-8 xl:px-0 z-30 gap-y-3 transition-all duration-300 ${activeSection === "cap" ? " opacity-100 visible" : " opacity-0 invisible"} xl:opacity-100 xl:visible `}
              >
                {[2, 4, 5, 6, 7, 8].map((cap) => (
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
              <div
                className={`flex flex-col absolute xl:static top-full right-0 bg-white p-4 xl:p-0 border xl:border-none z-30 w-52  ${activeSection === "price" ? "opacity-100 visible" : " opacity-0 invisible"} xl:opacity-100 xl:visible transition-all duration-300 `}
              >
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
          <Pick2 className="w-full" />

          {/* Paginate ke filteredCars pass korchi */}
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
};

export default Category;
