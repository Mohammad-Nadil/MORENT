import React from "react";

const orders = [
  {
    id: "#ORD-94210",
    name: "Alex Stanton",
    email: "alex@example.com",
    car: "Koenigsegg",
    date: "21 July 2023",
    price: "$99",
    status: "Success",
  },
  {
    id: "#ORD-94211",
    name: "Skylar Dias",
    email: "skylar@example.com",
    car: "Nissan GT-R",
    date: "20 July 2023",
    price: "$80",
    status: "Pending",
  },
  {
    id: "#ORD-94212",
    name: "Lucas Hamilton",
    email: "lucas@example.com",
    car: "Rolls Royce",
    date: "19 July 2023",
    price: "$96",
    status: "Canceled",
  },
];

const statusStyle = {
  Success: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Canceled: "bg-red-100 text-red-600",
};

export default function OrdersTable() {
  return (
    <div className="bg-gray-50 ">
      
      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">All Orders</h2>
        <p className="text-gray-500 text-sm">
          Manage and track all customer orders
        </p>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full text-left">
          
          {/* TABLE HEAD */}
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Car</th>
              <th className="p-4">Date</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {orders.map((order, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">{order.id}</td>

                <td className="p-4">
                  <p className="font-medium">{order.name}</p>
                  <p className="text-sm text-gray-500">{order.email}</p>
                </td>

                <td className="p-4">{order.car}</td>
                <td className="p-4">{order.date}</td>
                <td className="p-4 font-semibold">{order.price}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyle[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD VIEW */}
      <div className="md:hidden flex flex-col gap-4">
        {orders.map((order, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{order.id}</h3>
              <span
                className={`px-2 py-1 text-xs rounded-full ${statusStyle[order.status]}`}
              >
                {order.status}
              </span>
            </div>

            <p className="font-medium">{order.name}</p>
            <p className="text-sm text-gray-500 mb-2">{order.email}</p>

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <p>🚗 {order.car}</p>
              <p>📅 {order.date}</p>
              <p>💰 {order.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
