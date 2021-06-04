import React from 'react';
import CardItem from './CardItem';

function EducationBU() {
    return (
        <div className='cards'>
        <h1>Boston University</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='/images/bu1.jpeg'
                text='Boston University 1'
                label='BU1'
                path='/buImgOne'
              />
              <CardItem
                src='/images/bu2.jpeg'
                text='Boston University 2'
                label='BU2'
                path='/buImgTwo'
              />
            </ul>
            
          </div>
        </div>
      </div>
    )
}

export default EducationBU
