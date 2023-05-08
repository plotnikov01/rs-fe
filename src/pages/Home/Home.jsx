import React from "react";
import sales from "../../assets/images/sales.png";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <p className="home__text">Landing page</p>
      <img src={sales} alt="sales" className="home__line" />
    </div>
  );
};
