import React, { useState } from "react";
import { addPizza } from "../actions/pizzaActions";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

function AddPizza() {
  const [name, setName] = useState("");
  const [smallprice, setSmallPrice] = useState("");
  const [mediumprice, setMediumPrice] = useState("");
  const [largeprice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const addPizzaState = useSelector(state=> state.addPizzaReducer);
  const {success, loading, error} = addPizzaState;

  function formHandler(e) {
    e.preventDefault();

    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: parseInt(smallprice),
        medium: parseInt(mediumprice),
        large: parseInt(largeprice)
      }
    }

    console.log(pizza);
    dispatch(addPizza(pizza));
  }

  return (
    <div>
      <div className="text-left">
        <h3> Add Pizza </h3>
        {loading && (<Loading />)}
        {error && (<Error error={error} /> )}
        {success && (<Success success="Your pizza has been added successfully"/>)}
        <form onSubmit={formHandler} >
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Small varient price"
            value={smallprice}
            onChange={(e) => {
              setSmallPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Medium varient price"
            value={mediumprice}
            onChange={(e) => {
              setMediumPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Large Varient Price"
            value={largeprice}
            onChange={(e) => {
              setLargePrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image link"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Description...."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <button type="submit mt-3" className="btn"> Add Pizza</button>
        </form>
      </div>
    </div>
  );
}

export default AddPizza;
