import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys,onhandleDelete, onhandleUpdate}) {

  return (
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {toys.map((toy)=>
        <ToyCard key = {toy.id} toy={toy} onDeleteToy={onhandleDelete} onUpdateToy={onhandleUpdate}/>
      )}
      </div>
  );
}

export default ToyContainer;
