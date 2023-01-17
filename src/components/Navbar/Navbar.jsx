import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../images/greenshop-logo.svg";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { auth } from "../config/config";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  height: 200,
  padding: "20px",
  bgcolor: "background.paper",
  border: "4px double #46A358",
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="navbar">
      <div className="container">
        <button onClick={toggleDrawer} className="btnn">
          <GiHamburgerMenu color="white" />
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          size={"400px"}
          className="bla bla bla"
        >

          <div>
            <div className="left">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <button className="btnn2" onClick={toggleDrawer}>X</button>
            </div>
            <div className="center">
              <ul>
                <Link to="/">
                  <li className="home">Home</li>
                </Link>
                <Link to="/cart">
                  <li className="home">Shop</li>
                </Link>
                <Link to="/blog">
                  <li className="home">Blogs</li>
                </Link>
              </ul>
            </div>
          </div>
        </Drawer>

        <div className="right">
          <Button onClick={handleOpen} className="icon">
            <LoginIcon />
            Log Out
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                <div className="display">
                  <div className="button">
                    <button
                      className="button__yes"
                      onClick={() => auth.signOut()}
                    >
                      Yes
                    </button>
                  </div>
                  <div className="button">
                    <button
                      className="button__no"
                      onClick={() => window.location.reload()}
                    >
                      No
                    </button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
