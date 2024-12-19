import React, { useState } from 'react'
import Left from './Components/Left';
import Right from './Components/Right';
import data from './Components/data';

const App = () => {

  const [selectedCard, setSelectedCard] = useState(null);

  function handleselectCard(card){
    setSelectedCard(card);
  };

  return (
    <>
      <div>
        <div style={{color:"white"}}>
          <center><h2>Bios</h2></center>
        </div><hr></hr>
        <div style={{display:"flex"}}>
          <div style={{width:"30%", border:"1px solid", overflowY: "auto", height: "650px"}}>
            <Left cards = {data} onSelectCard = {handleselectCard}/>
          </div>
          <div style={{width:"70%", border:"1px solid"}}>
            <Right selectedCard = {selectedCard}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
