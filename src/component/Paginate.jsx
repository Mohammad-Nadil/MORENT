import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import car from "/cr-v.png";
import ProductCard from "./layer/ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image || car}
            title={item.name}
            type={item.type}
            price={item.rental_price_per_day}
            transmission={item.transmission}
            seat={item.seat_capacity}
            fuel_capacity={item.fuel_capacity}
            product={item}
            toLink={"/product/" + item.id}
            className="col-span-1 row-span-1"
          />
        ))}
    </>
  );
}

const Paginate = ({ itemsPerPage, cars }) => {
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setItemOffset(0);
  }, [cars]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = cars.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(cars.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cars.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8  ">
        <Items currentItems={currentItems} />
      </div>
    </>
  );
};

export default Paginate;
