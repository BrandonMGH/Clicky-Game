import React from "react";
import "./style.css";

function DBZcard(props) {



 
  return (
    <div className="card">
      <div className="img-container">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleClick(props.id)} className='shuffleScore'/>
      </div >
      <div className="content">
        <ul>
          <li>
          
            
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default DBZcard;
