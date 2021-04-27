import React from 'react'
import CardItem from './CardItem';

function EducationMain() {
    return (
        <div className='cards'>
        <h1>Education</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='/images/bu1.jpeg'
                text='Check out our work at Universities'
                label='Universities'
                path='/educationUniversities'
              />
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='/images/thsimg2.jpeg'
                text='Check out our work at High Schools'
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
