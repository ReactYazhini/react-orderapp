import React, { Suspense, useState } from "react";
import UserContext from "../Utils/UserContext";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../Utils/appStore";
import Navbar from "./Navbar";

const Body = () => {
  const [loggedInUser, setLoggedInUser] = useState("Default User");


  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
          <Navbar/>
          <Outlet/>
        </UserContext.Provider>
      </Provider>
    </>
  );
};

export default Body;
