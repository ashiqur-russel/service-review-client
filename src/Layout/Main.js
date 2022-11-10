import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../componnets/Footer/Footer";
import Header from "../componnets/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
