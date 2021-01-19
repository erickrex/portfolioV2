import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button';

function Cards() {
  return (
    <div className='cards'>
      <h1>I build web apps and micro startups!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='JavaScript development'
              label='ReactJS'
              
            />
            <CardItem
              src='images/img-4.JPG'
              text= 'Marketing and analytics'
              label='Jupyter Notebooks'
              
            />
            <CardItem
              src='images/img-5.png'
              text='MVP development'
              label='WordPress'
              
            />
            
          </ul>
        </div>
        <h1 style={{padding:30}}>
        WHAT I AM BUILDING NOW
        </h1>
        <Button buttonStyle='btn--primary'>NOW</Button>
      </div>
    </div>
  );
}

export default Cards;
