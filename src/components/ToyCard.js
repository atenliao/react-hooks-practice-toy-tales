import React, { useState } from "react";

function ToyCard({toy, onDeleteToy, onUpdateToy}) {
  const {id,name,image, likes} = toy
  const [count, setCount]=useState(likes+1)
  function onClickUpdateToy(){
    setCount(count+1)
    fetch(`http://localhost:3001/toys/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        likes: count
      })
    })
    .then(res=>res.json())
    .then(toy=> onUpdateToy(toy))
  }
  function onClickDeleteToy(){
    onDeleteToy(id)
    fetch(`http://localhost:3001/toys/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
 
  }  
  return (
    <div className="card">
      <h2>{name /* Toy's Name */}</h2>
      <img
        src={image}
        alt={name /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{likes /* Toy's Likes */} Likes </p>
      <button className="like-btn"onClick={onClickUpdateToy}>Like {"<3"}</button>
      <button className="del-btn" onClick={onClickDeleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
