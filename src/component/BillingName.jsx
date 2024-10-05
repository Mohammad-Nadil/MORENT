import React from "react";
import BillingHead from "./layer/BillingHead";

const Input = ({ title, type }) => {
  return (
    <div className=" flex flex-col gap-y-4">
      <label htmlFor="name" className="font-semibold text-primary-text">
        {title}
      </label>
      <input
        id="name"
        className="py-4 px-8 bg-[#F6F7F9] rounded-xl outline-none "
        type={type}
        placeholder={title}
      />
    </div>
  );
};

const BillingName = () => {
  return (
    <div className="p-6 bg-white flex flex-col gap-y-8 rounded-xl">
      <BillingHead title="Billing Info" step="1" />
      <div className="inputs grid md:grid-cols-2 md:grid-rows-2 gap-x-8 gap-y-6">
        <Input title="Your name" type="text" />
        <Input title="Phone Number" type="number" />
        <Input title="Address" type="text" />
        <Input title="Town or city" type="text" />
      </div>
    </div>
  );
};

export default BillingName;
