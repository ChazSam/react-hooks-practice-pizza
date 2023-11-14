import React from "react";

function Pizza({ setEditPizza, pizza:{topping, size, vegetarian, id} }) {

function  handleClick(){
    let newPizza = {id:id,topping:topping, size:size, vegetarian:vegetarian}
    setEditPizza(newPizza)
}

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian === true ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleClick} value={id}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
