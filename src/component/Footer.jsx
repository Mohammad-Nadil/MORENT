import React from "react";
import Container from "./layer/Container";
import logo from "/Logo.png";

const Footer = () => {
  if (window.location.pathname.includes("/dashboard")) {
    return null; // Don't render the footer on dashboard pages
  }

  return (
    <div className=" mt-5 md:mt-8 xl:mt-10 bg-white ">
      <Container className="py-3 flex flex-col items-center gap-y-4">
        <p>©2022 MORENT. All rights reserved</p>
      </Container>
    </div>
  );
};

export default Footer;
