import React from "react";
import bannersData from "../bannersData";
import "./bannerspage.scss";
import SummerSale from "../images/SummerSale.jpg";
import { useCart } from "react-use-cart";

const BannersPage = () => {
  const addItem = useCart()
  return (
    <div className="banner">
      <img className="summerSalePic" src={SummerSale} alt="" />
      <div className="container">
        {bannersData.map((el) => {
          return (
            <div className="flex">
              <div className="bannersTexts">
                <h2>{el.name}</h2>
                <p>{el.p}</p>
                <div className="buttons">
                  <button className="betn btn-success">-</button>
                  <span>1</span>
                  <button className="betn btn-success">+</button>
                  <button className="batn btn-outline-success">BUY NOW</button>
                  <button onClick={() => addItem()} className="btn btn-outline-sucess">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="bannerPic">
                <img src={el.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannersPage;
