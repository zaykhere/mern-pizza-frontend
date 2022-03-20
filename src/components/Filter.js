import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

function Filter() {
  const dispatch = useDispatch();

  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <div className="container">
      <div className="row filter-row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-3" style={{ fontSize: "16px !important" }}>
          <input
            type="text"
            className="form-control search-pizza"
            placeholder="Search Pizzas"
            value={searchKey}
            onChange={(e)=> {setSearchKey(e.target.value)}}
          />
        </div>
        <div className="col-md-3 mt-2">
          <select className="form-control"
          value={category} 
          onChange={(e)=> {setCategory(e.target.value)}} >
            <option value="all"> All </option>
            <option value="veg"> Veg </option>
            <option value="nonveg"> NonVeg </option>
          </select>
        </div>
        <div className="col-md-3 mt-2">
          <button
            className="btn"
            onClick={() => {
              dispatch(filterPizzas(searchKey, category));
            }}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
