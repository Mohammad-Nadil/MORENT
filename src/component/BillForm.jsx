import React from "react";
import BillingName from "./BillingName";
import BillingRental from "./BillingRental";
import BillingPayment from "./BillingPayment";

const BillForm = () => {
  return (
    <>
      <div className="billing_form xl:w-2/3 flex flex-col gap-y-8">
        <BillingName />
        <BillingRental/>
        <BillingPayment/>
      </div>
    </>
  );
};

export default BillForm;
