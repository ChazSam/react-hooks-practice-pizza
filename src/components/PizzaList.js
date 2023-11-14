import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, setEditPizza}) {

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          //render Pizza here

          pizzas.map((piz)=>(
            <Pizza key={piz.id} pizza={piz}  setEditPizza={setEditPizza}/>
          ))
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
