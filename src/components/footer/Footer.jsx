import React from "react";
import "./footer.scss";
import image from "../../images/greenshop-logo.svg";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
   
      
      </div>
      <div className="greenshop">
        <div className="container flexi">
          <img src={image} alt="" />

          <div className="pochta">
            <MailOutlinedIcon className="icon2" />
            <p>contact@greenshop.com</p>
          </div>
          <div className="telephone">
            <CallOutlinedIcon className="icon3" />
            <p>+988 99 001 55 65</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
