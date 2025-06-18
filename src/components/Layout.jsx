import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import MainPage from "./MainPage";
import ToggleSwitch from "./ToggleSwitch";
import FeedBackForm from "./FeedBackForm";

const Layout = () => {
  const [layout, setLayout] = useState("horizontal");
  const toggleLayout = () => {
    setLayout((prev) => (prev === "horizontal" ? "vertical" : "horizontal"));
  };

  return (
    <div className="container-fluid p-0 m-0 ">
      <div className="row no-gutters" style={{ height: "100vh" }}>
        <div className="col-3 p-3 " style={{ backgroundColor: "rgb(165, 214, 250)" }}>
          <ProfileCard />
         
          <ToggleSwitch layout={layout} toggleLayout={toggleLayout} />

          <FeedBackForm/>
          
        </div>
        <div className="col-9 p-4 sideBarColor">
          <MainPage layout={layout} toggleLayout={toggleLayout} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
