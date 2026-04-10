import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaCar } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";

const DashboardBottomNav = () => {
  const location = useLocation();

  const links = [
    { text: "Home", to: "/dashboard", icon: <FaHome /> },
    { text: "Cars", to: "/dashboard/cars", icon: <FaCar /> },
    { text: "All Orders", to: "/dashboard/orders", icon: <CiViewTable /> },
  ];

  return (
    <div className="bg-white border-t shadow-lg flex justify-around items-center py-2">
      {links.map((item, i) => {
        const isActive = location.pathname === item.to;

        return (
          <Link
            key={i}
            to={item.to}
            className={`flex flex-col items-center text-xs ${
              isActive ? "text-primary" : "text-gray-400"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.text}
          </Link>
        );
      })}
    </div>
  );
};

export default DashboardBottomNav;
