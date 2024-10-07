import React, { useState } from "react";
import car1 from "/NissanGT-R.png";
import car2 from "/Koenigsegg.png";
import car3 from "/Rolls-Royce.png";
import PaymentCard from "./layer/PaymentCard";

const Bill_Info = () => {
  // Convert payment to a stateful array
  const [payment, setPayment] = useState([
    {
      pic: car1,
      name: "Nissan GT - R",
      total: "80.00",
      tax: "10.00",
    },
    {
      pic: car2,
      name: "Koenigsegg",
      total: "99.00",
      tax: "20.00",
    },
    {
      pic: car3,
      name: "Rolls - Royce",
      total: "96.00",
      tax: "30.00",
    },
  ]);

  // Function to calculate the total rental price (sum of all totals + taxes)
  const calculateTotalAmount = () => {
    return payment.reduce((acc, item) => {
      return acc + parseFloat(item.total) + parseFloat(item.tax);
    }, 0);
  };

  // Function to remove a payment item by index
  const removeItem = (indexToRemove) => {
    const updatedPayment = payment.filter((_, index) => index !== indexToRemove);
    setPayment(updatedPayment);
  };

  const totalAmount = calculateTotalAmount();

  return (
    <div className="pb-8 w-full xl:w-1/3">
      <div className="payment_cards flex flex-col gap-y-6">
        {payment.map((payment, index) => (
          <div key={index} className="relative">
            <PaymentCard
              pic={payment.pic}
              name={payment.name}
              total={payment.total}
              tax={payment.tax}
            />
            <button
              className="absolute top-0 right-0 bg-red-400/75 text-white p-2 rounded"
              onClick={() => removeItem(index)} // Remove item when button is clicked
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
            ${totalAmount.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill_Info;
