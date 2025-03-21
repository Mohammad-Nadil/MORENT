import React from "react";
import Container from "./layer/Container";
import ad1 from "/ad1.jpg";
import ad2 from "/ad2.jpg";

const Add = () => {
  return (
    <div>
      <Container className="pt-8 ">
        <div className=" grid grid-cols-1 xl:grid-cols-2 justify-center xl:justify-between gap-6">
          <img className=" w-full " src={ad1} alt={ad1} />
          <img className="hidden xl:flex " src={ad2} alt={ad2} />
        </div>
      </Container>
    </div>
  );
};

export default Add;
