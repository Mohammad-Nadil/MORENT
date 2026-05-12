import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import { Toaster } from "react-hot-toast";
import useLenis from "../hook/useLenis";
import RouteLoader from "./loaders/RouteLoader";

const RootLayout = () => {
  useLenis();
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <ScrollToTop />
      <Navbar />
      <RouteLoader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
