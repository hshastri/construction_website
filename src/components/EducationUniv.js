import React from 'react';
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
                text='Check out our work at Boston University'
                label='BU'
                path='/educationBU'
              />
              <CardItem
                src='/images/umass1.jpeg'
                text='Check out our work at Umass Lowell'
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
