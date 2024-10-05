import React, { useState } from "react";
import mainPic from "../assets/main.jpg";
import view1 from "../assets/View1.jpg";
import view2 from "../assets/View2.jpg";
import view3 from "../assets/View3.jpg";
import { GoStar, GoStarFill } from "react-icons/go";
import { FaAngleDown, FaAngleUp, FaHeart } from "react-icons/fa";
import Review from "./layer/Review";
import sagor from "/sagor.jpg";
import nadil from "/nadil.jpg";
import saad from "/saad.jpg";
import farhan from "/farhan.jpg";

// Dummy reviews data
const reviews = [
  { pic: nadil, name: "Hossainur Rashid" , ceo:"CEO  of  nothing" },
  { pic: sagor, name: "Sagor Ahmed" , ceo:"CEO  of  his crush 💖" },
  { pic: farhan, name: "A.J. Farhan" , ceo:"CEO  of  Amazon" },
  { pic: saad, name: "Mohammad Saad" , ceo:"CEO  of  Jamia" },
  // Add more review data here
];

const Details = () => {
  let [heart, setHeart] = useState(false);
  let [view, setView] = useState(mainPic); // Initialize with mainPic

  let [showAll, setShowAll] = useState(false); // State to control showing all reviews

  // Number of reviews to display initially
  let reviewsToShow = showAll ? reviews.length : 1;

  return (
    <div className="font-jakarta flex flex-col gap-y-8 w-full xl:w-3/4 pt-6 xl:p-8 ">
      <div className="details bg-slate-100 flex flex-col lg:flex-row gap-8 w-full">
        <div className="images flex flex-col  gap-y-4 md:gap-y-6 lg:w-1/2  ">
          <div className="top w-full  ">
            <img
              className="w-full aspect-[10/7.5] rounded-3xl "
              src={view}
              alt="view"
            />
          </div>
          <div className="bottom flex gap-x-6 justify-between w-full ">
            <div
              className="flex-auto cursor-pointer"
              onClick={() => setView(mainPic)}
            >
              <img className="w-full" src={view1} alt="View 1 of Nissan GT-R" />
            </div>
            <div
              className="flex-auto cursor-pointer"
              onClick={() => setView(view2)}
            >
              <img className="w-full" src={view2} alt="view" />
            </div>
            <div
              className="flex-auto cursor-pointer"
              onClick={() => setView(view3)}
            >
              <img className="w-full" src={view3} alt="view" />
            </div>
          </div>
        </div>
        <div className="info flex flex-col gap-y-8 justify-between rounded-xl lg:w-1/2 sm:p-6 bg-white ">
          <div className="title flex justify-between ">
            <div className="left flex flex-col gap-y-2.5">
              <div className="name text-3xl font-bold text-primary-text ">
                {" "}
                Nissan GT - R
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
            <p className="text-xl text-primary-text leading-9">
              NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
            </p>
          </div>
          <div className="specification flex flex-col sm:flex-row gap-y-4 sm:gap-20 lg:gap-x-6 text-xl text-primary-text">
            <div className="left flex flex-col gap-y-4 lg:gap-y-2 sm:w-1/2 ">
              <div className="top flex justify-between items-center ">
                <h2 className="text-secondary-text ">Type Car :</h2>
                <p className="font-semibold">Sport</p>
              </div>
              <div className="bottom flex justify-between items-center ">
                <h2 className="text-secondary-text ">Capacity :</h2>
                <p className="font-semibold">2 Person</p>
              </div>
            </div>
            <div className="right flex flex-col gap-y-4 lg:gap-y-2 sm:w-1/2 ">
              <div className="top flex justify-between items-center ">
                <h2 className="text-secondary-text ">Steering :</h2>
                <p className="font-semibold">Manual</p>
              </div>
              <div className="bottom flex justify-between items-center ">
                <h2 className="text-secondary-text ">Gasoline :</h2>
                <p className="font-semibold">70L</p>
              </div>
            </div>
          </div>
          <div className="price flex justify-between items-center">
            <div className="mrp font-bold ">
              <h2 className="flex items-center gap-1.5 text-[1.75rem]">
                $80.00
                <span className="text-base text-secondary-text">days</span>
              </h2>
              <p className="text-secondary-text">
                <del>$100.00</del>
              </p>
            </div>
            <div className="btn">
              <button className="text-white bg-primary py-4 px-5 rounded-md hover:bg-primary/75 transition-all duration-300">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="review flex flex-col gap-y-8  sm:p-6">
        <div className="head flex gap-x-3 items-center">
          <h2 className="font-semibold text-xl text-primary-text">Reviews </h2>
          <p className="text-sm font-bold text-white py-1.5 px-3 bg-primary rounded">
            {reviews.length}
          </p>
        </div>
        <div className="main flex flex-col gap-y-12">
          {reviews.slice(0, reviewsToShow).map((review, index) => (
            <Review key={index} pic={review.pic} name={review.name} ceo={review.ceo} />
          ))}
        </div>
        <div className="btn flex justify-center ">
          <button  onClick={() => setShowAll(!showAll)} className="py-2.5 px-5 text-secondary-text font-semibold flex items-center gap-x-2 rounded-xl ">
          {showAll ? "Show Less" : "Show All"}{" "}
          {showAll ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
