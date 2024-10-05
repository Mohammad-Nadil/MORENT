import React from "react";
import BillingHead from "./layer/BillingHead";

const Input = ({title , heading})=>{
    return(
        
      <div className=" flex flex-col gap-y-6">
      <h2 className="font-semibold text-primary-text">{heading}</h2>
      <div className="inputs grid md:grid-cols-2 md:grid-rows-2 gap-y-6 gap-x-8">
        <div className="location flex flex-col gap-y-3 md:gap-y-4 ">
          <label
            htmlFor={`${title}-location`}
            className="text-primary-text font-bold"
          >
            Locations
          </label>
          <select
          name={`${title}-location`}
            id={`${title}-location`}
            className="form-select bg-[#F6F7F9] text-sm py-4 px-8  text-secondary-text outline-none rounded-xl"
          >
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
          </select>
        </div>
        <div className="date flex flex-col gap-y-3 md:gap-y-4">
          <label htmlFor={`${title}-date`} className="text-primary-text font-bold">
            Date
          </label>
          <input
            className="text-sm py-4 px-8 bg-[#F6F7F9] text-secondary-text rounded-xl outline-none"
            type="date"
            name={`${title}-date`}
            id={`${title}-date`}
          />
        </div>
        <div className="time flex flex-col gap-y-3 md:gap-y-4">
          <label htmlFor={`${title}-time`} className="text-primary-text font-bold">
            Time
          </label>
          <input
            className="text-sm py-4 bg-[#F6F7F9] px-8 rounded-xl text-secondary-text outline-none"
            type="time"
            name={`${title}-time`}
            id={`${title}-time`}
          />
        </div>
      </div>
    </div>
    )
}

const BillingRental = () => {
  return (
    <div className="bg-white p-6 rounded-xl flex flex-col gap-y-8">
      <BillingHead title="Rental Info" step="2" />
      <Input title="pick" heading="Pick - Up" />
      <Input title="drop" heading="Drop - Off" />
    </div>
  );
};

export default BillingRental;
