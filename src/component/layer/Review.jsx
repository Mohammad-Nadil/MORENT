import React from "react";
import { GoStar, GoStarFill } from "react-icons/go";

const Review = ({pic,name, ceo }) => {
  return (
    <div className="flex flex-col gap-y-3 " >
      <div className="about flex justify-between ">
        <div className="reviewer_info flex items-start gap-x-2 sm:gap-x-4">
          <div className="img w-14 aspect-square ">
            <img className=" h-full w-full rounded-full" src={pic} alt={pic} />
          </div>
          <div className="name flex flex-col gap-y-2">
            <h2 className="font-bold text-xl text-primary-text">{name}</h2>
            <p className="font-medium text-sm text-secondary-text">
             {ceo}
            </p>
          </div>
        </div>
        <div className="rating flex flex-col items-end gap-y-2  ">
          <h2 className="font-medium text-sm text-secondary-text">
            21 July 2022
          </h2>
          <div className="flex gap-x-1.5 text-yellow-400">
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStar />
          </div>
        </div>
      </div>
      <div className="comment flex gap-x-4">
        <div className="blank h-14 aspect-square   "></div>
        <h3  className="text-sm text-[#596780] leading-7">
          We are very happy with the service from the MORENT App. Morent has a
          low price and also a large variety of cars with good and comfortable
          facilities. In addition, the service provided by the officers is also
          very friendly and very polite.
        </h3>
      </div>
    </div>
  );
};

export default Review;
