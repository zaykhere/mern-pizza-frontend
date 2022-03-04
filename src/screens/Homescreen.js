import React from "react";
import Pizza from "../components/Pizza";
import pizzas from "../pizzasdata";

const Homescreen = () => {
  return (
    <div className="menu">
      <h2 className="text-center mt-3"> Our Menu </h2>
      <div className="row pizzas text-center mt-3">
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-4 p-3">
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homescreen;
