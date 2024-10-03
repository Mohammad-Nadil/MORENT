import React from "react";
import Container from "./layer/Container";
import ProductCard from "./layer/ProductCard";
import car from "/cr-v.png";
import { Link } from "react-router-dom";
const Recommendation = () => {
  return (
    <div className="font-jakarta flex flex-col gap-y-5">
      <Container className="flex justify-between items-center w-full">
        <h2 className=" font-semibold text-secondary-text py-2.5 sm:px-5">
          Recomendation Car
        </h2>
        <p>
          <Link
            to=""
            className="font-semibold text-primary hover:bg-secondary-text sm:px-5 py-2.5 rounded-md transition-all duration-300"
          >
            View All
          </Link>
        </p>
      </Container>
      <Container className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-6 xl:gap-8 ">
        <ProductCard image={car} title="CR - V" type="SUV" price="80.00" className="col-span-1 row-span-1" />
        <ProductCard image={car} title="CR - V" type="SUV" price="80.00" className="col-span-1 row-span-1" />
        <ProductCard image={car} title="CR - V" type="SUV" price="80.00" className="col-span-1 row-span-1" />
        <ProductCard image={car} title="CR - V" type="SUV" price="80.00" className="col-span-1 row-span-1" />
        <ProductCard image={car} title="CR - V" type="SUV" price="80.00" className="col-span-1 row-span-1" />
        <ProductCard image={car} title="CR - V" type="SUV" price="80.00" className="col-span-1 row-span-1" />
        <ProductCard image={car} title="CR - V" type="SUV" price="80.00" className="col-span-1 row-span-1" />
        <ProductCard image={car} title="CR - V" type="SUV" price="80.00" className="col-span-1 row-span-1" />
        <ProductCard image={car} title="CR - V" type="SUV" price="80.00" className="col-span-1 row-span-1" />
        <ProductCard image={car} title="CR - V" type="SUV" price="80.00" className="col-span-1 row-span-1" />
        <ProductCard image={car} title="CR - V" type="SUV" price="80.00" className="col-span-1 row-span-1" />
        <ProductCard image={car} title="CR - V" type="SUV" price="80.00" className="col-span-1 row-span-1" />
      </Container>
    </div>
  );
};

export default Recommendation;
