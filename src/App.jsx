import { useState } from "react";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/category" element={<Category />}>
        <Route index element={<CategoryList />}></Route>
        <Route path="details" element={<Details/>}></Route>
      </Route>
      <Route path="/payment" element={<Payment/>} ></Route>
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
