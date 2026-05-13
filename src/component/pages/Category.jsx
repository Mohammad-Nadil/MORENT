import React, { useState, useMemo, useEffect } from "react";
import Container from "../layer/Container";
import Pick2 from "../layer/Pick2";
import { motion } from "framer-motion";
import Paginate from "../Paginate";
import { useSelector } from "react-redux";
import {
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaCross,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";

//  Custom Checkbox
const CheckRow = ({ id, label, count, checked, onChange }) => (
  <label
    htmlFor={id}
    className="flex items-center gap-3 cursor-pointer group py-0.5"
  >
    <div
      className={`w-[18px] h-[18px] rounded-[5px] border-2 flex items-center justify-center flex-shrink-0 transition-all duration-150
      ${checked ? "bg-primary border-primary" : "border-gray-300 group-hover:border-primary bg-white"}`}
    >
      {checked && <FaCheck className="text-white" />}
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
    </div>
    <span
      className={`text-xs xs:text-sm flex-1 transition-colors duration-150 ${checked ? "text-primary font-semibold" : "text-primary-text font-medium group-hover:text-primary"}`}
    >
      {label}
    </span>
    <span
      className={`text-xs xs:text-sm font-semibold px-2 py-0.5 rounded-full transition-colors duration-150
      ${checked ? "bg-primary/10 text-primary" : "bg-gray-100 text-secondary-text"}`}
    >
      {count}
    </span>
  </label>
);

// Accordion Section
const Section = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-100 last:border-none pb-1 last:pb-0">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between py-2 group"
      >
        <span className="text-sm font-bold tracking-wider uppercase text-secondary-text group-hover:text-primary-text transition-colors">
          {title}
        </span>
        <FaChevronUp
          className={`text-secondary-text transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

const Category = () => {
  const allCars = useSelector((state) => state.rent.allCars);

  const [filterOpen, setFilterOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [price, setPrice] = useState(500);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCapacities, setSelectedCapacities] = useState([]);

  const handleFilterChange = (value, state, setState) => {
    setState(
      state.includes(value)
        ? state.filter((i) => i !== value)
        : [...state, value],
    );
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

  const getCount = (key, value) =>
    allCars.filter((car) => car[key].toString() === value.toString()).length;

  const activeCount =
    selectedTypes.length + selectedCapacities.length + (price < 500 ? 1 : 0);

  const clearAll = () => {
    setSelectedTypes([]);
    setSelectedCapacities([]);
    setPrice(500);
  };

  useEffect(() => {
    document.body.style.overflow = filterOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [filterOpen]);

  const sliderFill = (price / 500) * 100;

  // Shared filter panel content
  const FilterContent = () => (
    <div className="flex flex-col sm:flex-row xl:flex-col justify-around sm:gap-4 font-jakarta">
      <Section title="Type">
        {["Sport", "SUV", "Sedan", "Coupe"].map((type) => (
          <CheckRow
            key={type}
            id={`type-${type}`}
            label={type}
            count={getCount("type", type)}
            checked={selectedTypes.includes(type)}
            onChange={() =>
              handleFilterChange(type, selectedTypes, setSelectedTypes)
            }
          />
        ))}
      </Section>
      <Section title="Capacity">
        {[2, 3, 4, 6].map((cap) => (
          <CheckRow
            key={cap}
            id={`cap-${cap}`}
            label={`${cap} Person`}
            count={getCount("seat_capacity", cap)}
            checked={selectedCapacities.includes(cap.toString())}
            onChange={() =>
              handleFilterChange(
                cap.toString(),
                selectedCapacities,
                setSelectedCapacities,
              )
            }
          />
        ))}
      </Section>
    </div>
  );

  return (
    <div className="xl:py-4">
      <Container className="flex flex-col gap-4 ">
        {/* ── BODY */}
        <div className="flex gap-5 items-start">
          {/* DESKTOP SIDEBAR  */}
          <div
            className={`hidden xl:block flex-shrink-0 transition-all duration-300 ease-in-out overflow-hidden
            ${sidebarCollapsed ? "w-0 opacity-0" : "w-[260px] opacity-100"}`}
          >
            <div className="w-[260px] bg-white rounded-2xl border border-gray-100 shadow-sm sticky top-24">
              {/* sidebar header */}
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-gray-100">
                <div className="flex items-center gap-1.5 text-primary-text">
                  <FaFilter className="text-primary" />
                  <span className="text-sm font-bold font-jakarta">
                    Filters
                  </span>
                </div>
                {activeCount > 0 && (
                  <button
                    onClick={clearAll}
                    className="text-[11px] font-semibold text-primary hover:opacity-70 transition-opacity font-jakarta"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <div className="p-4">
                <FilterContent />

                <Section title="Max Price">
                  <div className="pt-2 pb-1 px-3">
                    <div className="flex items-center justify-between ">
                      <span className="text-xs text-secondary-text">$0</span>
                      <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-lg">
                        ${price} / day
                      </span>
                      <span className="text-xs text-secondary-text">$500</span>
                    </div>
                    <div className="relative h-6 flex items-center">
                      <div className="w-full h-1.5 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-primary rounded-full "
                          style={{ width: `${sliderFill}%` }}
                        />
                      </div>
                      <div
                        className="absolute w-4 h-4 bg-white border-[2.5px] border-primary rounded-full shadow-md pointer-events-none"
                        style={{ left: `calc(${sliderFill}% - 8px)` }}
                      />
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="absolute inset-0 w-full opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>
                </Section>
              </div>
            </div>
          </div>

          {/* ── MAIN CONTENT  */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            <div className="flex  items-center justify-between gap-3 pt-3">
              {/* Left: result info */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-secondary-text font-jakarta">
                  <span className="font-bold text-primary-text">
                    {filteredCars.length}
                  </span>{" "}
                  cars found
                </span>
              </div>

              {/* Right: active filter tags (desktop) */}
              <div className=" hidden xl:flex items-center gap-2 flex-wrap">
                {activeCount > 0 && (
                  <>
                    {selectedTypes.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full"
                      >
                        {t}
                        <button
                          onClick={() =>
                            handleFilterChange(
                              t,
                              selectedTypes,
                              setSelectedTypes,
                            )
                          }
                          className="hover:opacity-60"
                        >
                          <IoClose />
                        </button>
                      </span>
                    ))}
                    {selectedCapacities.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full"
                      >
                        {c}P
                        <button
                          onClick={() =>
                            handleFilterChange(
                              c,
                              selectedCapacities,
                              setSelectedCapacities,
                            )
                          }
                          className="hover:opacity-60"
                        >
                          <IoClose />
                        </button>
                      </span>
                    ))}
                    {price < 500 && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                        ≤ ${price}
                        <button
                          onClick={() => setPrice(500)}
                          className="hover:opacity-60"
                        >
                          <IoClose />
                        </button>
                      </span>
                    )}
                    <button
                      onClick={clearAll}
                      className="text-xs font-semibold text-secondary-text hover:text-red-500 transition-colors"
                    >
                      Clear all
                    </button>
                  </>
                )}
              </div>

              {/* Mobile filter button */}
              <button
                onClick={() => setFilterOpen(true)}
                className="xl:hidden flex items-center gap-2 bg-white border border-gray-200 text-primary-text font-semibold text-sm pl-3 pr-4 py-2 rounded-xl shadow-sm font-jakarta"
              >
                <FaFilter className="text-primary" />
                Filter
                {activeCount > 0 && (
                  <span className="bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {activeCount}
                  </span>
                )}
              </button>
            </div>
            <Paginate itemsPerPage={itemsPerPage} cars={filteredCars} />

            {filteredCars.length > itemsPerPage && (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setItemsPerPage((p) => p + 6)}
                className="bg-primary hover:bg-primary/90 text-white font-jakarta font-semibold text-sm py-2.5 px-8 rounded-xl mx-auto transition-colors"
              >
                Show More
              </motion.button>
            )}

            {filteredCars.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="w-14 h-14 bg-primary/8 rounded-2xl flex items-center justify-center mb-4  ">
                  <FaSearch />
                </div>
                <h2 className="text-lg font-bold text-primary-text mb-1 font-jakarta">
                  No cars found
                </h2>
                <p className="text-sm text-secondary-text mb-5">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearAll}
                  className="text-sm font-semibold text-primary border border-primary px-5 py-2 rounded-xl hover:bg-primary/5 transition-colors font-jakarta"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── MOBILE   */}
        {/* Overlay */}
        <div
          onClick={() => setFilterOpen(false)}
          className={`xl:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300  ${filterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        />
        {/* Sheet */}
        <div
          className={`xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out max-h-[95vh] flex flex-col
          ${filterOpen ? "translate-y-0" : "translate-y-full"}`}
        >
          {/* drag handle */}
          <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
            <div className="w-10 h-1 bg-gray-200 rounded-full" />
          </div>
          {/* sheet header */}
          <div className="flex items-center justify-between px-5 border-b border-gray-100 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary-text font-jakarta">
                Filters
              </span>
              {activeCount > 0 && (
                <span className="bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {activeCount}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              {activeCount > 0 && (
                <button
                  onClick={clearAll}
                  className="text-sm font-semibold text-primary font-jakarta"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={() => setFilterOpen(false)}
                className="w-7 h-7 rounded-full mb-1 bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-500"
              >
                <IoClose />
              </button>
            </div>
          </div>
          {/* sheet content */}
          <div className="flex-1 overflow-y-auto px-5 py-1">
            <FilterContent />
            <Section title="Max Price">
              <div className="pt-2 pb-1 px-3">
                <div className="flex items-center justify-between ">
                  <span className="text-xs text-secondary-text">$0</span>
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-lg">
                    ${price} / day
                  </span>
                  <span className="text-xs text-secondary-text">$500</span>
                </div>
                <div className="relative h-6 flex items-center">
                  <div className="w-full h-1.5 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-primary rounded-full "
                      style={{ width: `${sliderFill}%` }}
                    />
                  </div>
                  <div
                    className="absolute w-4 h-4 bg-white border-[2.5px] border-primary rounded-full shadow-md pointer-events-none"
                    style={{ left: `calc(${sliderFill}% - 8px)` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </Section>
          </div>
          {/* sheet footer */}
          <div className="px-5 py-4 border-t border-gray-100 flex-shrink-0">
            <button
              onClick={() => setFilterOpen(false)}
              className="w-full bg-primary text-white font-jakarta font-semibold text-sm py-3 rounded-xl"
            >
              Show {filteredCars.length} Cars
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;
