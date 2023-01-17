import React, { useContext, useState } from "react";
import "./allplants.scss";
import SuperSaleBanner from "../../images/SuperSaleBanner.jpg";
import { Link } from "react-router-dom";
import { Context } from "../../Context";

function valuetext(value) {
  return `${value}°C`;
}

const Allplants = () => {
  const {  data } = useContext(Context);
  const [value, setValue] = useState([20, 1230]);
  const [state, setState] = useState(data);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filterResult = (cardItem) => {
    const result = data.filter((setData) => {
      return setData.category2 === cardItem;
    });
    setState(result);
  };

  return (
    <div className="allplants">
      <div className="container">
        <div className="filter">
          <h5>Categories</h5>
          <div className="filterdf">
            <div className="leftfilt">
              <button className="btn" onClick={() => setState(data)}>
                All
              </button>
              <button className="btn" onClick={() => filterResult("inBowl")}>
                in bowl
              </button>
              <button className="btn" onClick={() => filterResult("seed")}>
                Seed
              </button>
              <button
                className="btn"
                onClick={() => filterResult("trees")}
              >
                ornamental trees
              </button>
            </div>
          </div>
       

          <div className="banner">
            <img src={SuperSaleBanner} alt="" />
          </div>
        </div>
        <div className="products">

  
          <div className="maped">
            {state.map((el) => {
              return (
                <div className="container">
                  <div className="cardPlants" key={el.id}>
                    <Link to={`/${el.id}`}>
                      <img src={el.image} alt="" />
                    </Link>
                    <div className="info">
                      <p>{el.title}</p>
                      <p className="price">${el.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Banner/> */}
    </div>
  );
};

export default Allplants;
