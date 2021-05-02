import React from "react";
import Ballet from "../assets/dancer orange dress.jpg";
import Dancer from "../assets/ballet dancer.jpg";
import "./Home.scss";

function Home() {
  return (
    <div>
      <div className="ballet">
        <img
          className="ballet__dancer--two"
          src={Ballet}
          alt="dancer orange dress"
        />
        <div className="ballet__text">
          <h1>Ballet Fun</h1>
          <h4>You can't have fun without fundamentals</h4>
        </div>
        <img className="ballet__dancer" src={Dancer} alt="ballet dancer" />
      </div>
    </div>
  );
}

export default Home;
