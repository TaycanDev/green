import React from "react";
import "./Blog.scss";
import Navbar from "../Navbar/Navbar";
import img from "../../images/download.jpg";
import Footer from "../footer/Footer";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Instagram from "../../images/lil_taycan_qr.png";
const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="all">
          <div className="map">
            <iframe id="oo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2096.2929851655604!2d69.28241642887934!3d41.314932335393216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2d901c2def%3A0x1bb221455121c6e8!2z0JPQu9Cw0LLQv9C-0YfRgtCw0LzRgg!5e0!3m2!1sru!2s!4v1672403864110!5m2!1sru!2s"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="textt">
            <h1>
              This company has been working since 2012. <br />
              customers are happy and <br /> appreciate the quality of work.
            </h1>
            <div className="lokki">
              <img src={img} alt="" />
              <p>
                Choose your size, recipient, <br /> and delivery frequency.{" "}
                <br /> For your first order, <br /> we’ll send your recipient{" "}
                <br /> our seasonal fave. The Bouq <br /> goes from the farm
                directly to <br /> your recipient’s doorstep. <br /> Flowers may
                arrive in <br /> bud form, lasting longer.{" "}
              </p>
            </div>
          </div>
        </div>
        <h2 className="h2">Contact Us</h2>
        <div className="koko">
          <a href="http://qrcoder.ru" target="_blank">
            {" "}
            <img
              src="http://qrcoder.ru/code/?https%3A%2F%2Ft.me%2FSaidabdurahmon&4&0"
              width="148"
              height="148"
              border="0"
              title="QR код"
            />
          </a>
          <img src={Instagram} alt="" className="imagee" />
          <div>
            <CallOutlinedIcon className="icon3" />
            +998 99 001 55 65
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
