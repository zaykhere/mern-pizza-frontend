import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editPizza, getPizzaById } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

function EditPizza() {
  const [name, setName] = useState("");
  const [smallprice, setSmallPrice] = useState("");
  const [mediumprice, setMediumPrice] = useState("");
  const [largeprice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const getPizzaByIdState = useSelector(state=> state.getPizzaByIdReducer);
  const {pizza, error, loading} = getPizzaByIdState;

  const editPizzaState = useSelector(state=>state.editPizzaReducer);
  const {editloading, editerror, editsuccess} = editPizzaState;

  const { pizzaid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if(pizza && pizza._id == pizzaid) {
        setName(pizza.name);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setSmallPrice(pizza.prices[0]["small"]);
        setMediumPrice(pizza.prices[0]["medium"]);
        setLargePrice(pizza.prices[0]["large"]);
        setImage(pizza.image);
    }  
    else {
    dispatch(getPizzaById(pizzaid));
    }
  }, [pizza, dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const updatedPizza = {
      pizzaId: pizzaid,  
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

    dispatch(editPizza(updatedPizza));
  }

  return (
    <>
      <div>
        <h2 className="text-center mt-2 mb-3">Edit Pizza</h2>
        {loading && <Loading />}
        {error && <Error error={error} />}

        {editloading && <Loading />}
        {editerror && <Error error={editerror} />}
        {editsuccess && <Success success="Pizza updated successfully" /> }
        
        <form onSubmit={formHandler}>
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
          <button type="submit" className="btn mt-3">
            Update Pizza
          </button>
        </form>
      </div>
    </>
  );
}

export default EditPizza;
