import React from "react";
import Container from "../layer/Container";
import Bill_Info from "../Bill_Info";
import BillForm from "../BillForm";

const Payment = () => {
  return (
    <Container className="flex flex-col-reverse xl:flex-row gap-x-8 font-jakarta py-8">
      <BillForm />
      <Bill_Info />
    </Container>
  );
};

export default Payment;
