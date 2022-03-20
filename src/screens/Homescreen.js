import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Pizza from "../components/Pizza";
import Error from "../components/Error";
import Filter from "../components/Filter";

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
      <Filter /> 
      <div className="row justify-content-center pizzas text-center mt-3">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error='Something went wrong' />
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
