import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePizza, getAllPizzas } from "../actions/pizzaActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function PizzasList() {
  const dispatch = useDispatch();

  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: "28px" }} className="mt-2 mb-2 text-center">
        Pizzas List
      </h2>
      {loading && <Loading />}
      {error && <Error error={error} />}
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pizzas &&
            pizzas.map((pizza) => (
              <tr>
                <td> {pizza.name} </td>
                <td>
                  Small: {pizza.prices[0]["small"]} <br />
                  Medium: {pizza.prices[0]["medium"]} <br />
                  Large: {pizza.prices[0]["large"]}
                </td>
                <td> {pizza.category} </td>
                <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="icon m-2"
                      color="red"
                      onClick={()=>{dispatch(deletePizza(pizza._id))}}
                    />
                  <Link to={`/admin/editpizza/${pizza._id}`}>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="icon m-2"
                    color="black"
                  />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default PizzasList;
