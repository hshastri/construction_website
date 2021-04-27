import React from 'react';
import CardItem from './CardItem';

function EducationUmass() {
    return (
        <div className='cards'>
        <h1>Umass Lowell</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='/images/umass1.jpeg'
                text='Umass Lowell 1'
                label='UML1'
                path='/uml1'
              />
              <CardItem
                src='/images/umass2.jpeg'
                text='Umass Lowell 2'
                label='UML2'
                path='/uml2'
              />
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='/images/umass3.jpeg'
                text='Umass Lowell 3'
                label='UML3'
                path='/uml3'
              />
              <CardItem
                src='/images/umass4.jpeg'
                text='Umass Lowell 4'
                label='UML4'
                path='/uml4'
              />
            </ul>

            <ul className='cards__items'>
              <CardItem
                src='/images/umass5.jpeg'
                text='Umass Lowell 5'
                label='UML5'
                path='/uml5'
              />
              <CardItem
                src='/images/umass6.jpeg'
                text='Umass Lowell 6'
                label='UML6'
                path='/uml6'
              />
            </ul>
            
          </div>
        </div>
      </div>
    )
}

export default EducationUmass
