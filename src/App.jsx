import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./component/RootLayout";
import Home from "./component/pages/Home";
import Category from "./component/pages/Category";
import CategoryList from "./component/CategoryList";
import Details from "./component/Details";
import Payment from "./component/pages/Payment";

import Dashboard from "./component/pages/Dashboard";
import DashboardHome from "./component/dashboard/DashboardHome";
import AdminCars from "./component/dashboard/AdminCars";
import EditCar from "./component/dashboard/EditCar";
import OrdersTable from "./component/dashboard/OrdersTable";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="category" element={<Category />}>
        <Route index element={<CategoryList />} />
        <Route path="product/:id" element={<Details />} />
      </Route>

      <Route path="payment" element={<Payment />} />

      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="cars" element={<AdminCars />}/>
        <Route path="editCar" element={<EditCar />} />
        <Route path="orders" element={<OrdersTable />} />
      </Route>
    </Route>,
  ),
);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
