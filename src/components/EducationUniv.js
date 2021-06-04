import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function EducationUniv() {
    return (
        <div className='cards'>
        <h1>Universities</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='/images/bu1.jpeg'
                text='Boston University (BU)'
                label='BU'
                path='/educationBU'
              />
              <CardItem
                src='/images/umass1.jpeg'
                text='Umass Lowell (UML)'
                label='UML'
                path='/educationUmass'
              />
            </ul>
            
          </div>
        </div>
      </div>
    )
}

export default EducationUniv
