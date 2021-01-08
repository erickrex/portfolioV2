import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./Button";

// const CardLeft = () => {
  
//   const [count, setCount] = React.useState(0);
  
//   const estado = (num) => {
//         setCount(count + num );
//         console.log(count);
//   }}

  function CardLeft(props) {
   return (
      <>
      <div className='big-card' >
          
          <div className='gradient-wrapper'>
            <a href={props.url}>    
              <img src={props.src}
              className='hero-project'/>
              </a> 
          </div>
          
          <div className='project'>
            <h3 className='project-title'>{props.text}</h3>
            <p className='project-description'>
            {props.description}
            </p>
          </div>
        </div>
    </>
    );
  
}

export default CardLeft;
