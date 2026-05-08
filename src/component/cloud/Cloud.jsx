import React from "react";
import Container from "../layer/Container";
import { Toaster } from "react-hot-toast";
import CloudAdd from "./CloudAdd";
import CloudGet from "./CloudGet";
import CloudAll from "./CloudAll";
import CloudUpdate from "./CloudUpdate";

const Cloud = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-100 via-white to-gray-200 ">
      <Toaster position="top-right" />

      <Container className="w-full">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          🚀 Firebase Dashboard
        </h1>

        <div className="flex flex-col gap-6">
          <CloudAdd />
          <CloudGet />
          <CloudAll />
          <CloudUpdate />
        </div>
      </Container>
    </div>
  );
};

export default Cloud;
