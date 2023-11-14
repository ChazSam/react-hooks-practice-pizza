import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then (r => r.json())
    .then (item => setPizzas(item))
  }, [])

  const [editPizza, setEditPizza] = useState({
    id:"",
    topping:"",
    size:"",
    vegetarian:""
  })

  return (
    <>
      <Header />
      <PizzaForm pizzas={pizzas} setPizzas={setPizzas} editPizza={editPizza} setEditPizza={setEditPizza}/>
      <PizzaList pizzas={pizzas} editPizza={setPizzas} setEditPizza={setEditPizza}/>
    </>
  );
}

export default App;
