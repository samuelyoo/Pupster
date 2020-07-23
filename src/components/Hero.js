import React from "react";
// import "./style.css";
import Background from "../public/images/kuro_bg.jpg"

function Hero(props) {
  return (
    <div className="hero text-right" style={{ backgroundImage: `url(${Background})` }}>
      {props.children}
    </div>
  );
}

export default Hero;
