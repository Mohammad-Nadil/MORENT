import React from "react";
import Container from "../layer/Container";
import SideNav from "../SideNav";
import { Outlet } from "react-router-dom";

const Category = () => {
  return (
    <div className="py-1 ">
      <Container className="flex flex-col xl:flex-row bg-secondary">
        <SideNav />
        <Outlet />
      </Container>
    </div>
  );
};

export default Category;
