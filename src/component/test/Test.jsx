import React from "react";
import Container from "../layer/Container";
import InputShow from "./InputShow";
import LivePreview from "./LivePreview";
import { Toaster } from "react-hot-toast";
import GetOne from "./GetOne";
import UpdateData from "./UpdateData";

const Test = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-100 via-white to-gray-200 ">
      <Toaster position="top-right" />

      <Container className="w-full">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          🚀 Firebase Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <InputShow />
          <UpdateData />
          <GetOne />
          <LivePreview />
        </div>
      </Container>
    </div>
  );
};

export default Test;
