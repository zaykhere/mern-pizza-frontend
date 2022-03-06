import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Pizza from "../components/Pizza";

const Homescreen = () => {
  const dispatch = useDispatch();

  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <>
    <div className="menu">
      <h2 className="text-center mt-3"> Our Menu </h2>
      <div className="row pizzas text-center mt-3">
        {loading ? (
          <h2> Loading </h2>
        ) : error ? (
          <h1> Something went wrong</h1>
        ) : (
          <>
          {pizzas.map((pizza) => {
            return (
              <div key={pizza._id} className="col-md-4 p-3">
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })}
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default Homescreen;
