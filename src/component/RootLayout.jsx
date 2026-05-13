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
    <div className="flex flex-col min-h-screen ">
      <Toaster position="bottom-right" reverseOrder={false} />
      <ScrollToTop />
      <Navbar />
      <RouteLoader />
      <main className="flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
