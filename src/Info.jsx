import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// import data from "./data";
import "./info.scss";
import { useCart } from "react-use-cart";
import { Context } from "../src/Context";
import Navbar from "./components/Navbar/Navbar";

const Info = () => {
  const { addItem, items} = useCart();
  console.log(items);
  const { api, data } = useContext(Context);
  const params = useParams();

  const currentData = data.find((el) => {
    return el.id == params.id;
  });

  return (
    <>
      <Navbar />
      <div>
        <div className="container">
          <div className="info">
            <div className="img">
              <img src={currentData?.image} alt="" />
            </div>
            <div className="info-texts">
              <h3>{currentData?.title}</h3>
              <h5 className="grprice">${currentData?.price}</h5>
              <hr />
              <h5>{currentData?.desc}</h5>
              <div className="buttons">
                <button
                  className="btn btn-outline-sucess"
                  onClick={() => addItem(currentData)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="description">
            <br />
            <div className="uper">
              <h4>Product Description</h4>
            </div>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam fringilla augue nec est tristique auctor. Donec non est at
              libero vulputate rutrum. Morbi ornare lectus quis justo gravida
              semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit
              id nulla. <br />
              <br />
              <br /> Pellentesque aliquet, sem eget laoreet ultrices, ipsum
              metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac
              tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
              eget sagittis vulputate, sapien libero hendrerit est, sed commodo
              augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
              nisi posuere nisl, in accumsan elit odio quis mi. Cras neque
              metus, consequat et blandit et, luctus a nunc. Etiam gravida
              vehicula tellus, in imperdiet ligula euismod eget. The ceramic
              cylinder planters come with a wooden stand to help elevate your
              plants off the ground.{" "}
            </p>
            <br />
            <h5>Living Room:</h5>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <br />
            <h5>Dining Room:</h5>
            <p>
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>
            <br />
            <h5>Office:</h5>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="related">
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
