import React from "react";
import PaymentCard from "./layer/PaymentCard";
import { useDispatch, useSelector } from "react-redux";
import { removeFromRent } from "../features/rent/rentSlice.js";

const Bill_Info = () => {
  let items = useSelector((state) => state.rent.toRent);
  let dispatch = useDispatch();

  return (
    <div className="pb-8 w-full xl:w-1/3">
      <div className="payment_cards flex flex-col gap-y-6">
        {items.map((item) => (
          <div key={item.id} className="relative">
            <PaymentCard
              pic={item.image}
              name={item.name}
              total={item.rental_price_per_day}
              tax={item.tax || 0}
            />
            <button
              onClick={() => dispatch(removeFromRent({ id: item.id }))}
              className="absolute top-0 right-0 bg-red-400/75 text-white p-2 rounded"
            >
              Cancel
            </button>
          </div>
        ))}
        <div className="total p-6 bg-white rounded-xl flex justify-between items-center">
          <div className="text flex flex-col gap-y-1">
            <h2 className="font-bold md:text-xl text-primary-text">
              Total Rental Price
            </h2>
            <p className="font-medium text-xs sm:text-sm text-secondary-text">
              Overall price and includes rental discount
            </p>
          </div>
          <div className="amount font-bold text-2xl sm:text-3xl text-primary-text">
            000
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill_Info;
