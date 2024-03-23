import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import BillGenerator from "./components/BillGenerator";
import SideNav from "./components/SideNav";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
export default function App() {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
}

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sidenav",
    element: <SideNav />,
    children: [
      {
        path: "/sidenav/billgenerate",
        element:  <BillGenerator />,
      },
      {
        path: "/sidenav/view/:id",
        element: <CustomerDetails/>,
      },
      {
        path: "/sidenav",
        element: <CustomerList/>,
      }
    ]
  }
]);

export { route };




