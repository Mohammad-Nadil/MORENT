import React from "react";

const BillingHead = ({title , step}) => {
  return (
    <div className="head flex justify-between gap-x-3 items-end">
      <div className="title flex flex-col w-8/12 gap-y-1">
        <h2 className="font-bold text-xl text-primary-text" >{title}</h2>
        <p className="lowercase font-medium text-sm text-secondary-text ">
          <span className="capitalize">Please  </span> 
           your {title}
        </p>
      </div>
      <div className="step w-4/12 font-medium text-secondary-text">
        <p>Step {step} of 4</p>
      </div>
    </div>
  );
};

export default BillingHead;
