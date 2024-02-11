import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const value = "";
  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading"></div> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;
