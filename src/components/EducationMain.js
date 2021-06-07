import React from 'react'
import './Cards.css';
import CardItem from './CardItem';

function EducationMain() {
  window.scrollTo(0,0);
    return (
        <div className='cards'>
        <h1>Education</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='/images/bu1.jpeg'
                text='Universities and Colleges'
                label='Universities'
                path='/educationUniversities'
              />
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='/images/thsimg2.jpeg'
                text='High Schools'
                label='High Schools'
                path='/educationHS'
              />
            </ul>

          </div>
        </div>
      </div>
    )
}

export default EducationMain
