import React, { useState } from "react";
import BillingHead from "./layer/BillingHead";
import Input from "./layer/Input";
import safety from "/safetyLogo.png";
import visa from "/visa.png";
import paypal from "/paypal.png";
import bitcoin from "/bitcoin.png";

const BillForm = () => {

  let [ show , setShow] = useState(false)

  let [name, setName] = useState("");
  let [nameErr, setNameErr] = useState(true);
  let manageName = (element) => {
    setName(element.target.value);
    setNameErr("");
  };

  let [inpNumber, setInpNumber] = useState("");
  let [inpNumberErr, setInpNumberErr] = useState(true);
  let manageInpNumber = (element) => {
    setInpNumber(element.target.value);
    setInpNumberErr("");
  };

  let [address, setAddress] = useState("");
  let [addressErr, setAddressErr] = useState(true);
  let manageAddress = (element) => {
    setAddress(element.target.value);
    setAddressErr("");
  };

  let [city, setCity] = useState("");
  let [cityErr, setCityErr] = useState("");
  let manageCity = (element) => {
    setCity(element.target.value);
    setCityErr("");
  };

  let [pickDate, setPickDate] = useState("");
  let [pickDateErr, setPickDateErr] = useState("");
  let managePickDate = (element) => {
    setPickDate(element.target.value);
    setPickDateErr("");
  };

  let [pickTime, setPickTime] = useState("");
  let [pickTimeErr, setPickTimeErr] = useState("");
  let managePickTime = (element) => {
    setPickTime(element.target.value);
    setPickTimeErr("");
  };

  let [dropDate, setDropDate] = useState("");
  let [dropDateErr, setDropDateErr] = useState("");
  let manageDropDate = (element) => {
    setDropDate(element.target.value);
    setDropDateErr("");
  };

  let [dropTime, setDropTime] = useState("");
  let [dropTimeErr, setDropTimeErr] = useState("");
  let manageDropTime = (element) => {
    setDropTime(element.target.value);
    setDropTimeErr("");
  };

  let [cardNumber, setCardNumber] = useState("");
  let [cardNumberErr, setCardNumberErr] = useState("");
  let manageCardNumber = (element) => {
    setCardNumber(element.target.value);
    setCardNumberErr("");
  };

  let [expirationDate, setExpirationDate] = useState("");
  let [expirationDateErr, setExpirationDateErr] = useState("");
  let manageExpirationDate = (element) => {
    setExpirationDate(element.target.value);
    setExpirationDateErr("");
  };

   let [cardHolder, setCardHolder] = useState("");
   let [cardHolderErr, setCardHolderErr] = useState("");
   let manageCardHolder = (element) => {
     setCardHolder(element.target.value);
     setCardHolderErr("");
   };

   let [cvc, setCvc] = useState("");
   let [cvcErr, setCvcErr] = useState("");
   let manageCvc = (element) => {
     setCvc(element.target.value);
     setCvcErr("");
   };

  // let [isNewsLetterChecked, setIsNewsLetterChecked] = useState(false);
  // let [newsLetterErr, setNewsLetterErr] = useState("");

  let [isTermsChecked, setIsTermsChecked] = useState(false);
  let [termsCheckedErr, setTermsCheckedErr] = useState("");

  let [confirm, setConfirm] = useState("");

  // State variables

  // Handlers

  let handleNewsLetterChange = (e) => {
    setIsNewsLetterChecked(e.target.checked);
    if (e.target.checked) {
      setNewsLetterErr("");
    }
  };

  let handleTermsChange = (e) => {
    setIsTermsChecked(e.target.checked);
    if (e.target.checked) {
      setTermsCheckedErr("");
    }
  };
  const manageSubmit = (e) => {
    e.preventDefault(); // Prevent form submission if you're using a form

    let isValid = true;

    if (!name) {
      setNameErr("First name is required");
      isValid = false;
    }
    if (!inpNumber) {
      setInpNumberErr("Phone number is required");
      isValid = false;
    }
    if (!address) {
      setAddressErr("Address is required");
      isValid = false;
    }
    if (!city) {
      setCityErr("City is required");
      isValid = false;
    }
    if (!pickDate) {
      setPickDateErr("Pick-up date is required");
      isValid = false;
    }
    if (!pickTime) {
      setPickTimeErr("Pick-up time is required");
      isValid = false;
    }
    if (!dropDate) {
      setDropDateErr("Drop-off date is required");
      isValid = false;
    }
    if (!dropTime) {
      setDropTimeErr("Drop-off time is required");
      isValid = false;
    }
    if (!cardNumber) {
      setCardNumberErr("Card number is required");
      isValid = false;
    }
    if (!expirationDate) {
      setExpirationDateErr("Expiration date is required");
      isValid = false;
    }
    if (!cardHolder) {
      setCardHolderErr("Card holder name is required");
      isValid = false;
    }
    if (!cvc) {
      setCvcErr("CVC is required");
      isValid = false;
    }

    // Validate Checkboxes
    // if (!isNewsLetterChecked) {
    //   setNewsLetterErr("You must agree to receive newsletters");
    //   isValid = false;
    // }
    if (!isTermsChecked) {
      setTermsCheckedErr("You must agree to the terms and conditions");
      isValid = false;
    }

    if (isValid) {
      // Proceed with form submission
      setConfirm("Order has been confirmed");
      // Reset form or perform other actions as needed
    }
  };
  let errCss = `text-sm text-red-500 absolute top-full  `;

  return (
    <>
      <div className="billing_form xl:w-2/3 flex flex-col gap-y-8 font-jakarta">
        <div className=" billing-name p-3 md:p-6 bg-white flex flex-col gap-y-8 rounded-xl">
          <BillingHead title="Billing Info" step="1" />
          <div className="inputs grid md:grid-cols-2 md:grid-rows-2 gap-x-8 gap-y-6">
            <Input
              title="Your name"
              type="text"
              id="name"
              value={name}
              onChange={manageName}
            >
              <p className={errCss}>{nameErr}</p>
            </Input>
            <Input
              title="Phone Number"
              type="tel"
              id="number"
              value={inpNumber}
              onChange={manageInpNumber}
            >
              <p className={errCss}>{inpNumberErr}</p>
            </Input>
            <Input
              title="Address"
              type="text"
              id="address"
              value={address}
              onChange={manageAddress}
            >
              <p className={errCss}>{addressErr}</p>
            </Input>
            <Input
              title="Town or city"
              type="text"
              id="city"
              value={city}
              onChange={manageCity}
            >
              <p className={errCss}>{cityErr}</p>
            </Input>
          </div>
        </div>
        <div className="rental-info bg-white p-3 md:p-6 rounded-xl flex flex-col gap-y-8">
          <BillingHead title="Rental Info" step="2" />
          <div className="pick  flex flex-col gap-y-4">
            <h2 className="font-semibold text-primary-text">Pick - Up</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="location flex flex-col gap-y-3 md:gap-y-4 ">
                <label
                  htmlFor="pick-location"
                  className="text-primary-text font-bold"
                >
                  Locations
                </label>
                <select
                  name="pick-location"
                  id="pick-location"
                  className="form-select bg-[#F6F7F9] text-sm py-4 px-8  text-primary-text outline-none rounded-xl"
                >
                  <option value="location1">Location 1</option>
                  <option value="location2">Location 2</option>
                  <option value="location3">Location 3</option>
                </select>
              </div>
              <Input
                title="Time"
                type="time"
                id="pick-time"
                value={pickTime}
                onChange={managePickTime}
                className="w-full md:w-auto"
              >
                <p className={errCss}>{pickTimeErr}</p>
              </Input>
              <Input
                title="Date"
                type="date"
                id="pick-date"
                value={pickDate}
                onChange={managePickDate}
                className="w-full md:w-auto"
              >
                <p className={errCss}>{pickDateErr}</p>
              </Input>
            </div>
          </div>
          <div className="drop  flex flex-col gap-y-4">
            <h2 className="font-semibold text-primary-text">Drop - Off</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="location flex flex-col gap-y-3 md:gap-y-4 ">
                <label
                  htmlFor="drop-location"
                  className="text-primary-text font-bold"
                >
                  Locations
                </label>
                <select
                  name="drop-location"
                  id="drop-location"
                  className="form-select bg-[#F6F7F9] text-sm py-4 px-8  text-primary-text outline-none rounded-xl"
                >
                  <option value="location1">Location 1</option>
                  <option value="location2">Location 2</option>
                  <option value="location3">Location 3</option>
                </select>
              </div>
              <Input
                title="Time"
                type="time"
                id="drop-time"
                value={dropTime}
                onChange={manageDropTime}
                className="w-full md:w-auto"
              >
                <p className={errCss}>{dropTimeErr}</p>
              </Input>
              <Input
                title="Date"
                type="date"
                id="drop-date"
                value={dropDate}
                onChange={manageDropDate}
                className="w-full md:w-auto"
              >
                <p className={errCss}>{dropDateErr}</p>
              </Input>
            </div>
          </div>
        </div>
        <div className="paymentMethod bg-white p-3 md:p-6 rounded-xl flex flex-col gap-y-5 md:gap-y-8">
          <BillingHead title="Payment Method" step="3" />
          <label onClick={()=>setShow(true)}
            className="flex flex-col gap-y-8 w-full py-4 bg-secondary px-4 md:px-8 rounded-xl "
            htmlFor="card"
          >
            <div className="flex justify-between items-center w-full ">
              <input type="radio" name="payment" id="card" />
              <img src={visa} alt={visa} />
            </div>
            {show && (
            <div className="grid w-full md:w-auto grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-6">
              <Input
                title="Card Number"
                type="number"
                className="bg-white w-full md:w-auto"
                value={cardNumber}
                onChange={manageCardNumber}
              >
                <p className={errCss}>{cardNumberErr}</p>
              </Input>
              <Input
                title="Expiration Date"
                type="date"
                className="bg-white w-full md:w-auto"
                value={expirationDate}
                onChange={manageExpirationDate}
              >
                <p className={errCss}>{expirationDateErr}</p>
              </Input>
              <Input
                title="Card Holder"
                type="text"
                className="bg-white"
                value={cardHolder}
                onChange={manageCardHolder}
              >
                <p className={errCss}>{cardHolderErr}</p>
              </Input>
              <Input
                title="CVC"
                type="number"
                className="bg-white w-full md:w-auto"
                value={cvc}
                onChange={manageCvc}
              >
                <p className={errCss}>{cvcErr}</p>
              </Input>
            </div>)}
          </label>
          <label onClick={()=>setShow(false)}
            className="flex items-center justify-between w-full py-4 bg-secondary px-4 md:px-8 rounded-xl text-end"
            htmlFor="paypal"
          >
            <input type="radio" name="payment" id="paypal" />
            <img src={paypal} alt={paypal} />
          </label>
          <label onClick={()=>setShow(false)}
            className="flex items-center justify-between w-full py-4 bg-secondary px-4 md:px-8 rounded-xl text-end"
            htmlFor="bitcoin"
          >
            <input type="radio" name="payment" id="bitcoin" />
            <img src={bitcoin} alt={bitcoin} />
          </label>
        </div>
        <div className="submit rounded-xl bg-white p-3 md:p-6 flex flex-col gap-y-6 md:gap-y-9">
          <div className="head flex gap-x-6 sm:justify-between items-baseline md:items-end">
            <div className="title flex flex-col gap-y-1">
              <h2 className="font-bold text-xl text-primary-text">
                Confirmation
              </h2>
              <p className="font-medium text-xs sm:text-sm text-secondary-text ">
                We are getting to the end. Just few clicks and your rental is
                ready!
              </p>
            </div>
            <div className="step  font-medium text-secondary-text w-5/12 sm:w-auto">
              <p>Step 4 of 4</p>
            </div>
          </div>
          <div className="newsLetter flex flex-col gap-y-2 relative">
            <label className="flex items-center gap-x-5 py-2 md:py-4 px-3 md:px-8 bg-secondary rounded-lg md:rounded-xl relative">
              <input
                type="checkbox"
                className="h-6 w-6 rounded"
                name="newsLetter"
                id="newsLetter"
                // checked={isNewsLetterChecked}
                // onChange={handleNewsLetterChange}
              />
              <span className="font-semibold text-xs sm:text-base text-primary-text">
                I agree with sending Marketing and newsletter emails. No spam,
                promised!
              </span>
            </label>
            {/* {newsLetterErr && (
              <p className="text-sm text-red-500 absolute top-full">{newsLetterErr}</p>
            )} */}
          </div>
          <div className="terms&condition flex flex-col gap-y-2 relative">
            <label className="flex items-center gap-x-5 py-2 md:py-4 px-3 md:px-8 bg-secondary rounded-lg md:rounded-xl relative">
              <input
                type="checkbox"
                className="h-6 w-6 rounded"
                name="terms&condition"
                id="terms&condition"
                checked={isTermsChecked}
                onChange={handleTermsChange}
              />
              <span className="font-semibold  text-xs sm:text-base text-primary-text">
                I agree with our terms and conditions and privacy policy.
              </span>
            </label>
            {termsCheckedErr && (
              <p className="text-sm text-red-500 absolute top-full">
                {termsCheckedErr}
              </p>
            )}
          </div>
          <div className="btn flex justify-between items-center">
            <button
              onClick={manageSubmit}
              className="bg-primary font-bold text-white py-4 px-6 rounded-xl "
            >
              Rent Now
            </button>
            <p className=" text-xs sm:text-3xl font-bold text-sky-400">
              {confirm}
            </p>
          </div>
          <div className="safety flex flex-col gap-y-4">
            <div className="img">
              <img src={safety} alt={safety} />
            </div>
            <div className="text flex flex-col gap-y-2">
              <h2 className="font-semibold text-primary-text">
                All your data are safe
              </h2>
              <p className="font-medium text-sm text-secondary-text">
                We are using the most advanced security to provide you the best
                experience ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillForm;
