import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import { RouterProvider } from "react-router";
import { Routing } from "./Routing";
import axios from "axios";

axios.defaults.baseURL="http://localhost:8080"
const App = () => {
  return (
    <>
    <RouterProvider  router={Routing} >
    </RouterProvider>
    </>
  );
};

export default App;
