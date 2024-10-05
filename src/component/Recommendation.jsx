import React from "react";
import Container from "./layer/Container";
import ProductCard from "./layer/ProductCard";
import car from "/cr-v.png";
import Koenigsegg from "/Koenigsegg.png";
import RollsRoyce from "/Rolls-Royce.png";
import NissanGT from "/NissanGT-R.png";
import MG_ZX_Exclusice from "/MG-ZX-Exclusice.png";
import MG_ZX_Exclusice_Sky from "/MG-ZX-Excite-Sky.png";
import CR_V_Black from "/CR - V-Black.png";
import AllNewRush from "/AllNewRush.png";
import AllNewTerios from "/AllNewTerios.png";
import NewMG_ZS_Gray from "/NewMG-ZS-Gray.png";
import NewMG_ZS from "/NewMG-ZS.png";
import { Link } from "react-router-dom";
const Recommendation = () => {
  return (
    <div className="font-jakarta flex flex-col gap-y-5">
      <Container className="flex justify-between items-center w-full">
        <h2 className=" font-semibold text-secondary-text py-2.5 sm:px-5">
          Recommendation Car
        </h2>
        <p>
          <Link
            to="/category"
            className="font-semibold text-primary hover:bg-secondary-text sm:px-5 py-2.5 rounded-md transition-all duration-300"
          >
            View All
          </Link>
        </p>
      </Container>
      <Container className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-6 xl:gap-8 ">
        <ProductCard
          image={Koenigsegg}
          title="Koenigsegg"
          type="Sport"
          price="99.00"
          className="col-span-1 row-span-1"
        />
        <ProductCard
          image={NissanGT}
          title="Nissan GT-R"
          type="Sport"
          price="80.00"
          className="col-span-1 row-span-1"
        />
        <ProductCard
          image={RollsRoyce}
          title="Rolls - Royce"
          type="SUV"
          price="96.00"
          className="col-span-1 row-span-1"
        />
        <ProductCard
          image={MG_ZX_Exclusice}
          title="MG ZX Excite"
          type="SUV"
          price="74.00"
          className="col-span-1 row-span-1"
        />
        <ProductCard
          image={AllNewRush}
          title="All New Rush"
          type="SUV"
          price="72.00"
          className="col-span-1 row-span-1"
        />
        <ProductCard
          image={car}
          title="CR - V"
          type="SUV"
          price="80.00"
          className="col-span-1 row-span-1"
        />
        <ProductCard
          image={AllNewTerios}
          title="All New Terios"
          type="SUV"
          price="74.00"
          className="col-span-1 row-span-1"
        />
        <ProductCard
          image={CR_V_Black}
          title="CR - V Black"
          type="SUV"
          price="80.00"
          className="col-span-1 row-span-1"
        />
        <ProductCard
          image={MG_ZX_Exclusice_Sky}
          title="MG ZX Exclusice Skyblue"
          type="SUV"
          price="76.00"
          className="col-span-1 row-span-1"
        />
        <ProductCard
          image={NewMG_ZS}
          title="New MG ZS"
          type="SUV"
          price="80.00"
          className="col-span-1 row-span-1"
        />
        <ProductCard
          image={NissanGT}
          title="Nissan GT"
          type="SUV"
          price="80.00"
          className="col-span-1 row-span-1"
        />
        <ProductCard
          image={NewMG_ZS_Gray}
          title="New MG ZS Gray"
          type="SUV"
          price="80.00"
          className="col-span-1 row-span-1"
        />
      </Container>
    </div>
  );
};

export default Recommendation;
