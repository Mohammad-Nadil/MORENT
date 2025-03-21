import React from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import "../../App.css";

const PaymentCard = ({ name, pic, total, tax }) => {
  return (
    <div className="w-full p-6 bg-white rounded-xl">
      <div className="top flex flex-col gap-y-6 md:gap-y-8 border-b pb-6 md:pb-8 border-[#C3D4E966]/40">
        <div className="head flex flex-col gap-y-1 ">
          <p className="font-bold sm:text-xl text-primary-text">
            Rental Summary
          </p>
          <h2 className="font-medium text-xs sm:text-sm text-secondary-text">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </h2>
        </div>
        <div className="info flex gap-x-4 items-center ">
          <div className="img w-[7.25rem] sm:w-[8.25rem] px-2 h-20 sm:h-[6.75rem] payment-bg  flex items-center  rounded-md ">
            <img className="h-auto w-full" src={pic} alt={pic} />
          </div>
          <div className=" flex flex-col gap-y-2.5">
            <div className="name text-xl sm:text-2xl md:text-3xl font-bold text-primary-text ">
              {name}
            </div>
            <div className="review flex flex-wrap items-center gap-x-2">
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
        </div>
      </div>
      <div className="bottom pt-4 md:pt-8 flex flex-col gap-y-8">
        <div className="price flex flex-col gap-y-3 md:gap-y-6">
          <div className="bill flex items-center justify-between">
            <p className="font-medium text-sm md:text-base text-secondary-text">
              Subtotal
            </p>
            <h2 className="font-semibold text-primary-text">${total}</h2>
          </div>
          <div className="tax flex items-center justify-between">
            <p className="font-medium text-sm md:text-base text-secondary-text">
              Tax
            </p>
            <h2 className="font-semibold text-primary-text">${tax}</h2>
          </div>
        </div>
        <form
          className="promo_code text-sm md:text-base py-2.5 sm:py-4 px-2.5 sm:px-8 bg-secondary flex justify-between rounded-lg"
          action=""
        >
          <input
            className="bg-transparent outline-none"
            type="text"
            id="code"
            placeholder="Apply promo code"
          />
          <button
            className="bg-primary hover:bg-primary/60 transition-all duration-300 text-white py-2 px-3 rounded-lg "
            type="submit"
          >
            {" "}
            Apply now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentCard;
