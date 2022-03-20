import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Filter() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row filter-row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-3" style={{fontSize: '16px !important'}}>
          <input
            type="text"
            className="form-control search-pizza"
            placeholder="Search Pizzas"
          />
        </div>
        <div className="col-md-3 mt-2">
            <select className="form-control">
                <option value="all"> All </option>
                <option value="veg"> Veg </option>
                <option value="nonveg"> NonVeg </option>
            </select>
        </div>
        <div className="col-md-3 mt-2">
            <button className="btn"> Filter</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
