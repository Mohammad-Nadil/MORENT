import React, { useState } from "react";
import Container from "./layer/Container";
import logo from "/Logo.png";
import pfp from "/profile.jpg";
import { FiSearch, FiSliders } from "react-icons/fi";
import { FaBell, FaHeart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Search_bar = ({className}) => {
  return (
    <div className={`search relative hidden sm:flex ${className} `}>
          <FiSearch className="text-2xl text-[#596780] absolute top-1/2 -translate-y-1/2 left-0 translate-x-full" />
          <input
            type="text"
            className="py-3 px-16 w-full sm:w-96 md:w-80 lg:w-[31rem] font-jakarta font-medium text-sm text-primary-text outline-none border border-[#C3D4E966] rounded-xl sm:rounded-full"
            placeholder="Search something here"
          />
        </div>
  );
};

const Navbar = () => {
  let [user, setUser] = useState(false);

  let profile_setting = `w-11 h-11 rounded-full border border-[#C3D4E9] grid place-content-center cursor-pointer`;
  let profile_setting_icons = `text-[#596780] text-xl`;

  return (
    <div>
      <Container className=" flex items-center justify-between">
        <div className="logo max-w-36 py-8 md:py-9 xl:py-10 ">
          <img  src={logo} alt="" />
        </div>
        <Search_bar/>
        <div className="profile flex gap-x-3 md:gap-x-4 lg:gap-x-5">
          <div className="icon hidden md:flex sm:gap-x-2 lg:gap-x-4  ">
            <div className={profile_setting}>
              <FaHeart className={` text-xl text-[#596780] `} />
            </div>
            <div className={profile_setting}>
              <FaBell className={profile_setting_icons} />
            </div>
            <div className={profile_setting}>
              <IoMdSettings className={profile_setting_icons} />
            </div>
          </div>
          <div
            onClick={() => setUser(!user)}
            className="user h-11 w-11 border rounded-full relative"
          >
            <img className="h-full w-full" src={pfp} alt="" />
            {user ? (
              <div className="icon z-50 bg-white absolute md:hidden flex right-0 top-full translate-y-3 gap-x-3 ">
                <div className={profile_setting}>
                  <FaHeart className={` text-xl text-[#596780] `} />
                </div>
                <div className={profile_setting}>
                  <FaBell className={profile_setting_icons} />
                </div>
                <div className={profile_setting}>
                  <IoMdSettings className={profile_setting_icons} />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Container>
      <Container>
        <Search_bar className="!flex sm:!hidden" />
      </Container>
    </div>
  );
};

export default Navbar;
