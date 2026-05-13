import React, { useState } from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import { FaAngleDown, FaAngleUp, FaHeart } from "react-icons/fa";
import Review from "./layer/Review";
import sagor from "/sagor.jpg";
import nadil from "/nadil.jpg";
import saad from "/saad.jpg";
import farhan from "/farhan.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductCard from "./layer/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addToRent } from "../services/features/rent/rentSlice.js";
import Container from "./layer/Container.jsx";

// Dummy reviews data
const reviews = [
  { pic: nadil, name: "Hossainur Rashid", ceo: "Web Developer" },
  { pic: sagor, name: "Sagor Ahmed", ceo: "Executive Director" },
  { pic: farhan, name: "A.J. Farhan", ceo: "Graph Designer" },
  { pic: saad, name: "Mohammad Saad", ceo: "Philosopher" },
];

const Details = () => {
  const navigate = useNavigate();
  const [loadedImages, setLoadedImages] = useState({});

  let [heart, setHeart] = useState(false);
  let [view, setView] = useState(0);

  let [showAll, setShowAll] = useState(false);
  let reviewsToShow = showAll ? reviews.length : 1;

  let car = useSelector((state) => state.rent.allCars);
  let dispatch = useDispatch();
  const { id } = useParams();
  let products = useSelector((state) =>
    state.rent.allCars.find((item) => item.id === Number(id)),
  );
  return (
    <Container>
      {" "}
      <div className="font-jakarta flex flex-col gap-y-5 w-full   pt-4 ">
        <div className="details bg-slate-100 flex flex-col lg:flex-row gap-5 w-full">
          <div className="images flex flex-col  gap-y-2 md:gap-y-3 lg:w-1/2  ">
            <div className="left w-full  relative">
              <img
                className={`w-full aspect-video object-cover object-center  rounded md:rounded-lg relative z-10 duration-300 ${loadedImages[products.gallery[view]] ? "opacity-100 " : "opacity-0"}`}
                src={products.gallery[view]}
                alt="view"
                onLoad={() =>
                  setLoadedImages((prev) => ({
                    ...prev,
                    [products.gallery[view]]: true,
                  }))
                }
              />
              <p className="text-3xl font-bold absolute inset-0 flex justify-center items-center text-primary-text/50 z-0">
                Loading
              </p>
            </div>
            <div className="right  flex gap-2 md:gap-x-3 justify-between w-full">
              {products.gallery.slice(0, 4).map((img, index) => (
                <div
                  key={index}
                  className="flex-auto w-1/3 cursor-pointer aspect-video object-center rounded lg:rounded-lg overflow-hidden object-cover hover:scale-105 duration-300 hover:shadow-lg hover:shadow-gray-400 relative"
                  onClick={() => setView(index)}
                >
                  <img
                    className={`w-full h-full object-cover duration-300 relative z-10 ${loadedImages[img] ? "opacity-100 " : "opacity-0"} ${view === index ? "border-4 border-primary" : ""}`}
                    src={img}
                    alt="car image"
                    onLoad={() =>
                      setLoadedImages((prev) => ({ ...prev, [img]: true }))
                    }
                  />
                  <p className="sm:text-3xl font-bold absolute inset-0 flex justify-center items-center text-primary-text/50 z-0">
                    Loading
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="info flex flex-col gap-y-8 justify-between rounded-xl lg:w-1/2 p-2 sm:p-4 bg-white ">
            <div className="title flex justify-between ">
              <div className="left flex flex-col gap-y-2.5">
                <div className="name text-3xl font-bold text-primary-text ">
                  {products.name}
                </div>
                <div className="review flex items-center gap-x-2">
                  <div className="icon flex gap-x-0.5 text-yellow-400">
                    <GoStarFill />
                    <GoStarFill />
                    <GoStarFill />
                    <GoStarFill />
                    <GoStar />
                  </div>
                  <div className="review-number">
                    <p className="text-sm font-medium text-secondary-text">
                      440+ Reviewer
                    </p>
                  </div>
                </div>
              </div>
              <div onClick={() => setHeart(!heart)} className="right">
                <FaHeart
                  className={` cursor-pointer text-2xl ${
                    heart ? " text-red-500 " : "text-secondary-text"
                  }`}
                />
              </div>
            </div>
            <div className="description">
              <p className="md:text-xl text-primary-text leading-relaxed">
                {products.description}
              </p>
            </div>
            <div className="specification flex flex-col sm:flex-row gap-y-3 sm:gap-20 lg:gap-x-6  sm:text-xl text-primary-text">
              <div className="left flex flex-col gap-y-4 lg:gap-y-2 sm:w-1/2 ">
                <div className="top flex justify-between items-center ">
                  <h2 className="text-secondary-text ">Type Car :</h2>
                  <p className="font-semibold">{products.type}</p>
                </div>
                <div className="bottom flex justify-between items-center ">
                  <h2 className="text-secondary-text ">Capacity :</h2>
                  <p className="font-semibold">
                    {products.seat_capacity} Person
                  </p>
                </div>
              </div>
              <div className="right flex flex-col gap-y-4 lg:gap-y-2 sm:w-1/2 ">
                <div className="top flex justify-between items-center ">
                  <h2 className="text-secondary-text ">Steering :</h2>
                  <p className="font-semibold">{products.transmission}</p>
                </div>
                <div className="bottom flex justify-between items-center ">
                  <h2 className="text-secondary-text ">Gasoline :</h2>
                  <p className="font-semibold">{products.fuel_capacity}L</p>
                </div>
              </div>
            </div>
            <div className="price flex justify-between items-center">
              <div className="mrp font-bold ">
                <h2 className="flex items-center gap-1.5 text-[1.75rem]">
                  ${products.rental_price_per_day}
                  <span className="text-base text-secondary-text">/days</span>
                </h2>
                <p className="text-secondary-text">
                  <del>${products.previous_rental_price}/days</del>
                </p>
              </div>
              <div
                className="btn"
                onClick={() => dispatch(addToRent(products))}
              >
                <Link to="/payment">
                  <button className="text-white bg-primary py-4 px-5 rounded-md hover:bg-primary/75 hover:scale-105 transition-all duration-300">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="review flex flex-col  p-2 bg-white rounded-lg  sm:p-6">
          <div className="head flex gap-x-3 items-center">
            <h2 className="font-semibold text-xl text-primary-text">
              Reviews{" "}
            </h2>
            <p className="text-sm font-bold text-white py-1.5 px-3 bg-primary rounded">
              {reviews.length}
            </p>
          </div>
          <div className="main flex flex-col pt-5 gap-y-8 xl:gap-y-0">
            {reviews.slice(0, reviewsToShow).map((review, index) => (
              <Review
                key={index}
                pic={review.pic}
                name={review.name}
                ceo={review.ceo}
              />
            ))}
          </div>
          <div className="btn flex justify-center ">
            <button
              onClick={() => setShowAll(!showAll)}
              className="py-2.5 px-5 text-secondary-text font-semibold flex items-center gap-x-2 rounded-xl "
            >
              {showAll ? "Show Less" : "Show All"}{" "}
              {showAll ? <FaAngleUp /> : <FaAngleDown />}
            </button>
          </div>
        </div>
        <div className="recent flex flex-col gap-y-4">
          <div className="head flex justify-between items-center">
            {" "}
            <h2 className=" font-semibold text-secondary-text py-2.5 sm:px-5">
              Recommendation Car
            </h2>
            <p>
              <Link
                to="/product"
                className="font-semibold text-primary hover:bg-secondary-text sm:px-5 py-2.5 rounded-md transition-all duration-300"
              >
                View All
              </Link>
            </p>
          </div>
          <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  ">
            {car.slice(0, 4).map((car) => (
              <div
                key={car.id}
                className="lg:last:hidden xl:last:block "
                onClick={() => navigate(`/product/${car.id}`)}
              >
                <ProductCard
                  image={car.image}
                  title={car.name}
                  type={car.type}
                  price={car.rental_price_per_day}
                  transmission={car.transmission}
                  seat={car.seat_capacity}
                  product={car}
                  fuel_capacity={car.fuel_capacity}
                  toLink={""}
                  className="col-span-1 row-span-1 sm:p-3 lg:p-3 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Details;
