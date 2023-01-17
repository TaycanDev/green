import React from "react";
import "./header.scss";
import plantbig from "../../images/plants-1.jpg"

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-df">
          <div className="left">
            <p className="welcome">Welcome to GreenShop</p>
            <h1 className="lets">
              Let's Make a <br /> Better <span>Planet</span>
            </h1>
            <p className="we">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use <br /> our plants to create an unique Urban
              Jungle. Order your favorite plants!
            </p>
          </div>
          <div className="right">
            <img className="plantbig" src={plantbig} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
