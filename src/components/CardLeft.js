import React, {useEffect} from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
   
function CardLeft(props) {

   
    return (
      <>
      <div className='big-card'>
          
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
