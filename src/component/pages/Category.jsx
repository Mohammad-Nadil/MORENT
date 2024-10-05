import React, { useState } from "react";
import Container from "../layer/Container";
import SideNav from "../SideNav";
import { Outlet } from "react-router-dom";

const Category = () => {
  
  return (
    <div className="py-1 ">
      <Container className="flex flex-col xl:flex-row bg-secondary">
        <div className="sideBar xl:w-1/4 xl:mt-4 flex-col bg-white">
          <SideNav />
        </div>
        <Outlet/>
      </Container>
    </div>
  );
};

export default Category;
