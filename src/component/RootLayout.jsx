import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
