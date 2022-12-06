import React from "react";
import { Outlet } from "react-router-dom";
import SlideShow from "../../UI/SlideShow/slideShow";

//CSS
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="headerContainer">
        <h1 className="title">Store Manager Kit</h1>
        <span className="subTitle">Your helping hand......</span>
      </div>
      <div>
        <SlideShow/>
      </div>
    </div>
  );
};

export default Home;
