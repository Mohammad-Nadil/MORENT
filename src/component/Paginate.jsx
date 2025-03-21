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
            image={item.image || car}
            title={item.name}
            type={item.type}
            price={item.rental_price_per_day}
            transmission={item.transmission}
            seat={item.seat_capacity}
            fuel_capacity={item.fuel_capacity}
            product={item}
            // toLink={`/category/${item.id}`}
            toLink={`/category/details`}
            className="col-span-1 row-span-1"
          />
        ))}
    </>
  );
}

const Paginate = ({ itemsPerPage }) => {
  let allCars = useSelector((state) => state.rent.allCars);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = allCars.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allCars.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allCars.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8  ">
        <Items currentItems={currentItems} />
      </div>
      {/* <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div> */}
    </>
  );
};

export default Paginate;
