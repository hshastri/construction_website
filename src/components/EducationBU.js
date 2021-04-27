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

            <ul className='cards__items'>
              <CardItem
                src='/images/bu3.jpeg'
                text='Boston University 3'
                label='BU3'
                path='/buImgThree'
              />
              <CardItem
                src='/images/bu4.jpeg'
                text='Boston University 4'
                label='BU4'
                path='/buImgFour'
              />
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='/images/bu5.jpeg'
                text='Boston University 5'
                label='BU5'
                path='/buImgFive'
              />
              <CardItem
                src='/images/bu6.jpeg'
                text='Boston University 6'
                label='BU6'
                path='/buImgSix'
              />
            </ul>
            
          </div>
        </div>
      </div>
    )
}

export default EducationBU
