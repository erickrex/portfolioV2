import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./Button";



  function CardLeft(props) {
   return (
      <>
      <Link className='big-card' to={props.path}>
          
          <div className='gradient-wrapper'>    
              <img src={props.src}
              className='hero-project'/> 
          </div>
          
          <div className='project'>
            <h3 className='project-title'>{props.text}</h3>
            <p className='project-description'>
            {props.description}
            </p>
          </div>
        </Link>
    </>
    );
  
}

export default CardLeft;
