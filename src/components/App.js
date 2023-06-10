import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function AddToy(toy){
    setToys([...toys,toy])
  }
  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(res=>res.json())
    .then(toycards=>setToys(toycards))
  },[])

  function handleUpdateToy(updatedtoy){
    const updatedToys = toys.map((toy)=>{
      if(toy.id === updatedtoy.id){
        return updatedtoy
      }else{
        return toy
      }
    })
    setToys(updatedToys)
  }
  function DeleteToy(id){
    const ToysDisplay = toys.filter((gettoy)=> gettoy.id !== id)
    setToys(ToysDisplay)
  }
  

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={AddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onhandleDelete={DeleteToy} onhandleUpdate={handleUpdateToy}/>
    </>
  );
}

export default App;
