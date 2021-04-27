import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our work!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/bu4.jpeg'
              text='Check out the jobs we did for Colleges and Universities'
              label='Education'
              path='/education'
            />
            <CardItem
              src='/images/7inkrooftop.jpeg'
              text='Check out the jobs we did for Housing and Hospitality Services'
              label='Housing and Hospitality'
              path='/housingAndHospitality'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;