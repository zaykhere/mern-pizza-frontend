import React, { useState } from "react";

const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  return (
    <div style={{marin: '70px'}} className="pizza-div shadow p-3 mb-5 bg-body rounded">
      <h4> {pizza.name} </h4>
      <img src={pizza.image} className="img-fluid pizza-img" />

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
          <h5 className="mt-1"> Price: {pizza.prices[0][varient] * quantity} Rs. </h5>
        </div>
        <div className="m-1 w-100">
            <button className="btn">
                ADD TO CART
            </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
