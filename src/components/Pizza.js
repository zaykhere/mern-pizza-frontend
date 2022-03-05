import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      
      className="pizza-div shadow p-3 mb-5 bg-body rounded"
    >
      <div onClick={handleShow}>
        <h4> {pizza.name} </h4>
        <img src={pizza.image} className="img-fluid pizza-img" />
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <p> Varients </p>
          <select
            value={varient}
            className="form-control"
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => (
              <option value={varient}> {varient} </option>
            ))}
          </select>
        </div>

        <div className="m-1 w-100">
          <p> Quantity </p>
          <select
            value={quantity}
            className="form-control"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h5 className="mt-1">
            {" "}
            Price: {pizza.prices[0][varient] * quantity} Rs.{" "}
          </h5>
        </div>
        <div className="m-1 w-100">
          <button className="btn">ADD TO CART</button>
        </div>
      </div>



      {show &&  ( <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          <img className="img-fluid" src={pizza.image} height="150" width="150" />
          <p className="mt-3"> {pizza.description} </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
      )}
    </div>
  );
};

export default Pizza;
