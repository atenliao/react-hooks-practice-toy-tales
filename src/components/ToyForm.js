import React, { useState } from "react";

function ToyForm({onAddToy}) {
  const [newToyCard, setNewToyCard] = useState({
    name: '',
    image:'',
    likes:0,
  })

function handleChange(event){
  setNewToyCard({
    ...newToyCard,
    [event.target.name]: event.target.value,
})
}

  function handleSubmitForm(event){
    event.preventDefault()
    const updatedToyCard = {
      name:newToyCard.name,
      image:newToyCard.image,
      likes:0
    }
    fetch("http://localhost:3001/toys",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedToyCard)
    })
    .then(res=>res.json())
    .then(toycard=> onAddToy(toycard))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmitForm}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={handleChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
