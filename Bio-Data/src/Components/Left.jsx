import React from 'react';

const Left = ({cards, onSelectCard}) => {

    function onclickhandler(card){
        onSelectCard(card);
    }

  return (
    <div style={{color:"white"}}>
      <center>
        <div>
          {cards.map((i) => {
            return(
              <div key={i.id} 
                style={{border:"1px solid", margin:"10px", borderRadius:"20px", backgroundColor:"#B4121B",color:"white", cursor:"pointer"}}
                onClick={() => onclickhandler(i)}>
                <h2>{i.name}</h2>
                <p>ID : {i.id}</p>
              </div>
            )
          })}
        </div>
      </center>
    </div>
  )
}

export default Left;
