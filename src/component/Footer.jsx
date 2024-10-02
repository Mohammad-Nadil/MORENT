import React from "react";
import Container from "./layer/Container";
import logo from "/Logo.png";

const Footer = () => {
  return (
    <div>
      <Container className="pt-20 pb-9 flex justify-between flex-col gap-y-12 md:gap-y-16 lg:flex-row border-b border-[#131313]/15 ">
        <div className="left w-72 flex flex-col gap-y-4 ">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <p className="font-jakarta font-medium text-primary-text">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="right font-jakarta flex flex-row flex-wrap justify-between gap-y-12 lg:gap-x-14">
          <div className="w-36 flex flex-col gap-y-3 sm:gap-y-4">
            <p className="font-semibold text-xl text-primary-text" >About</p>
            <ul className="font-medium text-primary-text/60 flex flex-col gap-y-2 sm:gap-y-4 md:gap-y-6 lg:gap-y-8 py-2 md:py-4" >
                <li><a href="#">How it works</a></li>
                <li><a href="#">Featured</a></li>
                <li><a href="#">Partnership</a></li>
                <li><a href="#">Bussiness Relation</a></li>
            </ul>
          </div>
          <div className="w-32 flex flex-col gap-y-3 sm:gap-y-4">
            <p className="font-semibold text-xl text-primary-text" >Community</p>
            <ul className="font-medium text-primary-text/60 flex flex-col  gap-y-2 sm:gap-y-4 md:gap-y-6 lg:gap-y-8 py-2 md:py-4" >
                <li><a href="#">Events</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Podcast</a></li>
                <li><a href="#">Invite a friend</a></li>
            </ul>
          </div>
          <div className="w-36 flex flex-col gap-y-3 sm:gap-y-4">
            <p className="font-semibold text-xl text-primary-text" >Socials</p>
            <ul className="font-medium text-primary-text/60 flex flex-col gap-y-2 sm:gap-y-4 md:gap-y-6 lg:gap-y-8 py-2 md:py-4" >
                <li><a href="#">Discord</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="font-jakarta font-semibold text-primary-text pt-9 pb-14 flex justify-between lg:items-center flex-wrap flex-col-reverse sm:flex-row gap-y-8" >
        <div className="left"><p>©2022 MORENT. All rights reserved</p></div>
        <div className="right flex justify-between sm:gap-x-6 md:gap-x-8 lg:gap-x-12 ">
          <a href="#"><p>Privacy & Policy</p></a>
          <a href="#"><p>Terms & Condition</p></a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
