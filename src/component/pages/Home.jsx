import React from "react";
import Add from "../Add";
import PickAndDrop from "../PickAndDrop";
import Recommendation from "../Recommendation";
import Popular from "../Popular";

const Home = () => {
  return (
    <div className="bg-secondary">
      <Add />
      <PickAndDrop />
      <Popular/>
      <Recommendation/>
    </div>
  );
};

export default Home;
