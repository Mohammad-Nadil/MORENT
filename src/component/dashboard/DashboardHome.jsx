// OrdersPage.jsx
import React, { useState } from "react";
import { FaAngleLeft , FaAngleRight } from "react-icons/fa";


const ordersData = [
  {
    id: "#ORD-94210",
    customer: {
      name: "Alex Stanton",
      email: "alex@example.com",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCIOjQ5-JmOUF__RjIA8PjKABvuKRxCL0NyUIr7nuT1dhqS2bu7xvm70CxkbhKlR08atJ9T60VdSM6QbiC6lbSQ7ZLq9RpZyRoYi3Pj5M8Z8QjvCyLz-q4qghCgbLAnYeVOVypGvesx_n5SSU1y4ECBZZpPr6HhVOavjl0BSXy4AepvkhuPz7neYKPav4SO7De57WX5JOBS0BXg1ud7J6fhi51vUPkCThhhtzsVQPHQEjWHoPghdAlvugIwM-R4CrhyHKtneSEthge-",
    },
    car: "Koenigsegg Regera",
    date: "21 July 2023",
    price: 99,
    status: "Success",
  },
  {
    id: "#ORD-94211",
    customer: { name: "Skylar Dias", email: "skylar@example.com", avatar: "" },
    car: "Nissan GT-R",
    date: "20 July 2023",
    price: 80,
    status: "Pending",
  },
  {
    id: "#ORD-94212",
    customer: {
      name: "Lucas Hamilton",
      email: "lucas@example.com",
      avatar: "",
    },
    car: "Rolls Royce",
    date: "19 July 2023",
    price: 96,
    status: "Canceled",
  },
  {
    id: "#ORD-94213",
    customer: {
      name: "Sophie Claire",
      email: "sophie@example.com",
      avatar: "",
    },
    car: "Tesla Model S",
    date: "19 July 2023",
    price: 120,
    status: "Success",
  },
];

const rentedCars = [
  { id: 1, name: "Nissan GT-R", type: "Sport", price: 80 },
  { id: 2, name: "Rolls Royce", type: "Luxury", price: 120 },
];

const statusColors = {
  Success: "bg-[#ecfdf5] text-[#059669]",
  Pending: "bg-[#fffbeb] text-[#d97706]",
  Canceled: "bg-[#fef2f2] text-[#dc2626]",
};

const pendingOrders = [
  { id: 1, userId: 1, userName: "Mohammad Nadil", car: "CR-V", price: 90 },
  {
    id: 2,
    userId: 1,
    userName: "Mohammad Nadil",
    car: "Koenigsegg",
    price: 150,
  },
  { id: 3, userId: 2, userName: "John Doe", car: "MG ZX", price: 70 },
  { id: 4, userId: 2, userName: "John Doe", car: "Tesla Model S", price: 110 },
  { id: 5, userId: 3, userName: "Alice", car: "Mustang", price: 95 },
  { id: 6, userId: 3, userName: "Alice", car: "Audi Q7", price: 130 },
];

const ordersByUser = pendingOrders.reduce((acc, order) => {
  if (!acc[order.userId])
    acc[order.userId] = { userName: order.userName, orders: [] };
  acc[order.userId].orders.push(order);
  return acc;
}, {});

export default function DashboardHome() {
  const [filter, setFilter] = useState("All");

  const filteredOrders =
    filter === "All"
      ? ordersData
      : ordersData.filter((o) => o.status === filter);

  const totalRentalPrice = rentedCars.reduce((sum, car) => sum + car.price, 0);

  return (
    <div className="flex w-full  bg-gray-50 ">
      <main className="w-full flex flex-col  gap-6 py-3">
        {/* Header */}
        <div className="flex flex-col md:flex-row lg:items-center justify-between gap-4 mb-2 sticky top-0 z-10 bg-secondary">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Orders</h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base hidden lg:block">
              Real-time overview of all rental transactions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div>
            <div className="flex justify-between  p-1 bg-white rounded-xl shadow-sm  ">
              {["All", "Pending", "Success", "Canceled"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 sm:px-6 py-2 text-xs xs:text-sm font-medium rounded-lg transition-colors h-auto ${
                    filter === status
                      ? "bg-primary text-white font-bold shadow-sm"
                      : "text-gray-500 hover:text-primary"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* LEFT: Rental Details */}
          <div className="xl:col-span-8 flex flex-col gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
              <h2 className="font-bold text-xl sm:text-2xl mb-6">
                Order Details
              </h2>

              <div className="flex flex-col gap-4">
                {rentedCars.map((car) => (
                  <div
                    key={car.id}
                    // ✅ flex-wrap so image+text stacks gracefully on tiny screens
                    className="flex flex-wrap items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm gap-3"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-14 sm:w-24 sm:h-16 bg-gray-300 rounded-md flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg">
                          {car.name}
                        </h3>
                        <p className="text-sm text-gray-600">{car.type}</p>
                      </div>
                    </div>
                    <p className="font-bold text-base sm:text-lg">
                      ${car.price}/day
                    </p>
                  </div>
                ))}
              </div>

              {/* Pick-Up / Drop-Off */}
              {/* ✅ grid-cols-1 on mobile, grid-cols-2 on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {/* Pick-Up */}
                <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
                  <h4 className="font-semibold mb-3">Pick-Up</h4>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm font-medium">Dhaka</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Date</p>
                      <p className="text-sm font-medium">10 Apr</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Time</p>
                      <p className="text-sm font-medium">10:00 AM</p>
                    </div>
                  </div>
                </div>

                {/* Drop-Off */}
                <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
                  <h4 className="font-semibold mb-3">Drop-Off</h4>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm font-medium">Dhaka</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Date</p>
                      <p className="text-sm font-medium">12 Apr</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Time</p>
                      <p className="text-sm font-medium">6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-gray-50 p-4 rounded-lg text-gray-700">
                <h4 className="font-semibold mb-2">Customer</h4>
                <p className="text-sm">Mohammad Nadil</p>
                <p className="text-sm text-gray-500">+8801XXXXXXXXX</p>
              </div>

              <div className="flex justify-between mt-6 pt-6 border-t">
                <div>
                  <h4 className="font-bold text-base sm:text-lg">
                    Total Price
                  </h4>
                  <p className="text-sm text-gray-500">
                    Includes all rented cars
                  </p>
                </div>
                <p className="text-xl sm:text-2xl font-bold">
                  ${totalRentalPrice}
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE PAGINATION */}
          <div className="md:hidden fixed bottom-12 left-0 w-full z-50 bg-white p-3 border-t shadow-md">
            <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
              {/* Prev */}
              <button className="flex px-2.5 xs:px-5 py-2 rounded-xl bg-gray-200 text-gray-600 font-medium active:scale-95 transition">
              <FaAngleLeft className="text-2xl" /> Prev
              </button>

              {/* Pages */}
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`w-8 h-8 rounded-full text-sm font-medium ${
                      page === 1
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next */}
              <button className="flex px-2.5 xs:px-5 py-2 rounded-xl bg-primary text-white font-medium active:scale-95 transition">
                Next <FaAngleRight className="text-2xl" />
              </button>
            </div>
          </div>

          {/* RIGHT:  Orders */}
          <div className="xl:col-span-4 flex flex-col bg-white py-6 px-4 rounded-2xl shadow-md lg:max-h-[600px]">
            <h2 className="font-bold text-lg sm:text-xl mb-4">
              {Object.keys(ordersByUser).length} Orders
            </h2>
            <div className="flex flex-col gap-4 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {Object.values(ordersByUser).map((user, idx) => {
                const total = user.orders.reduce((sum, o) => sum + o.price, 0);
                return (
                  <div
                    key={idx}
                    className="bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-sm sm:text-base">
                        {user.userName}
                      </h3>
                      <span className="font-bold text-gray-700">${total}</span>
                    </div>
                    <ul className="ml-2 list-disc list-inside text-sm text-gray-700">
                      {user.orders.map((order) => (
                        <li key={order.id}>
                          {order.car} — ${order.price}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
