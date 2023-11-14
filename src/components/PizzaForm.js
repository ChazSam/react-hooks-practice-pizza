import React from "react";

function PizzaForm({pizzas, setPizzas, editPizza, setEditPizza}) {


function handleSubmit(e){
  e.preventDefault()

  if(editPizza !== ""){
    const updatePizza = pizzas.map((pizza) =>
    editPizza.id === pizza.id ? { ...pizza, ...editPizza } : pizza
  );
    setPizzas(updatePizza)
}}


function handleChange(e){
  if(e.target.value === "Vegetarian" ){
    setEditPizza({
      ...editPizza, 
      [e.target.name] : true})
  } else if(e.target.value === "Not Vegetarian"){
    setEditPizza({
      ...editPizza, 
      [e.target.name] : false})
  }else{
    setEditPizza({
      ...editPizza, 
      [e.target.name] : e.target.value})
  }}

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={handleChange}
            value={editPizza.topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={handleChange} value={editPizza.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={handleChange}
              checked={editPizza.vegetarian === true}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check" onChange={handleChange} >
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={editPizza.vegetarian === false}
              
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
