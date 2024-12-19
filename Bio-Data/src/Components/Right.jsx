import React from 'react'

const Right = ({selectedCard}) => {
  return (
    <div style={{color:"white"}}>
      {selectedCard ? (
        <>
          <div style={{paddingLeft:"20px"}}>
              <h3>Id : {selectedCard.id}</h3>
          </div>
          <div>
            <center>
                <h2>{selectedCard.name}</h2>
                <p>Age : {selectedCard.age}</p>
                <p>Place : {selectedCard.place}</p>
            </center>
          </div>
        </>
      ):(
        <p>Select a Card to View Details.</p>
      )
      }
    </div>
  )
}

export default Right;
