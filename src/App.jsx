import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    // <Router>

    //   </Layout>
    //   <Routes>

    //     {/* <Route path='' element={}/> */}

    //   </Routes>

    // </Router>

    <>
      <Layout />
    </>
  );
};

export default App;
