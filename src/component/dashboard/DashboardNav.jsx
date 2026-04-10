import React from "react";
import { CiViewTable } from "react-icons/ci";
import { FaCar, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  const links = [
    { text: "Home", to: "/dashboard", icon: <FaHome /> },
    { text: "Cars", to: "/dashboard/cars", icon: <FaCar /> },
    { text: "All Orders", to: "/dashboard/orders", icon: <CiViewTable /> },
  ];
  return (
    <aside className=" flex flex-col py-8 px-4  rounded-xl font-jakarta  ">
      <div className="mb-10 px-4">
        <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {links.map((item, i) => (
          <Link
            to={item.to}
            key={i}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer ${
              i === 0
                ? "bg-[#3563e9] text-white"
                : "text-slate-500 hover:bg-gray-100"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.text}</span>
          </Link>
        ))}
      </nav>

      <button className="mt-4 hidden text-red-500 px-4 py-3 text-left">
        Log Out
      </button>
    </aside>
  );
};

export default DashboardNav;
