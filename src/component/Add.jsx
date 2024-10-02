import React from "react";
import Container from "./layer/Container";
import ad1 from "/ad1.jpg";
import ad2 from "/ad2.jpg";

const Add = () => {
  return (
    <div>
      <Container className="pt-8">
        <div className=" flex flex-col xl:flex-row justify-center xl:justify-between">
          <img className="" src={ad1} alt={ad1} />
          <img className="hidden xl:flex" src={ad2} alt={ad2} />
        </div>
      </Container>
    </div>
  );
};

export default Add;
