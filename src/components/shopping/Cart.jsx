import React from "react";
import { useCart } from "react-use-cart";
import "./cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Cart = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState("")
  const [num, setNum] = React.useState("")
  
  const register = () => {
     
    axios.post(
      `https://api.telegram.org/bot5824157967:AAGp3N1JxzSGawhGnlUqojEPzf_Aiob3lUM/sendMessage?chat_id=-1001789409862&text=${encodeURIComponent(
    `<b>Details:</b>

    <b>The operation was completed successfully!</b>
    <b>our couriers will contact you soon!</b>
    <b> Call Center: +998 99 855 73 85 </b>

    <b>${name}</b>
    <b>${num}</b>
    
${items
  .map((item) => {
    return `
    
<b>${item.title}</b>
<hr />
${item.quantity} x ${item.price} $ = ${total}$ 
    `;
  })
  .join("")}        
<b>Total:</b> ${total}$
    `
      )} &parse_mode=html`
    );
    window.location.reload();
  };
  const { items, updateItemQuantity, removeItem } = useCart();

  let total = 0;

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left">
          <div className="products-bar">
            <h5>Products</h5>
            <div className="prices">
              <h5>Price</h5>
              <h5>Quantity</h5>
              <h5>Total</h5>
            </div>
          </div>
          <hr />
          {items.map((item) => {
            const pricer = item.quantity * item.price;
            total += pricer;

            return (
              <div className="display-shopping">
                <div className="cartFlex" key={item.id}>
                  <div className="imageAndname">
                    <img src={item.image} alt="" />
                    <h5 className="pricer">{item.title}</h5>
                  </div>
                  <div className="all">
                    <h5 className="price">${item.price}</h5>
                    <div className="buttons">
                      <button
                        className="betn btn-success"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>
                      <button
                        className="betn btn-success"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <h5 className="total">${pricer}</h5>
                    <DeleteOutlineIcon
                      className="trash"
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="cardShopping">
            <h4 className="totalH">Cart Totals</h4>
            <div className="text">
              <div className="subTotal">
                <h6 className="fw-normal text-start">Subtotal:</h6>
                <h6 className="fw-bold">${total}</h6>
              </div>
              <div className="shipping">
                <h6 className="fw-normal text-start">Shipping:</h6>
                <h6 className="fw-bold">$26.00</h6>
              </div>
              <div className="cartTotal">
                <h6 className="fw-normal text-start">Total: </h6>
                <h6 className="fw-bold">${total}</h6>
              </div>
            </div>
            <Button onClick={() => handleOpen()}  className="btn btn-success">Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box className="box" >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <input placeholder="ism familya" value={name} onChange={(e) => setName(e.target.value)} type="text" />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input placeholder="nomer telefon" type="text" value={num} onChange={(e) => setNum(e.target.value)} />
            </Typography>
            <button onClick={() => register()}>click me</button>
          </Box>
        </Modal>
            
            <Link to="/">
              <h5>Continue Shopping</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
