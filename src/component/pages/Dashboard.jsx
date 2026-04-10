import React from "react";
import DashboardNav from "../dashboard/DashboardNav";
import { Outlet } from "react-router-dom";
import DashboardBottomNav from "../dashboard/DashboardBottomNav";

const Dashboard = () => {
  return (
    <div className="font-jakarta h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex h-full px-2 lg:px-0">
        {/* Sidebar (Desktop only) */}
        <div className="hidden lg:block bg-white shadow-lg h-full">
          <DashboardNav />
        </div>

        {/* Main content (ONLY THIS SCROLLS) */}
        <div className="flex-1 h-full overflow-y-auto  md:px-6 pb-20 md:pb-6 sm:py-3">
          <Outlet />
        </div>
      </div>

      {/* Bottom Nav (Mobile only) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-50">
        <DashboardBottomNav />
      </div>
    </div>
  );
};
export default Dashboard;
